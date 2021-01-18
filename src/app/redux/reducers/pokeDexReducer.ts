import {
  POKELIST_GET_POKEMONS_ERROR, POKELIST_GET_POKEMONS_LOADING, POKELIST_GET_POKEMONS_SUCCESS,
  POKELIST_GET_GENERATIONS_LOADING, POKELIST_GET_GENERATIONS_SUCCESS, POKELIST_GET_GENERATIONS_ERROR,
} from '@redux/actions/pokedex.actions';
import { IPokeDexState } from '@types';
import createReducer from '@utils/createReducer';
import { mergePokedexListFullData } from '@utils/collection';
import { get } from 'lodash';

import immutable, { Immutable } from 'seamless-immutable';

const initialState:Immutable<IPokeDexState> = immutable<IPokeDexState>({
  items: {},
  loading: false,
  error: false,
  loadingItems: {},
  count: 0,
  generationsSpecies: {},
  loadingGenerations: false,
});

export const pokeDexReducer = createReducer<typeof initialState>(initialState, {
  [POKELIST_GET_POKEMONS_LOADING]: (state) => state
    .set('loading', true).set('error', false),

  [POKELIST_GET_POKEMONS_ERROR]: (state) => state
    .set('loading', false).set('error', true),

  [POKELIST_GET_POKEMONS_SUCCESS]: (state, action) => {
    const stateItems = get(state, 'items', {});

    return state
      .set('loading', false).set('items', {
        ...stateItems,
        ...mergePokedexListFullData(stateItems, action.payload.items),
      })
      .set('count', action.payload.count);
  },

  [POKELIST_GET_GENERATIONS_LOADING]: (state) => state
    .set('loadingGenerations', true).set('error', false),

  [POKELIST_GET_GENERATIONS_ERROR]: (state) => state
    .set('loadingGenerations', false).set('error', true),

  [POKELIST_GET_GENERATIONS_SUCCESS]: (state, action) => state
    .set('loadingGenerations', true)
    .set('generationsSpecies', action.payload),

});
