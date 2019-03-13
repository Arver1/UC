import React from 'react';
import Cart from './Cart';
import Promo from './Promo';
import Menu from './Menu';

function Main(){
  return (
    <main className="main-page">
      <Menu />
      <Cart />
      <Promo />
    </main>
  )
}

export default Main
