import React from 'react';
import {List, ListItem} from "./styled";


const SVGIcon = () => (
  <svg className="icon" width="20" height="20">
    <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#chevron-right">
    </use>
  </svg>
);

export const RouteList = ({data}) => (
  <List>
    {data.map(({count, name}, index) => {
      return (
        <ListItem key={index}>
          <SVGIcon />
          <b>{count}</b>
          {' ' + name}
        </ListItem>
      )
    })}
  </List>
);