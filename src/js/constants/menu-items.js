import { Qualifications, ProfStandarts } from '../components/pages';

export const defaultMenuItems = [
  {
    order: 1,
    name: 'Квалификации',
    url: '/qualifications',
    component: Qualifications
  },
  {
    order: 2,
    name: 'Профстандарты',
    url: '/prof-standarts',
    component: ProfStandarts
  },
  {
    order: 3,
    name: 'Документы',
    url: '/documents'
  },
  {
    order: 4,
    name: 'Эксперты',
    url: '/experts'
  },
  {
    order: 5,
    name: 'О МЦОК',
    url: '/about'
  },
];
