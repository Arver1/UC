import styled from 'styled-components';
import {HEADER_TABLET_WIDTH, MAIN_COLOR_DGRAY, MAIN_COLOR_RED, MIXINS} from '../../styles';

export const List = styled.ul`
  padding: 0 15px;
  margin-bottom: 20px;
  
  @media(min-width: ${HEADER_TABLET_WIDTH}) {
    ${MIXINS['flex-center']};
    justify-content: space-between;
  }
`;

export const ListItem = styled.li`
  background: linear-gradient(160deg, #ffffff 45%, #C8C6C7 100%);
  border-radius: 10px;
  ${MIXINS.flex};
  max-width: 300px;
  margin: auto;
  
  & + & {
    margin-top: 20px;
    
     @media(min-width: ${HEADER_TABLET_WIDTH}) {
       margin-top: 0;
     }
  }
  
  & > img {
    order: -1;
    align-self: flex-start;
  }
`;

export const Wrapper = styled.div`
  ${MIXINS['flex-center']};
  flex-direction: column;
  width: 160px;
  text-overflow: ellipsis;
  
  & > h3 {
    ${MIXINS.font('14px', 400, `${MAIN_COLOR_DGRAY}`)};
    align-self: center;
    margin-bottom: 16px;
    position: relative;
  }
  
  & > h3::before {
    content: '';
    display: block;
    position: absolute;
    width: calc(100% - 20px);
    height: 2px;
    left: 10px;
    bottom: -2px;
    border-bottom: 1px dashed ${MAIN_COLOR_DGRAY};
  }
`;

export const StyledLink = styled.a`
  ${MIXINS.font('12px', 500, '#fff')};
  background-color: ${MAIN_COLOR_RED};
  text-align: center;
  vertical-align: center;
  padding: 5px;
  text-transform: uppercase;
  border-radius: 5px;
`;
