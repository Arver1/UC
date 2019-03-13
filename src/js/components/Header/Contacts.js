import React from 'react';

function Contacts(){
  return (
    <section className="header-page__contacts">
      <div className="header-page__wrapper">
        <div className="header-page__telephone">
          <a href="tel:+78005007555">8 (800) 500-75-55</a>
          <span>Бесплатный звонок по России</span>
        </div>
        <ul className="header-page__socials-items">
          <li className="header-page__socials-item header-page__socials-item--icon_star">
            <a href="#star">Звездный блог</a>
          </li>
          <li className="header-page__socials-item header-page__socials-item--icon_youtubeF">
            <a href="#youtubeF">Смотрите на на YouTube</a>
          </li>
          <li className="header-page__socials-item header-page__socials-item--icon_youtube">
            <a href="#youtube">Смотрите наш прямой эфир</a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Contacts
