import React from 'react';
import { useDidMount } from '@components/hooks';
import { useDispatch, useSelector } from 'react-redux';
import { pokeDexActions } from '@redux/actions/pokedex.actions';
import { IAppState } from '@types';

const PokemonsListView = () => {
  const dispatch = useDispatch();
  const pokeListState = useSelector((state: IAppState) => state.pokeList);

  useDidMount(() => {
    dispatch(pokeDexActions.getPokemons(0, 10));
    dispatch(pokeDexActions.getPokemonListGenerationSpecies());
  });

  console.info(pokeListState.items[1]);
  console.info(pokeListState.generationsSpecies);

  return (<div> heelo world</div>);
};

export default PokemonsListView;
