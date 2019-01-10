import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from './App';
import Upcoming from './Upcoming';

// Ajouter ici les routes vers les pages
const Routing = () => (
  <main>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/upcoming" component={Upcoming} />
    </Switch>
  </main>
);

export default Routing;
