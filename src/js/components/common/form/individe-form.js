import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	Label, StyledField, Span, Sup, Input, Form as StyledForm,
} from './styled';
import {showNotification} from '../notification';

const required = value => (value ? undefined : 'Required');
const renderField = (labelName, fieldName, placeholder, req = true) => (
	<Label>
		<Span>
			{labelName}
			{req ? <Sup>*</Sup> : null}
		</Span>
		<StyledField
			name={fieldName}
			placeholder={placeholder}
			required
		/>
	</Label>
);

@connect(null, { showNotification })
export class IndivideForm extends Component {
	render(){
		const { showNotification } = this.props;
		return (
			<StyledForm action='mailf.php' method="POST">
				{renderField(
					'Имя',
					'firstName',
					'Иван',
					required
				)}
				{renderField(
					'Фамилия',
					'lastName',
					'Иванов',
					required
				)}
				{renderField(
					'Отчество',
					'surName',
					'Иванович',
					required
				)}
				{renderField(
					'ИНН',
					'inn',
					'1234567890',
					required
				)}
				{renderField(
					'Телефон',
					'telephone',
					'8-495-777-77-77',
					required
				)}
				{renderField(
					'E-MAIL',
					'email',
					'test@test.ru',
					required
				)}
				<button type="submit" >Отправить</button>
			</StyledForm>
		)
	}
}
