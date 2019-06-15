import React from 'react';
import { EntityForm, IndivideForm1 } from '../form';


export default {
  bid_form_f: {
    component: <IndivideForm1 />,
    title: 'Форма для подачи заявки физического лица и ИП'
  },
  bid_form_u: {
	  component: <EntityForm />,
    title: 'Форма для подачи заявки юридического лица'
  }
};
