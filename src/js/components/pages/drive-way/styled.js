import styled from 'styled-components';
import { MAIN_COLOR_DGRAY, MIXINS, HEADER_DESKTOP_WIDTH } from '../../styles';

export const Wrapper = styled.div`
    max-width: 680px;
    padding: 18px 0 0;
    margin: 0 0 0 60px;
    
    @media (min-width: ${HEADER_DESKTOP_WIDTH}) {
        margin: 0 auto 0 60px;
    }
`;

export const Paragraph = styled.p`
    ${MIXINS.font('14px', 400, `${MAIN_COLOR_DGRAY}`)};
    max-width: 680px;
    text-align: left;
    margin: 0 18px 18px 0;
    
    @media (min-width: ${HEADER_DESKTOP_WIDTH}) {
        margin: 0 0 18px 0;
        max-width: none;
    }
`;