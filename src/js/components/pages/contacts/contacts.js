import React, { PureComponent } from 'react';
import { Title } from '../../common/text/title';
import { Quote, Wrapper, Paragraph } from '../documents/styled';
import { dataNote } from '../../../constants/qualifications';

export const getQualityList = () => (
  <Wrapper>
    <Paragraph>
      <b>Полное наименование</b>
      : Автономная некоммерческая организация «Межрегиональный центр оценки квалификаций электроэнергетики»
    </Paragraph>
    <Paragraph>
      <b>Сокращенное наименование</b>
      : АНО «МРЦОК»
    </Paragraph>
    <Paragraph>
      <b>Адрес офиса</b>
      : 143040, Российская Федерация, Московская область, Одинцовский район, г. Голицыно, бульвар Генерала Ремезова, д.6., пом. 1., офис 4
    </Paragraph>
    <Paragraph>
      <b>Почтовый адрес</b>
      : 143040, Российская Федерация, Московская область, Одинцовский район, г. Голицыно, бульвар Генерала Ремезова, д.6., пом. 1. ( в поле «Кому» указывать: АНО «МРЦОК»).
    </Paragraph>
    <Paragraph>
      <b>Телефон:</b>
      {' '}
      8-499-583-06-80, 8-915-350-35-93
    </Paragraph>
    <Paragraph>
      <b>Адрес электронной почты:</b>
      {' '}
      ano.mrcok@mail.ru
    </Paragraph>
    <Paragraph>
      Проезд на общественном транспорте
      <br />
      Со ж/д ст. Белорусский вокзал (Белорусского направления) до ж/д ст. Голицыно (Белорусского направления) (время в пути – от 41 минуты до 1 часа 4 минут в зависимости от комфортности электропоезда) далее пешком 4 минуты до бульвара Генерала Ремезова, д. 4
    </Paragraph>
  </Wrapper>
);

export const Note = ({ children }) => <Quote>{children}</Quote>;

export class Contacts extends PureComponent {
  render() {
    return (
      <>
        {Title('Контакты')}
        <Note>
          {dataNote}
        </Note>
        <Wrapper>
          {getQualityList()}
        </Wrapper>
      </>
    );
  }
}
