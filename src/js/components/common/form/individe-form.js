import React, { Component } from 'react';
import { reduxForm, getFormValues} from 'redux-form';
import { connect } from 'react-redux';
import { Form, Span, Label, Sup, StyledField } from './styled';
import { showNotification } from '../notification';
import {get} from "../../../constants";


@connect(state=> ({
	formValues: getFormValues('bid_form_f')(state),
	notifications: state.notifications
}), { showNotification })
@reduxForm({
	form: 'bid_form_f',
	initialValues: {
		telephone: '+7'
	}
})
export class IndivideForm extends Component {
	
	normalizeName = (fieldName, validSymbols) => (value = '') => {
		const {showNotification, notifications: { msg }} = this.props;
		const formatValue = value.replace(/[^а-яА-Я]+/g, '');
		if ((/[^а-яА-Я]+/g).test(value)) showNotification(`В поле ${fieldName} допустимы только ${validSymbols}`);
		return formatValue && formatValue[0].toUpperCase() + formatValue.slice(1, 19);
	};
	
	normalizeTelephone = (value = '') => {
		return value;
	};
	
	render(){
		const { formValues } = this.props;
		
		const lastNameActive = get(formValues, 'firstName', '').length < 2;
		const afterLastNameActive = get(formValues, 'lastName', '').length < 1 || lastNameActive;
		
		const normalizeFirstName = this.normalizeName('ИМЯ', 'символы кириллицы');
		const normalizeLastName = this.normalizeName('ФАМИЛИЯ', 'символы кириллицы');
		const normalizeSurName = this.normalizeName('ОТЧЕСТВО', 'символы кириллицы');
		
		return(
			<Form>
				<Label>
					<Span>Имя<Sup>*</Sup></Span>
					<StyledField size="10" name="firstName" component="input" type="text"
					       normalize={normalizeFirstName} />
				</Label>
				<Label>
					<Span>Фамилия<Sup>*</Sup></Span>
					<StyledField size="10" name="lastName" component="input" type="text"
					       normalize={normalizeLastName} disabled={lastNameActive}/>
				</Label>
				<Label>
					<Span>Отчество</Span>
					<StyledField size="10" name="SurName" component="input" type="text"
					       normalize={normalizeSurName} disabled={afterLastNameActive}/>
				</Label>
				<Label>
					<Span>Телефон<Sup>*</Sup></Span>
					<StyledField size="10" name="telephone" component="input" type="text"
					        normalize={this.normalizeTelephone} disabled={afterLastNameActive}/>
				</Label>
			</Form>
		)
	}
}
