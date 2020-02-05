import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Field } from 'react-final-form';
import {
  Label, StyledField, Span, Sup, Input, Form as StyledForm,
} from './styled';
import {showNotification} from '../notification';

const required = value => (value ? undefined : 'Required');
const renderField = (labelName, fieldName, component, placeholder, validate = required, showNotification, req = true) => (
  <Label>
    <Span>
      {labelName}
      {req ? <Sup>*</Sup> : null}
    </Span>
    <StyledField
      name={fieldName}
      validate={validate}
      placeholder={placeholder}
      render={props => {
        console.log('props.meta.touched', props.meta.touched);
        const error = props.meta.error && props.meta.touched;
        console.log('error', error);
        if(error){
          showNotification(`Поле <${labelName}> обязательно для заполнения`);
        }
        return <Input props={props} error={error} />
      }}
    />
  </Label>
);

@connect(null, { showNotification })
export class EntityForm extends Component {
  render(){
    const { showNotification } = this.props;
    return (
      <div>
        <Form
          onSubmit={() => console.log('hello')}
          validate={(values) => {
        
          }}
        >
          {({handleSubmit, submitting, values}) => (
            <StyledForm onSubmit={handleSubmit}>
              {renderField(
                'Полное наименование организации',
                'organizationName',
                'input',
                'Наименование организации',
                required,
                showNotification
              )}
              {renderField(
                'Руководитель организации',
                'directorName',
                'input',
                'Иванов И.И.',
                required,
                showNotification
              )}
              {renderField(
                'Юридический адрес',
                'legalAdress',
                'input',
                'г.Москва ул.Московская д.99 офис №1',
                required,
                showNotification
              )}
              {renderField(
                'Фактический адрес',
                'realAdress',
                'input',
                'г.Москва ул.Московская д.99 офис №1',
                required,
                showNotification
              )}
              {renderField(
                'ИНН',
                'inn',
                'input',
                '1234567890',
                required,
                showNotification
              )}
              {renderField(
                'ОГРН',
                'ogrn',
                'input',
                '1234567890123',
                required,
                showNotification
              )}
              {renderField(
                'Расчетный счет',
                'accountNumber',
                'input',
                '12345678901234567890',
                required,
                showNotification
              )}
              {renderField(
                'Банк',
                'bankName',
                'input',
                'АО Банк',
                required,
                showNotification
              )}
              {renderField(
                'БИК',
                'bic',
                'input',
                '123456789',
                required,
                showNotification
              )}
              {renderField(
                'Телефон',
                'telephone',
                'input',
                '8-495-777-77-77',
                required,
                showNotification
              )}
              {renderField(
                'E-MAIL',
                'email',
                'input',
                'test@test.ru',
                required,
                showNotification
              )}
              {renderField(
                'Количество сотрудников',
                'amountWorker',
                'input',
                '10',
                required,
                showNotification
              )}
              <pre>
            {JSON.stringify(values, undefined, 2)}
          </pre>
              <button type="submit" disabled={submitting}>Отправить</button>
            </StyledForm>
          )}
        </Form>
      </div>
    )
  }
}
