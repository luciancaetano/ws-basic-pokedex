import React, {
  ChangeEvent, useCallback, useMemo, useState,
} from 'react';
import { useDidMount } from '@components/hooks';
import { useDispatch, useSelector } from 'react-redux';
import { pokeDexActions } from '@redux/actions/pokedex.actions';
import { IAppState } from '@types';
import { PageContainer, PokemonTypeTag } from '@components/elements';
import {
  capitalize, first, map, filter,
} from 'lodash';
import classnames from 'classnames';
import { useHistory } from 'react-router-dom';
import Loader from 'react-loading';
import { PokemonListViewContainer, PokedexItem } from './styles';

const PokemonsListView = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [search, setSearch] = useState('');
  const pokeListState = useSelector((state: IAppState) => state.pokeList);

  const filtredPokeList = useMemo(() => {
    if (search.trim().length > 0) {
      return filter(pokeListState.items, (item) => item.name.trim().toLowerCase().startsWith(search) || item.name.trim().toLowerCase().endsWith(search));
    }

    return pokeListState.items;
  }, [search, pokeListState.items]);

  useDidMount(() => {
    dispatch(pokeDexActions.getPokemons(0, 60));
  });

  const handleItemClick = useCallback((id: number) => () => {
    history.push(`/info/${id}`);
  }, [history]);

  const handleSearchChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }, []);

  const pokeListItems = useMemo(() => map(filtredPokeList, (item) => (
    <PokedexItem className={classnames(`type-${first(item.types)}`)} onClick={handleItemClick(item.id)}>
      <div className="id">#{String(item.id).padStart(3, '0')}</div>
      <div className="pokemon-name">{item.name}</div>
      <div className="types-container">
        {map(item.types, (tag) => (
          <PokemonTypeTag className={tag}>
            {capitalize(tag)}
          </PokemonTypeTag>
        ))}
      </div>
      <div className="pokemon-image" style={{ backgroundImage: `url('${item.image}')` }} />
    </PokedexItem>
  )), [filtredPokeList, handleItemClick]);

  return (
    <PageContainer>
      <PokemonListViewContainer>
        <div className="heading-container">
          <div className="title">
            <h1>
              Pokédex
            </h1>
            <h2>
              Search for Pokémon by name or using the National Pokédex number.
            </h2>
          </div>
          <div className="search-container">
            <input placeholder="What Pokémon are you looking for?" value={search} onChange={handleSearchChange} />
          </div>
        </div>

        <div className="list-container">
          {pokeListState.loading && (
            <Loader type="bubbles" color="var(--pokemon-type-color-grass)" />
          )}
          {pokeListItems}
        </div>

      </PokemonListViewContainer>
    </PageContainer>
  );
};

export default PokemonsListView;
