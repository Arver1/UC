import { withRouter } from 'react-router-dom';
import { Qualifications, ProfStandarts, Documents, About, Experts, Contacts } from '../components/pages';


export const defaultMenuItems = [
  {
    order: 1,
    name: 'Квалификации',
    url: '/qualifications',
    component: withRouter(Qualifications),
  },
  {
    order: 2,
    name: 'Профстандарты',
    url: '/prof-standarts',
    component: ProfStandarts,
  },
  {
    order: 3,
    name: 'Документы',
    url: '/documents',
    component: Documents,
  },
  {
    order: 4,
    name: 'Эксперты',
    url: '/experts',
    component: Experts,
  },
  {
    order: 5,
    name: 'О МРЦОК',
    url: '/about',
    component: About,
  },
  {
    order: 6,
    name: 'Контакты',
    url: '/contacts',
    component: Contacts,
  },
];
