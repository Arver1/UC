import React, { Component } from 'react';
import styled from 'styled-components';
import { RouteList } from './route-list';
import { BidList } from './bid-list';
import { Certs } from './certs';
import {
  StyledMain, Wrapper, Title, StyledDiv, About, WrapperTitle,
  ImgWrapper, Img, Text
} from './styled';
import { News } from '../common/news';
import { Reserve } from '../pages/reserve';
import { Title as AboutTitle } from './certs/styled';
import qualityList from '../pages/qualifications/qualifications_list';


const AboutText = 'Автономная некоммерческая организация «Межрегиональный центр оценки квалификаций электроэнергетики» (МРЦОК) создана в рамках исполнения Федерального закона от 03.07.2016 № 238-ФЗ «О независимой оценке квалификаций», а также формирование и развития Национальной системы квалификаций. {newLine}Основная цель создания МРЦОК, является получение реальной оценки качества подготовки, уровня компетентности, профессиональной пригодности работников компаний, повышение конкурентоспособности на рынке труда лиц, прошедших независимую оценку квалификации, участие в разработке организационно-методического обеспечения процедур оценки квалификации, содействие во внедрении системы национальной оценки профессиональной квалификации кадров в энергосетевом комплексе и увеличение доли сертифицированных специалистов.';

const dataRoute = [
  {
    count: 10,
    name: ' профессиональных стандартов',
    href: '/prof-standarts'
  },
  {
    count: qualityList.length,
    name: 'присваемых квалификаций',
    href: '/qualifications'
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
          <WrapperTitle>
            <Title>
              <span>Профессиональная деятельность</span>
              <strong>должна начинаться с подтверждения оценки квалификации</strong>
            </Title>
            <RouteList data={dataRoute}/>
          </WrapperTitle>
          <BidList />
          <StyledDiv>
            <About>
              <AboutTitle style={{ paddingTop: '10px' }}>О нас</AboutTitle>
              {AboutText.split('{newLine}').map(it => <p style={{ padding: '0 0 5px', textAlign: 'justify' }}>{it}</p>)}
              <ImgWrapper>
              <a href="https://nok-nark.ru/" style={{ margin: '0 18px 18px 0' }}>
                <Img>
                   <img src="/src/img/nok@1x.png" srcSet="/src/img/nok@2x.png 2x" width="70" height="54"
                     alt="Реестр сведений НОК" title="Реестр сведений НОК"/>
                    <Text>Реестр сведений о проведении независимой оценки квалификации</Text>
                </Img>
              </a>
              <a href="http://www.orael.ru/professional_skills/nezavisimaya-otsenka-kvalifikatsii/apellyatsionnaya-komissiya-espk/" style={{ margin: '0 18px 18px 0' }}>
                <Img>
                   <img src="/src/img/orael@1x.png" srcSet="/src/img/orael@2x.png 2x" width="70" height="71"
                      alt="Ассоциация ЭРА России" title="Ассоциация ЭРА России"/>
                    <Text>Апелляционная комиссия Совета по профессиональным квалификациям в электроэнергетике</Text>
                </Img>
              </a>
              <a href="http://www.espkrf.ru">
                <Img>
                   <img src="/src/img/espkrf.logo.svg" width="70" height="71"
                      alt="ЭСПК России" title="Совет ЭСПК России"/>
                    <Text>Совет по профессиональным квалификациям в электроэнергетике Российской Федерации</Text>
                </Img>
              </a>
            </ImgWrapper>
            </About>
            <Certs />
          </StyledDiv>
          <News />
        </Wrapper>
      </StyledMain>
    );
  }
}
