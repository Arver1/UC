import React, { PureComponent } from 'react';

class Search extends PureComponent {
  constructor(){
    super();

    this.state = {
      value: ''
    }
  }

  changeValue = e => {
    this.setState({
      value: e.target.value
    })
  };

  searchItem = e => {
    e.preventDefault();
    this.setState({
      value: ''
    })
  };

  render(){
    return (
      <form className="header-page__search" onSubmit={ this.searchItem }
            onClick={ this.searchItem }>
        <input type="text" className="header-page__search-field"
               value={ this.state.value }
               onChange={ this.changeValue }
               placeholder="Поиск по сайту"
        />
        <button className="btn btn--search">Найти</button>
      </form>
    )
  }
}

export default Search
