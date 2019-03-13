import React from 'react';

function Promo(){
  return (
    <article className="promo">
      <h2 className="promo__title"><span>Добавьте к вашему заказу</span></h2>
      <ul className="promo__items">
        <li className="promo__item">
          <a href="#item_promo1">
            <img src="src/img/promo_1@1x.jpg"/>
            <p className="promo__description">
              Солнечные очки зеленого цвета в
              стиле ретро
            </p>
          </a>
          <span className="promo__price">2450 руб.</span>
        </li>
        <li className="promo__item">
          <a href="#item_promo2">
            <img src="src/img/promo_2@1x.jpg"/>
            <p className="promo__description">
              Шляпа
            </p>
          </a>
          <span className="promo__price">800 руб.</span>
        </li>
        <li className="promo__item">
          <a href="#item_promo3">
            <img src="src/img/promo_3@1x.jpg"/>
            <p className="promo__description">
              Платье-миди с расклешенной
              юбкой
            </p>
          </a>
          <span className="promo__price">2450 руб.</span>
          </li>
        <li className="promo__item">
          <a href="#item_promo4">
            <img src="src/img/promo_4@1x.jpg"/>
            <p className="promo__description">
              Платье-миди с расклешенной
              юбкой
            </p>
          </a>
          <span className="promo__price">2450 руб.</span>
        </li>
      </ul>
    </article>
  )
}

export default Promo
