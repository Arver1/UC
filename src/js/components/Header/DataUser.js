import React from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';

function DataUser(props){
  const {goodsId} = props;
  function getCartInfo(list){
    const count = Object.values(list).reduce((acc, good) => acc + good, 0);
    const digit = count.toString().length - 1;
    const arrTemp = [11,12,13, 14];
    const num = digit === 0 || ~arrTemp.indexOf(count) ? count : count % Math.pow(10, digit);
    switch(num){
      case 1: return `${count} товар`;
      case 2:
      case 3:
      case 4: return `${count} товара`;
      default: return `${count} товаров`
    }
  }
  return (
    <section className="data-user">
      <h2 className="visually-hidden">Данные пользователя</h2>
      <span className="data-user__user-info">Анастасия</span>
      <span className="data-user__cart-info">В корзине<br/> <b>{getCartInfo(goodsId)}</b></span>
    </section>
  )
}

DataUser.propTypes = {
  goodsId: PropTypes.object
};

export default connect(state => {
  return {
    goodsId: state
  }
})(DataUser)
