import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Exp from './pages/Exp';
import Edu from './pages/Edu';
import Port from './pages/Port';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/cv/" exact component={Exp} />
        <Route path="/cv/education" component={Edu} />
        <Route path="/cv/portfolio" component={Port} />
      </Switch>
    </BrowserRouter>
  );
}
