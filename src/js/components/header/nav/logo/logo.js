import React from 'react';
import {Link} from 'react-router-dom';

export const Logo = () => {
  return (
    <Link to="/">
      <img src="src/img/logo.svg" width="30" height="30"/>
    </Link>
  )
};
