import React from 'react';
import {titleMap} from "./styled";


export const Title = (text = '', size = 2) => {
  const Caption = titleMap[size] || React.Fragment;
  if(Caption) {
    return (
      <Caption>
      <span>
        {text}
      </span>
      </Caption>
    )
  }
};
