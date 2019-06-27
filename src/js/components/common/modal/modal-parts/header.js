import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Wrapper, H2, Button } from './styled';
import {closeModal} from '../action';
import {Spinner} from '../../../spinner';


@connect(null, {closeModal})
export class Header extends Component {
	
	state = {
		loading: true
	};
	
	componentDidMount(){
		const {wait = 500} = this.props;
		this.timerId = setTimeout(() => {
			this.setState({
				loading: false
			})
		}, wait)
	}
	
	
	render(){
		const { loading } = this.state;
		const { title = 'Форма для подачи заявки физического лица и ИП', closeModal } = this.props;
		
		return (
      <Wrapper>
				{loading ? (<div style={{margin: "0 auto"}}><Spinner /></div>): (
					<>
            <H2>
              {title}
            </H2>
            <Button onClick={() => {
              closeModal();
              // this.props.onClick();
            }}/>
					</>
				)}
      </Wrapper>
		)
	}
}
