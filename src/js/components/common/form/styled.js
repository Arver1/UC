import styled from 'styled-components';
import { Field } from 'react-final-form';
import {
  MAIN_COLOR_DGRAY, MAIN_COLOR_RED, Roboto, MIXINS,
} from '../../styles';


export const StyledField = styled(Field)`
  border: 1px solid ${MAIN_COLOR_DGRAY};
  border-radius: 3px;
  padding: 0 5px;
  height: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const Sup = styled.sup`
  color: ${MAIN_COLOR_RED};
  font-weight: 800;
  margin-left: 3px;
`;

export const Label = styled.label`
  ${MIXINS.flex};
  flex-direction: column;
  margin-bottom: 15px;
`;


export const Span = styled.span`
  display: inline-block;
  vertical-align: top;
  font-size: 12px;
  font-weight: 500;
  line-height: normal;
  color: #000;
  font-family: ${Roboto};
  text-transform: uppercase;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  outline: none;
  border: 1px solid ${({ error }) => (error ? `${MAIN_COLOR_RED}` : '#A9A9A9')};
`;
