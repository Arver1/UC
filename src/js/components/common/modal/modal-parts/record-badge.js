import React from 'react';
import styled from 'styled-components';
import {MAIN_COLOR_DGRAY, Roboto} from "../../../styles";



const Record = styled.strong`
   font-size: 14px;
   font-weight: 400;
   line-height: normal;
   color: ${MAIN_COLOR_DGRAY};
   font-family: ${Roboto};
   text-align: center;
   display: block;
   max-width: 280px;
   box-sizing: border-box;
   padding: 10px 10px 10px 34px;
   margin: 10px auto;
   position: relative;
   border-radius: 10px;
   border: 1px solid #F7EAF1;
  }

  & > b{
   font-size: 14px;
   font-weight: 500;
   line-height: normal;
   color: #000;
  }

  &::before {
    content: '';
    display: block;
    position: absolute;
    left: 10px;
    background: #fff url('/src/img/record@1x.png') 50% 50% no-repeat;
    @media (min-resolution: 144dpi),
    (min-resolution: 1.5dppx) {
      background: #fff url('/src/img/record@2x.png') 50% 50% no-repeat;
      background-size: 20px 16px;
    }
    width: 20px;
    height: 16px;
  }
`;

export default () => (<Record>
    Регистрационный номер:
    <b>50.009</b>
  </Record>
);
