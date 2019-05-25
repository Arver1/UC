import React, {PureComponent} from 'react';
import {Title} from "../../common";
import {dataNote} from "../../../constants/qualifications";
import {Quote} from "./styled";

export const getQualityList = () => null;
export const Note = ({children}) => <Quote>{children}</Quote>;

export class Qualifications extends PureComponent {
	render() {
		return (
			<>
				{Title('Профессиональные стандарты')}
				<Note>
					{dataNote}
				</Note>
				{getQualityList()}
			</>
		)
	}
}
