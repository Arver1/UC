import React from 'react';

function CartCaption(){
  return (
    <li className="cart__item">
      <span className="cart__caption cart__caption--good">Товар</span>
      <span className="cart__caption cart__caption--description">Описание</span>
      <div className="cart__wrapper">
        <span className="cart__caption cart__caption--amount">Количество</span>
        <span className="cart__caption cart__caption--price">Цена</span>
        <span className="cart__caption cart__caption--price">Удалить</span>
      </div>
    </li>
  )
}

export default CartCaption;
