import React, {Component} from 'react';

export class Burger_LABEL extends Component {
    state = {
        checked: false
    };

    handleClick = () => {
      this.setState(()=>({checked: !this.state.checked}));
    };

    render() {
        const {checked} = this.state;
        return (
          <>
            <input type="checkbox" id="burger_menu" checked={checked} readOnly/>
            <label htmlFor="burger_menu" onClick={this.handleClick}>Открыть меню</label>
          </>
        )
    }
}
