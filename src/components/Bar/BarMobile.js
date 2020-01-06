import React from 'react';
import { Link } from 'react-router-dom';

import { BarM } from './styles';

export default function BarMobile() {
  return (
    <BarM className="barMobile">
      <Link to="/cv/experience">
        <h1 className="left">Experience</h1>
      </Link>

      <Link to="/cv/info">
        <h1 className="center">Profile</h1>
      </Link>

      <Link to="/cv/add">
        <h1 className="right">Side tab</h1>
      </Link>
    </BarM>
  );
}
