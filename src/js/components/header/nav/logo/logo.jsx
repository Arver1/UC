import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { HEADER_DESKTOP_WIDTH } from '../../../styles';


const IMGStyled = styled.img`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  
  @media (min-width: ${HEADER_DESKTOP_WIDTH}) {
    width: 50px;
    height: 50px;
  }
`;

export const Logo = ({ width, height }) => (
  <Link to="/" style={{ alignSelf: 'flex-start' }}>
    <IMGStyled width={width} height={height} src="src/img/logo.svg" alt="Логотип" title="Логотип" />
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
