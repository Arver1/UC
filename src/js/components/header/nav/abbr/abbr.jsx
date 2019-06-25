import React from 'react';
import PropTypes from 'prop-types';
import { StyledLink, Abbr } from './styled';


export const LogoAbbr = ({ title }) => (
  <Abbr title={title}>
    <StyledLink to="/">
      МРЦОК
    </StyledLink>
  </Abbr>
);


LogoAbbr.defaultProps = {
  title: 'Межрегиональный центр оценки квалификации электроэнергетики',
};

LogoAbbr.propTypes = {
  title: PropTypes.string,
};
