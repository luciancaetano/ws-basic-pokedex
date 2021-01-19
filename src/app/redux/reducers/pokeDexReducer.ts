import {
  POKELIST_GET_POKEMONS_ERROR, POKELIST_GET_POKEMONS_LOADING, POKELIST_GET_POKEMONS_SUCCESS,
  POKELIST_GET_DETAILED_POKEMON_LOADING, POKELIST_GET_DETAILED_POKEMON_SUCCESS, POKELIST_GET_DETAILED_POKEMON_ERROR,
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

  [POKELIST_GET_DETAILED_POKEMON_LOADING]: (state, action) => state
    .setIn(['loadingItems', action.payload.id], true),

  [POKELIST_GET_DETAILED_POKEMON_SUCCESS]: (state, action) => state
    .setIn(['loadingItems', action.payload.id], false)
    .setIn(['items', action.payload.id], action.payload.pokemon),

  [POKELIST_GET_DETAILED_POKEMON_ERROR]: (state, action) => state
    .setIn(['loadingItems', action.payload.id], false)
    .set('error', true),
});
