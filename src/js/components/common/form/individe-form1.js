import React from 'react';

const telephoneMask = ['+', '7', '(', '_', '_', '_', ')', '-', '_', '_', '_', '-', '_', '_', '-', '_', '_'];
const unusedSymbols = ['+', '(', ')', '-'];
const MAX_LENGTH = 12;
const MIN_CURSOR_POS = 3;
const MAX_CURSOR_POS = 17;


export class IndivideForm1 extends React.Component {
  state = {
    value: telephoneMask.join(''),
  };

  telephoneMask = telephoneMask;

  telephoneRef = React.createRef();


  handleChange = (e) => {
    const { value } = e.target;
    const { value: stateVal } = this.state;


    const arrDigit = (value.match(/\d/g));
    const prevArrDigit = (stateVal.match(/\d/g));
    const arrDigitLen = arrDigit && arrDigit.length || 0;
    const prevArrDigitLen = prevArrDigit && prevArrDigit.length || 0;
    const cursor = this.telephoneRef.current;
    
    switch (arrDigitLen) {
      case 0:
      case 1:
        this.telephoneMask = telephoneMask;
        return this.setState({
          value: telephoneMask.join(''),
        }, () => {
          cursor.selectionStart = MIN_CURSOR_POS;
          cursor.selectionEnd = MIN_CURSOR_POS;
        });
      case MAX_LENGTH:
        let index = 2;
        return this.setState({
          value: this.telephoneMask.reduce((acc, it) => {
            if (it === '_') return acc + arrDigit[index++];
            return acc + it;
          }),
        }, () => {
          cursor.selectionStart = MAX_CURSOR_POS;
          cursor.selectionEnd = MAX_CURSOR_POS;
        });
      default:
        if (arrDigit.length === prevArrDigit.length) {
          let index = cursor.selectionStart;

          if (!~stateVal.lastIndexOf('_')) {
            return this.setState({
              value: stateVal,
            }, () => {
              cursor.selectionStart = index;
              cursor.selectionEnd = index;
            });
          }
          while (index > MIN_CURSOR_POS && isNaN(+stateVal[index])) {
            index--;
          }
          if (value[index] === '_') index--;
          return this.setState({
            value: stateVal,
          }, () => {
            cursor.selectionStart = index++ < MIN_CURSOR_POS ? MIN_CURSOR_POS : index;
            cursor.selectionEnd = index < MIN_CURSOR_POS ? MIN_CURSOR_POS : index;
          });
        }
        
        
        if(prevArrDigitLen - arrDigitLen > 1) {
          console.log('value', value);
          console.log('this.telephoneMask', this.telephoneMask);
          const formatValue = this.telephoneMask.reduce((acc, it, index) => {
            console.log('it', it);
            if(index < 3) return acc;
            if (it === value[index] || isNaN(+it)) return acc + it;
            return acc + '_';
          }, '+7(');
          
          this.telephoneMask = formatValue.split('');
          console.log('this.telephoneMask', this.telephoneMask)
          return this.setState({
            value: formatValue
          }, () => {
            const i = this.telephoneMask.indexOf('_');
            cursor.selectionStart = !~i ? MAX_CURSOR_POS : i;
            cursor.selectionEnd = !~i ? MAX_CURSOR_POS : i;
          });
        }
        if (arrDigitLen < prevArrDigitLen) {
          let i = MIN_CURSOR_POS;
          while (stateVal[i] === value[i]) {
            i++;
          }

          const formatValue = stateVal.split('');
          formatValue[i] = '_';
          this.telephoneMask = formatValue;

          return this.setState({
            value: formatValue.join(''),
          }, () => {
            cursor.selectionStart = i;
            cursor.selectionEnd = i;
          });
        }

        let i = 1;
        while (stateVal[i] === value[i]) {
          i += 1;
        }
        if (!isNaN(+value[i])) {
          const format = this.telephoneMask.join('').replace('_', value[i]);
          this.telephoneMask = format.split('');
          return this.setState({
            value: format,
          }, () => {
            const i = this.telephoneMask.indexOf('_');
            cursor.selectionStart = !~i ? MAX_CURSOR_POS : i;
            cursor.selectionEnd = !~i ? MAX_CURSOR_POS : i;
          });
        }
    }
  };


  render() {
    const { value } = this.state;
    return <input size="20" value={value} ref={this.telephoneRef} onChange={this.handleChange} />
  }
}
