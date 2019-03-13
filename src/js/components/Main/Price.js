import React, { PureComponent } from 'react'
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import goods from '../../goods';
const coupon = {
  '123456': 1800
};

class Price extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      value: ''
    }
    this.codes = ['123456'];
    this.promo = 0;
  }
  static defaultProps = {
    goodsId: {}
  };

  static propTypes = {
    goodsId: PropTypes.object
  };


  getPrice = value => {
    const total = value.toString();
    const digit =  total.length - 1;
    if(digit < 3) return total;
    return total.split('').reverse().reduceRight((acc, it, index) => {
      if(!(index % 3)) return acc + it + ' ';
      return acc + it;
    }, '');
  };

  changeValue = e => {
    this.setState({
      value: e.target.value
    })
  };

  checkValue = e => {
    e.preventDefault();
    if(~this.codes.indexOf(this.state.value)){
      this.promo = coupon[this.state.value];
    } else {
      this.promo = 0;
    }
    this.setState({
      value: ''
    });
  };

  checkValueEnter = e => {
    if(e.keyCode === 13){
      this.checkValue(e)
    }
  };

  getPromo = promo => {
    if(!promo) return;
    return (
      <li className="cart__total-item cart__total-item--color"><span>Промокод</span>
        <span>-{this.getPrice(promo)} руб.</span>
      </li>
    )
  };

  render(){
    const { goodsId } = this.props;
    const total = Object.entries(goodsId).reduce((acc, id) => {
      const good = goods.find(it => it.id === id[0]);
      return acc + good.price * id[1];
    }, 0);
    const totalWithPromo = total - this.promo < 0 ? 0 : total - this.promo;
    return (
        <div className="cart__promo">
          <div>
            <p className="cart__promo-question">Есть промокод?</p>
            <input type="text" className="cart__promo-field"
                   value={ this.state.value }
                   onChange={ this.changeValue }
                   onKeyDown={ this.checkValueEnter }
                   placeholder="Введите промокод"
            />
            <button className="btn btn--promo" onClick={this.checkValue}>Применить</button>
          </div>
          <div className="cart__total-wrapper">
            <ul className="cart__total-items">
              <li className="cart__total-item"><span>Сумма заказа:</span>
                <span>{this.getPrice(total)} руб.</span>
              </li>
              {this.getPromo(this.promo)}
              <li className="cart__total-item cart__total-item--last"><span>Всего:</span>
                <span>{this.getPrice(totalWithPromo)} руб.</span>
              </li>
            </ul>
            <a className="btn btn--order">Оформить заказ</a>
          </div>
        </div>
      )
  }
}

export default connect(state => {
  return {
    goodsId: state
  }
})(Price)
