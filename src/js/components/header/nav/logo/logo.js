import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';


const IMGStyled = styled.img`
  transition-duration: 2s;
  @media (min-width: 500px){
    width: 80px;
    height: 80px;
  }
`;

export const Logo = () => {
  return (
    <Link to="/">
      <IMGStyled src="src/img/logo.svg" width="30" height="30"/>
    </Link>
  )
};
