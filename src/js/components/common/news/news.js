import React, { Component } from 'react';
import moment from 'moment';
import {
  Section, H2, StyledLink, SVG, Description, Time,
  Wrapper, MoreLink, UL,
} from './styled';
import listNews from '../../../constants/news';


const sortedListNews = listNews.map((it) => {
  it.data = moment(it.data);
  return it;
})
  .sort((a, b) => b.data - a.data);
const lastNews = sortedListNews.slice(0, 3);


export class News extends Component {
  getNews = (news = lastNews) => (
    <UL>
      {news.map((it, index) => (
        <li key={index}>
          <Wrapper>
            <picture>
              <img src={it.imgSrc} width="50" alt="Новость" title="Новость" />
            </picture>
            <Time dateTime="ДД.ММ.ГГ">{it.data.format('DD.MM.YY')}</Time>
          </Wrapper>
          <Description>{it.description}</Description>
          <MoreLink title="Посмотреть подробнее">Подробнее</MoreLink>
        </li>
      ))}
    </UL>
  );


  render() {
    return (
      <Section>
        <H2>Новости</H2>
        <StyledLink title="Посмотреть ленту новостей">
          Все новости
          <SVG width="15" height="15">
            <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#chevron-right" />
          </SVG>
        </StyledLink>
        {this.getNews()}
      </Section>
    );
  }
}
