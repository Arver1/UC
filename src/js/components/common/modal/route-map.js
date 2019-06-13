import React from 'react';
import { EntityForm, IndivideForm } from '../form';


export default {
  bid_form_f: {
    component: <IndivideForm />,
    title: 'Форма для подачи заявки физического лица и ИП'
  },
  bid_form_u: {
	  component: <EntityForm />,
    title: 'Форма для подачи заявки юридического лица'
  }
};
