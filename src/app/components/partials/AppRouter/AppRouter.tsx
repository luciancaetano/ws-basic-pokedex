import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import * as views from '@components/views';

const AppRouter = () => (
  <Router>
    <Switch>
      <Route path="/list" render={(props: any) => <views.PokemonsListView {...props} />} />
      <Route path="/info/about/:id" render={(props: any) => <views.AboutPokemon {...props} />} />
      <Route path="/info/evolutions/:id" render={(props: any) => <views.PokemonEvolution {...props} />} />
      <Route path="/info/stats/:id" render={(props: any) => <views.PokemonStats {...props} />} />
      <Redirect to="/list" from="/" />
    </Switch>
  </Router>
);

export default React.memo(AppRouter);
