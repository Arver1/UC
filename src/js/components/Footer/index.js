import React from 'react';
import Socials from './Socials';
import Logo from './Logo';
import Contacts from './Contacts';
import MenuList from './MenuList';

function Footer(){
  return (
    <footer className="footer-page">
      <Socials />
      <div className="footer-page__wrapper">
        <Logo />
        <Contacts />
        <MenuList />
      </div>
      <section className="footer-page__copyright">
        Copyright © Товар ООО «Стиль и Мода», 2014-2016. Все права защищены.<br/>
        При использовании материалов сайта ссылка на www.shop24.com обязательна.<br/>
        115193, Москва, ул. Кожуховская 5-я, д. 9, помещение VII<br/>
        Телефон  8 800 500-75-55
      </section>
    </footer>
  )
}

export default Footer;
