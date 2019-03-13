import React from 'react';

// stop to divided on classes
const menuGoods = ['Одежда и аксессуары', 'Обувь', 'Украшения', 'Красота и здоровье',
  'Товары для дома, дачи и отдыха', 'Товары для кухни'];

const menuOrders = ['Оплата и доставка', 'Возврат', 'Помощь',
  'Благотворительный Фонд Константина Хабенского',
  'Гарантия на дополнительное обслуживание товара',
  'Пользовательское соглашение'];

const menuShop = ['Смотреть прямой эфир', 'Расписание передач', 'Акции',
  'Личный кабинет', 'Поиск и карта сайта', 'Карта брендов', 'Обратная связь'];

const menuInfo = ['О канале', 'Сотрудничество', 'Покупайте с нами!', 'Контакты'];

function MenuList(){
  function getBody(list){
    if(!Array.isArray(list)) return null;
    return (
      <ul className="footer-page__items">
        {list.map((item, index) =>
          <li className="footer-page__item" key={ index }>
            <a href="#">{ item }</a>
          </li>)}
      </ul>
    )
  }
  return (
    <ul className="footer-page__list-items">
      <li className="footer-page__list-item"><span>Каталог товаров</span>{ getBody(menuGoods) }</li>
      <li className="footer-page__list-item"><span>Заказ</span>{ getBody(menuOrders) }</li>
      <li className="footer-page__list-item"><span>Shop24</span>{ getBody(menuShop) }</li>
      <li className="footer-page__list-item"><span>Информация</span>{ getBody(menuInfo) }</li>
    </ul>
  )
}

export default MenuList
