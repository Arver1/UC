import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import goods from '../../goods';
import { incGood, decGood, deleteGood } from "../../AC";

class CartItem extends PureComponent {
  static propTypes = {
    goodId: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
  };

  increment = () => {
    const {incGood, goodId} = this.props;
    incGood(goodId);
  };

  decrement = () => {
    const {decGood, goodId} = this.props;
    decGood(goodId);
  };

  delGood = () => {
    const {deleteGood, goodId} = this.props;
    deleteGood(goodId);
  };

  getDescription = good => {
    return ['description', 'code', 'size', 'color'].map((it, index) => {
      let temp = null;
      switch(it) {
        case 'code':
          temp = 'Код: ';
          break;
        case 'size':
          temp = 'Размер: ';
          break;
        case 'color':
          temp = 'Цвет: ';
          break;
      }
      return (
        <li key={ index }
            className={`cart__description-item cart__description-item--${ it }`}>
          { temp }{ good[it] }
          </li>)
    })
  };

  getPrice = good => {
    if(!good.price) return null;
    const { amount } = this.props;
    const total = (good.price * amount).toString();
    const digit =  total.length - 1;
    if(digit < 3) return total;
    return total.split('').reverse().reduceRight((acc, it, index) => {
      if(!(index % 3)) return acc + it + ' ';
      return acc + it;
    }, '');
  };

  render() {
    const { goodId, amount } = this.props;
    const good = goods.find(it => it.id === goodId);

    return (
    <li className="cart__item">
      <img className="cart__good-img" src={ good.url } />
      <ul className="cart__description-items">{ good ? this.getDescription(good) : null }</ul>
      <div className="cart__wrapper">
        <section className="cart__amount">
          <button className="cart__btn" onClick={ this.decrement }>-</button>
          <span>{ amount }</span>
          <button className="cart__btn" onClick={ this.increment }>+</button>
        </section>
        <span className="cart__price">{ this.getPrice(good) } руб.</span>
        <button className="cart__btn cart__btn--del" onClick={ this.delGood }>Удалить</button>
      </div>
    </li>
  )}
  componentWillUnmount(){
    //can add a popup
  }
}


export default connect(null, {
  incGood,
  decGood,
  deleteGood
})(CartItem)
