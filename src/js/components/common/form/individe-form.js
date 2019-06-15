import React, { Component, createRef } from 'react';
import { reduxForm, getFormValues} from 'redux-form';
import { connect } from 'react-redux';
import { Form, Span, Label, Sup, StyledField } from './styled';
import { showNotification } from '../notification';
import {get} from "../../../constants";


const telephoneMask = ['+', '7', '(', '_', '_', '_', ')', '-', '_', '_', '_', '-', '_', '_', '-', '_', '_'];

@connect(state=> ({
	formValues: getFormValues('bid_form_f')(state),
	notifications: state.notifications
	
}), { showNotification })
@reduxForm({
	form: 'bid_form_f',
	initialValues: {
		telephone: '+7(___)___-__-__'
	}
})
export class IndivideForm extends Component {
	
	telephoneMask = telephoneMask;
	telephoneRef = createRef();
	
	normalizeName = (fieldName, validSymbols) => (value = '') => {
		const {showNotification, notifications: { msg }} = this.props;
		const formatValue = value.replace(/[^а-яА-Я]+/g, '');
		if ((/[^а-яА-Я]+/g).test(value)) showNotification(`В поле ${fieldName} допустимы только ${validSymbols}`);
		return formatValue && formatValue[0].toUpperCase() + formatValue.slice(1, 19);
	};
	
	normalizeTelephone = (value = '', previosValue, all, previousAllValues) => {
		const { showNotification } = this.props;
		
		return value.split('').reduce((acc, it, index) => {
			// console.log('acc', acc);
			// console.log('it', it);
			// console.log('index', index);
			
			
			if(index < 3) return acc;
			if(it === this.telephoneMask[index]) return acc+ this.telephoneMask[index];
			else if(isNaN(+it)) {
				showNotification(`В поле ТЕЛЕФОН допустимы только цифры`);
				return (acc + this.telephoneMask[index]).slice(0,17);
			} else {
				acc = (acc + this.telephoneMask[index]).slice(0, 17).replace('_', it);
				return acc;
			}

		}, '+7(');
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
					<StyledField size="14" name="firstName" component="input" type="text"
					       normalize={normalizeFirstName} />
				</Label>
				<Label>
					<Span>Фамилия<Sup>*</Sup></Span>
					<StyledField size="14" name="lastName" component="input" type="text"
					       normalize={normalizeLastName} disabled={lastNameActive}/>
				</Label>
				<Label>
					<Span>Отчество</Span>
					<StyledField size="14" name="SurName" component="input" type="text"
					       normalize={normalizeSurName} disabled={afterLastNameActive}/>
				</Label>
				<Label>
					<Span>Телефон<Sup>*</Sup></Span>
					<StyledField size="14" name="telephone" component="input" type="text" value={this.telephoneValue}
					        normalize={this.normalizeTelephone} ref={this.telephoneRef} onChange={(e)=> {
					        	console.log(e.target.value)
					   //      	e.preventDefault();
					   //      this.setState({
						//         up: !this.state.up
					   //      }, () => {
						//         e.target.selectionStart = this.cursorPosition;
						//         e.target.selectionEnd = this.cursorPosition;
					   //      });
						// console.log(e)
					}} disabled={false && afterLastNameActive}/>
				</Label>
			</Form>
		)
	}
}
