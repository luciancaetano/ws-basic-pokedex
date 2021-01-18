import { combineReducers } from 'redux';
import { pokeDexReducer } from './pokeDexReducer';

export default combineReducers({
  pokeList: pokeDexReducer,
});
