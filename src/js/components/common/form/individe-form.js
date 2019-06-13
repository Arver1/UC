import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';


@reduxForm({
	form: 'bid_form_f'
})
export class IndivideForm extends Component {
	render(){
		return(
			<form style={{display: 'flex', flexDirection: 'column', padding: '10px'}}>
				<label style={{display: 'flex', marginBottom: '15px'}}>
					<span style={{width: '80px'}}>Имя</span>
					<Field size="10" name="firstName" component="input" type="text" />
				</label>
				<label style={{display: 'flex', marginBottom: '15px'}}>
						<span style={{width: '80px'}}>Фамилия</span>
					<Field size="10" name="lastName" component="input" type="text" />
				</label>
				<label style={{display: 'flex', marginBottom: '15px'}}>
					<span style={{width: '80px'}}>Телефон</span>
					<Field size="10" name="telephone" component="input" type="text" />
				</label>
			</form>
		)
	}
}
