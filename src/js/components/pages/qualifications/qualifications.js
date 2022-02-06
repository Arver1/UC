import React, { PureComponent } from 'react';
import { Title } from '../../common';
import { dataNote } from '../../../constants/qualifications';
import { Quote } from './styled';
import { Link, Paragraph, Wrapper } from '../documents/styled';
import qualityList from './qualifications_list';

export const getQualityList = () => (
  <Wrapper>
    <Paragraph style={{marginBottom: "20px"}}>
      Перечень профессиональных квалификаций, на соответствие которым Автономная некоммерческая организация «Межрегиональный центр оценки квалификаций электроэнергетики» проводит независимую оценку квалификаций  &emsp;
      <Link href="src/docs/documents/quality.pdf">ссылка</Link>
    </Paragraph>
    { qualityList.map( (item,index) => (
      <Paragraph>
        {++index}) <b>{item.reg_number}</b> {item.description} <br />
        - пример оценочного средства &emsp;
        <Link href={item.link}>ссылка</Link>
      </Paragraph>
    ))}
  </Wrapper>
);
export const Note = ({ children }) => <Quote>{children}</Quote>;

export class Qualifications extends PureComponent {
  render() {
    return (
      <>
        {Title('Квалификации')}
        <Note>
          {dataNote}
        </Note>
        {getQualityList()}
      </>
    );
  }
}
