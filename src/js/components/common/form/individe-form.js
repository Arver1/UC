import React, { Component } from 'react';
import { Field, reduxForm, getFormValues} from 'redux-form';
import { connect } from 'react-redux';
import { Form, Span, Label, Sup } from './styled';
import { showNotification } from '../notification';
import {get} from "../../../constants";


@connect(state=> ({
	formValues: getFormValues('bid_form_f')(state),
	notifications: state.notifications
}), { showNotification })
@reduxForm({
	form: 'bid_form_f'
})
export class IndivideForm extends Component {
	
	normalizeName = (fieldName) => (value = '') => {
		const {showNotification, notifications: { msg }} = this.props;
		const formatValue = value.replace(/[^а-яА-Я]+/g, '');
		if ((/[^а-яА-Я]+/g).test(value)) showNotification(`В поле ${fieldName} допустимы только символы кириллицы`);
		return formatValue && formatValue[0].toUpperCase() + formatValue.slice(1, 19);
	};
	
	render(){
		const { formValues } = this.props;
		
		const lastNameActive = get(formValues, 'firstName', '').length < 2;
		const telephoneActive = get(formValues, 'lastName', '').length < 1 || lastNameActive;
		
		const normalizeFirstName = this.normalizeName('ИМЯ');
		const normalizeLastName = this.normalizeName('ФАМИЛИЯ');
		
		return(
			<Form>
				<Label>
					<Span>Имя<Sup>*</Sup></Span>
					<Field size="10" name="firstName" component="input" type="text"
					       normalize={normalizeFirstName} />
				</Label>
				<Label>
					<Span>Фамилия<Sup>*</Sup></Span>
					<Field size="10" name="lastName" component="input" type="text"
					       normalize={normalizeLastName} disabled={lastNameActive}/>
				</Label>
				<Label>
					<Span>Отчество</Span>
					<Field size="10" name="SurName" component="input" type="text"
					       normalize={normalizeLastName} disabled={lastNameActive}/>
				</Label>
				<Label>
					<Span>Телефон<Sup>*</Sup></Span>
					<Field size="10" name="telephone" component="input" type="text" disabled={telephoneActive}/>
				</Label>
			</Form>
		)
	}
}
