import React from 'react';
import { Link } from 'react-router-dom';
import dictionary from './dictionary';
import { Main } from './components/main';
import { defaultMenuItems } from './constants/menu-items';

export const getBreadCrumbs = path => path && typeof path === 'string' && path.split('/').reduce((acc, it, index) => {
  if (dictionary[it]) {
    if (acc.path === '/') acc.path += it;
    else acc.path += `/${it}`;
    acc.map.push(<Link key={index} to={acc.path} component={defaultMenuItems.find(item => dictionary[it] === item.name).component} />);
  }
  return acc;
}, { map: [<Link to="/" name={Main} />], path: '/' }) || '';


export const getBreadCrumbs1 = path => path && typeof path === 'string'
	&& path.split('/').reduce((acc, it) => dictionary[it] && `${acc} / ${dictionary[it]}` || acc, dictionary.main) || '';
