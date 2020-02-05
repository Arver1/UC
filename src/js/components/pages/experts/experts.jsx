import React, { PureComponent } from 'react';
import { Title } from '../../common';
import { dataNote } from '../../../constants/qualifications';
import {
  Link,
  Paragraph,
  Wrapper,
  Quote,
} from '../documents/styled';

export const getQualityList = () => (
  <Wrapper>
    <Paragraph>
      Сведения об экспертах &emsp;
      <Link href="src/docs/documents/experts.pdf">ссылка</Link>
    </Paragraph>
  </Wrapper>
);
export const Note = ({ children }) => <Quote>{children}</Quote>;

export class Experts extends PureComponent {
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
