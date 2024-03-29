import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, StyledLink } from './styled';


const SVGIcon = () => (
  <svg className="icon" width="20" height="20">
    <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#chevron-right" />
  </svg>
);

export const RouteList = ({ data }) => (
  <List>
    {data.map(({ count, name, href }, index) => (
      <ListItem key={index}>
        <StyledLink to={ href }><SVGIcon /></StyledLink>
        <b>{count}</b>
        {` ${name}`}
      </ListItem>
    ))}
  </List>
);


RouteList.defaultProps = {
  data: [],
};

RouteList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    count: PropTypes.number,
    name: PropTypes.string,
    href: PropTypes.string,
  })),
};
