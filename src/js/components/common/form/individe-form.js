import React, { Component } from 'react';
import { Field, reduxForm, getFormValues} from 'redux-form';
import { connect } from 'react-redux';
import { Form, Span, Label } from './styled';
import { showNotification } from '../notification';
import {get} from "../../../constants";


const normalizeName = (value = '') => {
	const formatValue = value.replace(/[^а-яА-Я]+/g, '');
	if(!formatValue)
	return formatValue && formatValue[0].toUpperCase() + formatValue.slice(1,19);
};

const handleChange = (e, value) => {
	console.log('va', value);
};

@connect(state=> ({
	formValues: getFormValues('bid_form_f')(state),
	notifications: state.notifications
}), { showNotification })
@reduxForm({
	form: 'bid_form_f'
})
export class IndivideForm extends Component {
	
	normalizeName = (value = '') => {
		const {showNotification, notifications: { msg }} = this.props;
		const formatValue = value.replace(/[^а-яА-Я]+/g, '');
		if ((/[^а-яА-Я]+/g).test(value)) showNotification('В поле ИМЯ допустимы только символы кириллицы');
		return formatValue && formatValue[0].toUpperCase() + formatValue.slice(1, 19);
	};
	
	render(){
		const { formValues } = this.props;
		
		const lastNameActive = get(formValues, 'firstName', '').length < 2;
		const telephoneActive = get(formValues, 'lastName', '').length < 1;
		
		return(
			<Form>
				<Label>
					<Span>Имя</Span>
					<Field size="10" name="firstName" component="input" type="text"
					       normalize={this.normalizeName} onChange={this.handleChange}/>
				</Label>
				<Label>
					<Span>Фамилия</Span>
					<Field size="10" name="lastName" component="input" type="text" disabled={lastNameActive}/>
				</Label>
				<Label>
					<Span>Телефон</Span>
					<Field size="10" name="telephone" component="input" type="text" disabled={telephoneActive}/>
				</Label>
			</Form>
		)
	}
}
