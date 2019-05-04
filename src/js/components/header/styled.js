import styled from "styled-components";
import {HEADER_MOBIL_TOP_PADDING, MAIN_COLOR_RED} from "../styles";

export const Header = styled.header`
  margin-bottom: 20px;
  border-bottom: 1px solid ${MAIN_COLOR_RED};
  padding: ${HEADER_MOBIL_TOP_PADDING} 0 10px;
  background: linear-gradient(to bottom, ${MAIN_COLOR_RED} ${HEADER_MOBIL_TOP_PADDING}, #fff ${HEADER_MOBIL_TOP_PADDING});
`;

export const Wrapper = styled.div`
  max-width: 415px;
  min-width: 320px;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  position: relative;
`;