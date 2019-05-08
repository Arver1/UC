import React from 'react';
import {Section, Title, Link} from "./styled";


export const Certs = () => (
  <Section>
    <Title>Образец выдаваемого сертификата</Title>
    <Link href="#cert" className="cert__item" title="Посмотреть увеличинное изображение сертификата">
      <picture>
        <img src="src/img/cert@1x.jpg" srcSet="src/img/cert@2x.jpg 2x" width="100"
             height="120" alt="Образец выдаваемого сертификата" title="Образец выдаваемого сертификата"/>
      </picture>
      <svg className="icon" width="20" height="20">
        <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#increase">
        </use>
      </svg>
    </Link>
    <Link href="#cert" className="cert__item" title="Посмотреть увеличинное изображение сертификата">
      <picture>
        <img src="src/img/cert@1x.jpg" srcSet="src/img/cert@2x.jpg 2x" width="100"
             height="120" alt="Образец выдаваемого сертификата" title="Образец выдаваемого сертификата"/>
      </picture>
      <svg className="icon" width="20" height="20">
        <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#increase">
        </use>
      </svg>
    </Link>
  </Section>
);