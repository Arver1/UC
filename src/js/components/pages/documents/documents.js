import React, {PureComponent} from 'react';
import {Title} from "../../common";
import {dataNote} from "../../../constants/qualifications";
import {Quote} from "./styled";

export const getQualityList = () => null;
export const Note = ({children}) => <Quote>{children}</Quote>;

export class Documents extends PureComponent {
	render() {
		return (
			<>
				{Title('Документы')}
				<Note>
					{dataNote}
				</Note>
				{getQualityList()}
			</>
		)
	}
}
