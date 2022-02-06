import React from 'react';
import {
  StyledFooter, Wrapper, StyledLink, WrapperLink, Span, CopyRightLink, CopyRight,
} from './styled';
import { ADDRESS } from '../../constants/common';


export const Footer = () => (
  <StyledFooter>
    <Wrapper>
      <p style={{ marginBottom: '15px' }}>
        <Span>{ADDRESS}</Span>
        <WrapperLink>
          <StyledLink to="/driveway">Схема проезда</StyledLink>
          <span style={{color: '#fff'}}>/</span>
          <StyledLink>Политика конфидициальности</StyledLink>
        </WrapperLink>
      </p>
      <CopyRight>Разработано в студии<CopyRightLink>BBArver</CopyRightLink>. © Все права защищены.</CopyRight>
    </Wrapper>
  </StyledFooter>
);
