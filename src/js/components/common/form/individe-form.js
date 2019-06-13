import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Span, Label } from "./styled";


const normalizeName = (value = '') => {
	const formatValue = value.replace(/[^а-яА-Я]+/g, '');
	return formatValue && formatValue[0].toUpperCase() + formatValue.slice(1,19);
};

const handleChange = (e, value) => {
	console.log('va', value);
};

@reduxForm({
	form: 'bid_form_f'
})
export class IndivideForm extends Component {
	
	state = {
		disabledCount: 1
	};
	
	handleChange
	
	render(){
		const {disabledCount} = this.state;
		
		return(
			<Form>
				<Label>
					<Span>Имя</Span>
					<Field size="10" name="firstName" component="input" type="text"
					       normalize={normalizeName} disabled={!!(disabledCount - 1)} onChange={this.handleChange}/>
				</Label>
				<Label>
					<Span>Фамилия</Span>
					<Field size="10" name="lastName" component="input" type="text" disabled={!!(disabledCount - 2)}/>
				</Label>
				<Label>
					<Span>Телефон</Span>
					<Field size="10" name="telephone" component="input" type="text" disabled={!!(disabledCount - 3)}/>
				</Label>
			</Form>
		)
	}
}
