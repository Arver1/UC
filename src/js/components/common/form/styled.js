import styled from 'styled-components';
import { Field } from 'redux-form';
import { MAIN_COLOR_DGRAY, MAIN_COLOR_RED, Roboto } from '../../styles';


export const StyledField = styled(Field)`
  border: 1px solid ${MAIN_COLOR_DGRAY};
  border-radius: 3px;
  padding: 0 5px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const Sup = styled.sup`
  color: ${MAIN_COLOR_RED};
  font-weight: 800;
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
  margin-right: 10px;
`;
