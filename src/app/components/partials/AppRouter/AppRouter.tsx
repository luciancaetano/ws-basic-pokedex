import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import * as views from '@components/views';
import { AppLayout } from '@components/partials';

const AppRouter = () => (
  <Router>
    <AppLayout>
      <Switch>
        <Route path="/list" render={(props: any) => <views.PokemonsListView {...props} />} />
        <Route path="/info/:id" render={(props: any) => <views.PokemonInfo {...props} />} />
        <Redirect to="/list" from="/" />
      </Switch>
    </AppLayout>
  </Router>
);

export default React.memo(AppRouter);
