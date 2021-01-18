import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';

const enhancers = composeWithDevTools(applyMiddleware(ReduxThunk));

export default createStore(reducers, enhancers);
