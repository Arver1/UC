import styled from "styled-components";
import {MAIN_COLOR_DGRAY, Roboto} from "../../../styles";

const h2 = styled.h2`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;
  flex-direction: column;
  margin-bottom: 30px;
  
  & > span {
    font-size: 26px;
    font-weight: 400;
    line-height: normal;
    color: ${MAIN_COLOR_DGRAY};
    font-family: ${Roboto};
    text-transform: uppercase;
    margin-bottom: 20px;
  }
`;

export const titleMap = {
  2: h2
};
