import React from 'react';
import { Form, Field } from 'react-final-form';
import {
  Label, StyledField, Span, Sup, Form as StyledForm,
} from './styled';

const required = value => (value ? undefined : 'Required');
const renderField = (labelName, fieldName, component, placeholder, validate = required, req = true) => (
  <Label>
    <Span>
      {labelName}
      {req ? <Sup>*</Sup> : null}
    </Span>
    <StyledField
      name={fieldName}
      component={component}
      placeholder={placeholder}
      validate={validate}
    />
  </Label>
);


export const EntityForm = () => (
  <div>
    <Form
      onSubmit={() => console.log('hello')}
      validate={(values) => {

      }}
    >
      {({ handleSubmit, submitting, values }) => (
        <StyledForm onSubmit={handleSubmit}>
          {renderField(
            'Полное наименование организации',
            'organizationName',
            'input',
            'Наименование организации',
            required,
          )}
          {renderField(
            'Руководитель организации',
            'directorName',
            'input',
            'Иванов И.И.',
            required,
          )}
          {renderField(
            'Юридический адрес',
            'legalAdress',
            'input',
            'г.Москва ул.Московская д.99 офис №1',
            required,
          )}
          {renderField(
            'Фактический адрес',
            'realAdress',
            'input',
            'г.Москва ул.Московская д.99 офис №1',
            required,
          )}
          {renderField(
            'ИНН',
            'inn',
            'input',
            '1234567890',
            required,
          )}
          {renderField(
            'ОГРН',
            'ogrn',
            'input',
            '1234567890123',
            required,
          )}
          {renderField(
            'Расчетный счет',
            'accountNumber',
            'input',
            '12345678901234567890',
            required,
          )}
          {renderField(
            'Банк',
            'bankName',
            'input',
            'АО Банк',
            required,
          )}
          {renderField(
            'БИК',
            'bic',
            'input',
            '123456789',
            required,
          )}
          {renderField(
            'Телефон',
            'telephone',
            'input',
            '8-495-777-77-77',
            required,
          )}
          {renderField(
            'E-MAIL',
            'email',
            'input',
            'test@test.ru',
            required,
          )}
          {renderField(
            'Количество сотрудников',
            'amountWorker',
            'input',
            '10',
            required,
          )}
          <pre>
            {JSON.stringify(values, undefined, 2)}
          </pre>
          <button type="submit" disabled={submitting}>Отправить</button>
        </StyledForm>
      )}
    </Form>
  </div>
);
