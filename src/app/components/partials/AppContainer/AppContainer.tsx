import React from 'react';
import { AppRouter } from '@components/partials';
import { Provider } from 'react-redux';
import configureStore from 'src/app/redux/configureStore';

const AppContainer = () => (
  <Provider store={configureStore}>
    <AppRouter />
  </Provider>
);

export default AppContainer;
