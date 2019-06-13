import React, { PureComponent } from 'react';
import { get } from 'lodash';
import { Title } from '../../common';
import { dataNote } from '../../../constants/qualifications';
import { Quote } from './styled';
import { getBreadCrumbs } from '../../../utils';

export const getQualityList = () => null;
export const Note = ({ children }) => <Quote>{children}</Quote>;


const BreadCrumbs = ({ path }) => {
  console.log(getBreadCrumbs(path).map);
  return (
    <div>
      {getBreadCrumbs(path).map}
    </div>
  );
};

export class Qualifications extends PureComponent {
  render() {
    const { history } = this.props;
    const pathName = get(history, 'location.pathname', '');

    return (
			<>
  {Title('Квалификации')}
  <BreadCrumbs path={pathName} />
  {/* <Note> */}
  {/* {dataNote} */}
  {/* </Note> */}
  {getQualityList()}
			</>
    );
  }
}
