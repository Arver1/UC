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
export class EntityForm extends Component {
  render(){
    const { showNotification } = this.props;
    return (
            <StyledForm action='mail.php' method="POST">
              {renderField(
                'Полное наименование организации',
                'organizationName',
                'Наименование организации',
                required
              )}
              {renderField(
                'Руководитель организации',
                'directorName',
                'Иванов И.И.',
                required
              )}
              {renderField(
                'Юридический адрес',
                'legalAdress',
                'г.Москва ул.Московская д.99 офис №1',
                required
              )}
              {renderField(
                'Фактический адрес',
                'realAdress',
                'г.Москва ул.Московская д.99 офис №1',
                required
              )}
              {renderField(
                'ИНН',
                'inn',
                '1234567890',
                required
              )}
              {renderField(
                'ОГРН',
                'ogrn',
                '1234567890123',
                required
              )}
              {renderField(
                'Расчетный счет',
                'accountNumber',
                '12345678901234567890',
                required
              )}
              {renderField(
                'Банк',
                'bankName',
                'АО Банк',
                required
              )}
              {renderField(
                'БИК',
                'bic',
                '123456789',
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
              {renderField(
                'Количество сотрудников',
                'amountWorker',
                '10',
                required
              )}
              <button type="submit" >Отправить</button>
            </StyledForm>
    )
  }
}
