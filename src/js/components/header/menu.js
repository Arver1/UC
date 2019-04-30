import React from 'react';

const defaultMenuItems = Array(5).fill("Тестовый пункт меню");


export const Menu = ({items = defaultMenuItems}) => {
  return (
    <ul>
      {Array.isArray(items) && items.map((it)=> <li><a>{it}</a></li>)}
    </ul>
  );
};
