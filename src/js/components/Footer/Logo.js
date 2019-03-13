import React from 'react';

function Logo(){
  return (
    <a className="footer-page__logo" href="#">
      <picture>
        <source srcSet="src/img/logo@2x.png" media="(min-resolution: 144dpi),
          (min-resolution: 1.5dppx)" />
        <img src="src/img/logo@1x.png" alt="logo_shop24" title="shop24" />
      </picture>
    </a>
  )
}

export default Logo
