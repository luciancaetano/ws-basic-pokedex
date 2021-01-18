import {
  IAppAction, IPokemonStats, IProkeMonListItem, TPokemonTypes,
} from '@types';
import { pokeApi } from '@utils/api';
import { toRecord } from '@utils/collection';
import {
  map, toNumber, capitalize, get, forEach, set, uniq,
} from 'lodash';
import { Dispatch } from 'react';
import camelcase from 'camelcase';

export const POKELIST_GET_POKEMONS_LOADING = 'pokelist::POKELIST_GET_POKEMONS_LOADING';
export const POKELIST_GET_POKEMONS_SUCCESS = 'pokelist::POKELIST_GET_POKEMONS_SUCCESS';
export const POKELIST_GET_POKEMONS_ERROR = 'pokelist::POKELIST_GET_POKEMONS_ERROR';

export const POKELIST_GET_GENERATIONS_LOADING = 'pokelist::POKELIST_GET_GENERATIONS_LOADING';
export const POKELIST_GET_GENERATIONS_SUCCESS = 'pokelist::POKELIST_GET_GENERATIONS_SUCCESS';
export const POKELIST_GET_GENERATIONS_ERROR = 'pokelist::POKELIST_GET_GENERATIONS_ERROR';

const fetchPokemonListItemMetaData = async (id: number) => {
  const response = await pokeApi.get(`pokemon/${id}`);

  const types = map(get(response.data, 'types'), (item) => get(item, ['type', 'name']));
  const height = get(response.data, 'height');
  const weight = get(response.data, 'weight');

  const stats: IPokemonStats = {
    accuracy: 0,
    attack: 0,
    defense: 0,
    evasion: 0,
    hp: 0,
    specialAttack: 0,
    specialDefense: 0,
    speed: 0,
  };

  forEach(get(response.data, 'stats'), (item) => {
    const statsName = camelcase(get(item, ['stat', 'name']));
    set(stats, statsName, get(item, 'base_stat', 0));
  });

  return {
    stats, types, height, weight,
  };
};

const fetchPokemonListItemTypeMetaData = async (types: Array<TPokemonTypes>) => {
  const weaknesses: Array<TPokemonTypes> = [];
  const strongAgainst: Array<TPokemonTypes> = [];

  await Promise.all(map(types, async (pokemonType) => {
    const response = await pokeApi.get(`type/${pokemonType}`);
    forEach(get(response.data, ['damage_relations', 'double_damage_from']), ({ name }) => {
      weaknesses.push(name);
    });

    forEach(get(response.data, ['damage_relations', 'double_damage_to']), ({ name }) => {
      strongAgainst.push(name);
    });
  }));

  return {
    weaknesses: uniq(weaknesses),
    strongAgainst: uniq(strongAgainst),
  };
};

const getPokemons = (from: number, to: number) => async (dispatch: Dispatch<IAppAction>) => {
  dispatch({ type: POKELIST_GET_POKEMONS_LOADING });

  try {
    const response = await pokeApi.get(`pokemon/?limit=${to}&offset=${from}`);

    const data = map(get(response.data, 'results', []), async (item) => {
      const id = toNumber(String(item.url).replace('https://pokeapi.co/api/v2/pokemon/', '').replace('/', ''));

      const metadata = await fetchPokemonListItemMetaData(id);
      const typesMetadata = await fetchPokemonListItemTypeMetaData(metadata.types);

      return {
        name: capitalize(item.name),
        id,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
        isFull: false,
        ...metadata,
        ...typesMetadata,
      } as IProkeMonListItem;
    });

    dispatch({
      type: POKELIST_GET_POKEMONS_SUCCESS,
      payload: {
        items: toRecord(await Promise.all(data)),
        count: get(response.data, 'count', 0),
      },
    });
  } catch (e) {
    dispatch({ type: POKELIST_GET_POKEMONS_ERROR });
  }
};

const getPokemonListGenerationSpecies = () => async (dispatch: Dispatch<IAppAction>) => {
  dispatch({ type: POKELIST_GET_GENERATIONS_LOADING });
  try {
    const generations = await pokeApi.get('generation');

    const generationSpecies = await Promise.all(map(generations.data.results, async (_gen, index) => {
      const generation = await pokeApi.get(`generation/${index + 1}`);
      return map(get(generation.data, 'pokemon_species'), ({ name }) => name);
    }));

    dispatch({ type: POKELIST_GET_GENERATIONS_SUCCESS, payload: generationSpecies });
  } catch (e) {
    dispatch({ type: POKELIST_GET_GENERATIONS_ERROR });
  }
};

export const pokeDexActions = { getPokemons, getPokemonListGenerationSpecies };
