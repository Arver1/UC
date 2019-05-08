import React from 'react';
import {List, ListItem, Wrapper} from './styled';

export const BidList = () => (
  <List>
    <ListItem>
      <Wrapper>
        <h3>Физические лица и ИП</h3>
        <a className="btn" href="#req_indiv" title="Подать заявку как физическое лицо и ИП">Подать заявку</a>
      </Wrapper>
      <img src="src/img/worker@1x.png" srcSet="src/img/worker@2x.png 2x" width="103" height="120"
           alt="Изображение сотрудника" title="Изображение сотрудника" />
    </ListItem>
    <ListItem>
      <Wrapper>
        <h3>Юридические лица</h3>
        <a className="btn" href="#req_entity" title="Подать заявку как юридическое лицо">Подать заявку</a>
      </Wrapper>
      <img src="src/img/manager@1x.png" srcSet="src/img/manager@2x.png 2x" width="83" height="120"
           alt="Изображение начальника"
           title="Изображение начальника" />
    </ListItem>
  </List>
);