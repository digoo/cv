import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';

import Exp from './Exp';
import Edu from './Edu';
import Port from './Port';

export default function Routes() {
  return (
    <MemoryRouter>
      <Route exact path="/" component={Exp} />
      <Route path="/cv/experience" component={Exp} />
      <Route path="/cv/education" component={Edu} />
      <Route path="/cv/portfolio" component={Port} />
    </MemoryRouter>
  );
}
