import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';

import Exp from './Center/Exp';
import Info from './Left/Info';
import Add from './Right/Add';
import Edu from './Center/Edu';
import Port from './Center/Port';

export default function Routes() {
  return (
    <MemoryRouter>
      <Route exact path="/" component={Info} />
      <Route path="/cv/info" component={Info} />
      <Route path="/cv/experience" component={Exp} />
      <Route path="/cv/add" component={Add} />
      <Route path="/cv/education" component={Edu} />
      <Route path="/cv/portfolio" component={Port} />
    </MemoryRouter>
  );
}
