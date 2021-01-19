import {
  IAppAction, IPokemonStats, IPokemonListItem, IPokemonAbility,
} from '@types';
import { pokeApi } from '@utils/api';
import { toRecord } from '@utils/collection';
import {
  map, toNumber, capitalize, get, forEach, set, first,
} from 'lodash';
import { Dispatch } from 'react';
import camelcase from 'camelcase';

export const POKELIST_GET_POKEMONS_LOADING = 'pokelist::POKELIST_GET_POKEMONS_LOADING';
export const POKELIST_GET_POKEMONS_SUCCESS = 'pokelist::POKELIST_GET_POKEMONS_SUCCESS';
export const POKELIST_GET_POKEMONS_ERROR = 'pokelist::POKELIST_GET_POKEMONS_ERROR';

export const POKELIST_GET_DETAILED_POKEMON_LOADING = 'pokelist::POKELIST_GET_DETAILED_POKEMON_LOADING';
export const POKELIST_GET_DETAILED_POKEMON_SUCCESS = 'pokelist::POKELIST_GET_DETAILED_POKEMON_SUCCESS';
export const POKELIST_GET_DETAILED_POKEMON_ERROR = 'pokelist::POKELIST_GET_DETAILED_POKEMON_ERROR';

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

const getPokemons = (from: number, to: number) => async (dispatch: Dispatch<IAppAction>) => {
  dispatch({ type: POKELIST_GET_POKEMONS_LOADING });

  try {
    const response = await pokeApi.get(`pokemon/?limit=${to}&offset=${from}`);

    const data = map(get(response.data, 'results', []), async (item) => {
      const id = toNumber(String(item.url).replace('https://pokeapi.co/api/v2/pokemon/', '').replace('/', ''));

      const metadata = await fetchPokemonListItemMetaData(id);

      return {
        name: capitalize(item.name),
        id,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
        isFull: false,
        ...metadata,
      } as IPokemonListItem;
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

const getPokemonsFullInfo = (id: number) => async (dispatch: Dispatch<IAppAction>) => {
  dispatch({ type: POKELIST_GET_DETAILED_POKEMON_LOADING, payload: { id } });

  try {
    const pokemonRequest = await pokeApi.get(`pokemon/${id}`);

    const types = map(get(pokemonRequest.data, 'types'), (item) => get(item, ['type', 'name']));
    const height = get(pokemonRequest.data, 'height');
    const weight = get(pokemonRequest.data, 'weight');

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

    forEach(get(pokemonRequest.data, 'stats'), (item) => {
      const statsName = camelcase(get(item, ['stat', 'name']));
      set(stats, statsName, get(item, 'base_stat', 0));
    });

    const specieRequest = await pokeApi.get(`pokemon-species/${id}`);

    const description = get(first(get(specieRequest.data, ['flavor_text_entries'])), 'flavor_text', '');

    const abilities = await Promise.all(map(get(pokemonRequest.data, ['abilities'], []), async (item) => {
      const abilityRequest = await pokeApi.get(`ability/${get(item, ['ability', 'name'])}`);
      return {
        name: get(item, ['ability', 'name']),
        description: get(
          first(get(abilityRequest.data, 'flavor_text_entries', [])),
          'flavor_text',
        ),
      } as IPokemonAbility;
    }));

    const pokemonObject = {
      stats,
      types,
      height,
      weight,
      description,
      abilities,
      id,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
      isFull: true,
      name: capitalize(get(pokemonRequest.data, 'name', '')),
    } as IPokemonListItem;

    dispatch({ type: POKELIST_GET_DETAILED_POKEMON_SUCCESS, payload: { id, pokemon: pokemonObject } });
  } catch (e) {
    dispatch({ type: POKELIST_GET_DETAILED_POKEMON_ERROR, payload: { id } });
  }
};

export const pokeDexActions = { getPokemons, getPokemonsFullInfo };
