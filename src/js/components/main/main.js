import React, { Component } from 'react';
import styled from 'styled-components';
import { RouteList } from './route-list';
import { BidList } from './bid-list';
import { Certs } from './certs';
import {
  StyledMain, Wrapper, Title, StyledDiv, About,
} from './styled';
import { News } from '../common/news';
import { Reserve } from '../pages/reserve';
import { Title as AboutTitle } from './certs/styled';


const AboutText = 'Автономная некоммерческая организация «Межрегиональный центр оценки квалификаций электроэнергетики» (МРЦОК) создана в рамках исполнения Федерального закона от 03.07.2016 № 238-ФЗ «О независимой оценке квалификаций», а также формирование и развития Национальной системы квалификаций. {newLine}Основная цель создания МРЦОК, является получение реальной оценки качества подготовки, уровня компетентности, профессиональной пригодности работников компаний, повышение конкурентоспособности на рынке труда лиц, прошедших независимую оценку квалификации, участие в разработке организационно-методического обеспечения процедур оценки квалификации, содействие во внедрении системы национальной оценки профессиональной квалификации кадров в энергосетевом комплексе и увеличение доли сертифицированных специалистов.';

const dataRoute = [
  {
    count: 10,
    name: ' профессиональных стандартов',
  },
  {
    count: 30,
    name: 'присваемых квалификаций',
  },
];


export class Main extends Component {
  state = {
    hasError: false,
  }

  static getDerivedStateFromError(e) {
    return {
      hasError: true,
    };
  }

  render() {
    const { hasError } = this.state;
    return hasError ? <Reserve /> : (
      <StyledMain>
        <Wrapper>
          <Title>
            <span>Профессиональная деятельность</span>
            <strong>должна начинаться с подтверждения оценки квалификации</strong>
          </Title>
          <RouteList data={dataRoute} />
          <BidList />
          <StyledDiv>
            <About>
              <AboutTitle style={{ paddingTop: '10px' }}>О нас</AboutTitle>
              {AboutText.split('{newLine}').map(it => <p style={{ paddingBottom: '5px' }}>{it}</p>)}
            </About>
            <Certs />
          </StyledDiv>
          <News />
        </Wrapper>
      </StyledMain>
    );
  }
}
