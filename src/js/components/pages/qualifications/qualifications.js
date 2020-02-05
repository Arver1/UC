import React, { PureComponent } from 'react';
import { Title } from '../../common';
import { dataNote } from '../../../constants/qualifications';
import { Quote } from './styled';
import { getBreadCrumbs } from '../../../utils';
import { get } from '../../../constants';

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
   <Note>
  {dataNote}
 </Note>
  {getQualityList()}
      </>
    );
  }
}
