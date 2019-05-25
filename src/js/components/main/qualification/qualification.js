import React, {PureComponent} from 'react';
import {Title} from "../../common";
import {dataNote} from "../../data";
import {Quote} from "./styled";

export const Note = (props) => {
  return (
    <Quote>
      {props.children}
    </Quote>
  )
};

export class Qualification extends PureComponent{
  render(){
    return (
      <>
        {Title('Профессиональные квалификации')}
        <Note>
          {dataNote}
        </Note>
      </>
    )
  }
}
