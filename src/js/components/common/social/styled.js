import styled from 'styled-components';
import { MIXINS } from '../../styles';


export const Section = styled.section`
  display: flex;
  justify-content: flex-end;
  padding: ${({ resetPadding }) => (resetPadding ? '0 10px' : '0 50px')};
`;

export const SocialItem = styled.a`
  ${MIXINS['inline-block']};
  width: 30px;
  height: 30px;
  border-radius: 50%;
  
  & + & {
  margin-left: 10px;
  }
  
  &:hover {
    opacity: 0.5;
  }
`;
