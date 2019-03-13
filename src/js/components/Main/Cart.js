import React, { PureComponent} from 'react';
import { connect } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PropTypes from 'prop-types';
import CartItem from './CartItem';
import Price from './Price';
import CartCaption from './CartCaption';

class Cart extends PureComponent {

  static defaultProps = {
    goodsId: {}
  };

  static propTypes = {
    goodsId: PropTypes.object
  };

  constructor(props){
    super(props);
    this.state = {
      active: false
    }
  }

  getBody = goodsId => {
    if(!Object.keys(goodsId).length) {
      return (
          <CSSTransition
            in={ this.state.active }
            timeout={ 2000 }
            classNames="cart__empty"
          >
            <li className="cart__msg-wrapper">
              <p className="cart__msg">К сожалению Ваша корзина пуста...:(</p>
            </li>
          </CSSTransition>
      );
    }
    return Object.entries(goodsId).map(id =>
          <CSSTransition key={ id[0] } timeout={ 700 }
            classNames="cart__hide">
            <CartItem goodId={ id[0] } amount={ id[1] }/>
          </CSSTransition>
    );
  };

  componentDidUpdate(){
    const { goodsId } = this.props;
    if(!Object.keys(goodsId).length) {
      if(!this.state.active) {
        this.setState({
          active: !this.state.active
        })
      }
    }
  }

  render(){
    const { goodsId } = this.props;

    return (
      <section className="cart">
        <h2 className="cart__title"><span>Ваша корзина</span></h2>
        <ul className="cart__items">
          <CSSTransition in={!this.state.active}  unmountOnExit timeout={ 500 }  classNames="cart__hide">
            <CartCaption />
          </CSSTransition>
          <TransitionGroup>
            { this.getBody(goodsId) }
          </TransitionGroup>
        </ul>
        <Price />
      </section>
    )
  }
}

export default connect(state => {
  return {
    goodsId: state
  }
})(Cart)
