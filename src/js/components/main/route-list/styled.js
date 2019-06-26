import styled from 'styled-components';
import { MAIN_COLOR_DGRAY, MIXINS } from '../../styles';


export const List = styled.ul`
  width: 280px;
  margin: 0 auto 20px;
`;

export const ListItem = styled.li`
  ${MIXINS.font('14px', 400, `${MAIN_COLOR_DGRAY}`)};
  position: relative;
  margin-bottom: 10px;
  padding-left: 35px;
  min-height: 20px;
  box-sizing: border-box;
  text-overflow: ellipsis;
  vertical-align: middle;
  
  & > b {
    ${MIXINS.font('14px')};
    vertical-align: middle;
  }
  
  & > .icon {
    position: absolute;
    left: 0;
    bottom: 2px;
  }
  
  
`;
