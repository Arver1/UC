import styled from 'styled-components';
import { MAIN_COLOR_DGRAY, Roboto } from '../../styles';


export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;


export const Label = styled.label`
  display: flex;
  margin-bottom: 15px;
  align-content: center;
  align-items: center;
`;


export const Span = styled.span`
  display: inline-block;
  vertical-align: top;
  width: 80px;
  font-size: 12px;
  font-weight: 500;
  line-height: normal;
  color: #000;
  font-family: ${Roboto};
  text-transform: uppercase;
`;