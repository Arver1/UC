import React, { PureComponent } from 'react';
import { Title } from '../../common';
import { dataNote } from '../../../constants/qualifications';
import { Quote } from './styled';
import { Link, Paragraph, Wrapper } from '../documents/styled';


export const getQualityList = () => (
    <Wrapper>
        <Paragraph>
            1. Работник по обслуживанию и ремонту оборудования связи электрических сетей Приказ Минтруда России 1176н от 2015-12-29 &emsp;
            <Link href="src/docs/documents/20028.pdf">ссылка</Link>
        </Paragraph>
        <Paragraph>
            2. Работник по метрологическому обеспечению деятельности по передаче и распределению электроэнергии России 1160н от 2015-12-28 &emsp;
            <Link href="src/docs/documents/20029.pdf">ссылка</Link>
        </Paragraph>
        <Paragraph>
            3. Работник по техническому обслуживанию и ремонту кабельных линий электропередачи Приказ Минтруда 1165н от 2015-12-28 &emsp;
            <Link href="src/docs/documents/20030.pdf">ссылка</Link>
        </Paragraph>
        <Paragraph>
            4. Работник по техническому обслуживанию и ремонту воздушных линий электропередачи Приказ Минтруда 361н от 04.06.2018 &emsp;
            <Link href="src/docs/documents/20031.pdf">ссылка</Link>
        </Paragraph>
        <Paragraph>
            5. Работник по обслуживанию оборудования подстанций электрических сетей Приказ Минтруда 1177н от 2015-12-29 &emsp;
            <Link href="src/docs/documents/20032.pdf">ссылка</Link>
        </Paragraph>
        <Paragraph>
            6. Работник по обслуживанию и ремонту оборудования релейной защиты и автоматики электрических сетей Приказ Минтруда 524н от 2017.06.29 &emsp;
            <Link href="src/docs/documents/20034.pdf">ссылка</Link>
        </Paragraph>
        <Paragraph>
            7. Работник по обслуживанию и ремонту оборудования автоматизированных систем управления технологическими процессами в электрических сетях Приказ Минтруда 764н от 2016-12-19 &emsp;
            <Link href="src/docs/documents/20036.pdf">ссылка</Link>
        </Paragraph>
    </Wrapper>
);
export const Note = ({ children }) => <Quote>{children}</Quote>;

export class ProfStandarts extends PureComponent {
  render() {
    return (
      <>
        {Title('Профессиональные стандарты')}
        <Note>
          {dataNote}
        </Note>
        {getQualityList()}
      </>
    );
  }
}
