import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { HEADER_DESKTOP_WIDTH, MAIN_COLOR_DGRAY, MIXINS } from '../../styles';


export const StyledLink = styled(Link)`
  display: inline-block;
  vertical-align: top;
  position: relative;
  text-decoration: none;
  margin: 0 10px;
`;

export const List = styled.ul`
  width: 280px;
  margin: 0 auto 20px;
  
  @media(min-width: ${HEADER_DESKTOP_WIDTH}) {
    margin: 0 0 20px 40px;
  }
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
  
  @media(min-width: ${HEADER_DESKTOP_WIDTH}) {
    margin-top: 10px;
  }
`;
