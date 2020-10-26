import React, { Component } from 'react';
import {Section, Title, Link} from "./styled";
import {connect} from "react-redux";
import {showModal} from "../../common";
import {noop} from "../../../constants";


@connect(null, {showModal})
export class Certs extends Component {

  handleClick = (name) => () => {
    const { showModal = noop } = this.props;
    showModal(name);
  };

  render(){
    const handleClickFront = this.handleClick('cert_front');
    const handleClickBck = this.handleClick('cert_back');
    return (
      <Section>
        <Title>Образец выдаваемого сертификата</Title>
        <Link onClick={handleClickFront} href="#cert" className="cert__item" title="Посмотреть увеличинное изображение сертификата">
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
    )
  }
}
