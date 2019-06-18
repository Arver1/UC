import React from 'react';
import styled from 'styled-components';
import { EntityForm, IndivideForm1 } from '../form';
import Record from './modal-parts/record-badge';

const IMG = styled.img`
  display: flex;
  height: 55vh; // max 60vh, 55vh required for iphoneX
  margin: 0 auto;
`;


export default {
  bid_form_f: {
    component: <IndivideForm1 mask="+X(XXX)-XXX-XX-XX" />,
    title: 'Форма для подачи заявки физического лица и ИП',
  },
  bid_form_u: {
    component: <EntityForm />,
    title: 'Форма для подачи заявки юридического лица',
  },
  cert_front: {
    notification: <Record />,
    component: <IMG src="/src/img/cert.jpg" />,
    title: 'Образец выдаваемого сертификата',
  },
  cert_back: {
    notification: <Record />,
    component: <IMG src="/src/img/cert.jpg" />,
    title: 'Образец выдаваемого сертификата',
  },
};
