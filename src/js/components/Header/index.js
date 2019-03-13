import React from 'react';
import Contacts from './Contacts';
import Logo from './Logo';
import Search from './Search';
import DataUser from './DataUser';

function Header(){
  return (
    <header className="header-page">
      <h1 className="visually-hidden">Интернет магазин shop24</h1>
      <Contacts />
      <div className="header-page__wrapper">
        <Logo />
        <Search />
        <DataUser />
      </div>
    </header>
  )
}

export default Header
