import styled from 'styled-components';
import { MAIN_COLOR_GRAY, MIXINS } from '../../styles';

export const ImgWrapper = styled.div`
    ${MIXINS.flex};
    margin: 0 0 18px;
`;

export const Img = styled.div`
    width: 320px;
    height: 100px;
    ${MIXINS.flex};
    align-context: center;
    align-items: center;
    border: 2px solid ${MAIN_COLOR_GRAY};
`;

export const Text = styled.p`
    width: 180px;
    ${MIXINS.font('14px', 500, '#000')};
`;
