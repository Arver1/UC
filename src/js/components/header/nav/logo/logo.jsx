import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const IMGStyled = styled.img`
  transition-duration: 2s;
`;

export const Logo = ({ width, height }) => (
  <Link to="/" style={{ alignSelf: 'flex-start' }}>
    <IMGStyled src="src/img/logo.svg" width={width} height={height} alt="Логотип" title="Логотип" />
  </Link>
);

Logo.defaultProps = {
  width: 30,
  height: 30,
};

Logo.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};
