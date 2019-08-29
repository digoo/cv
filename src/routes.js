import React from 'react';
import { MemoryRouter, Switch, Route } from 'react-router-dom';

import Exp from './pages/Exp';
import Edu from './pages/Edu';
import Port from './pages/Port';

export default function Routes() {
  return (
    <MemoryRouter>
      {/* <Switch> */}
      <Route exact path="/" component={Exp} />
      <Route exact path="/cv/" component={Exp} />
      <Route path="/cv/education" component={Edu} />
      <Route path="/cv/portfolio" component={Port} />
      {/* </Switch> */}
    </MemoryRouter>
  );
}
