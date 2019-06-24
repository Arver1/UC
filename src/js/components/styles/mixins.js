import styled from 'styled-components';
import { Roboto } from './variables';

const flex = `
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const flexCenter = `
  ${flex};
  justify-content: center;
  align-content: center;
  align-items: center;
`;

const inlineBlock = `
  display: inline-block;
  vertical-align: top;
`;

const hidden = `
  position: absolute;
  clip: rect(0,0,0,0);
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
`;

const font = (size = '16px', weight = '500', color = '#000', height = 'normal', family = Roboto) => `
  font-size: ${size};
  weight: ${weight};
  color: ${color};
  height: ${height};
  font-family: ${family};
`;

export default {
  flex,
  'flex-center': flexCenter,
  'inline-block': inlineBlock,
  font,
  hidden,
};
