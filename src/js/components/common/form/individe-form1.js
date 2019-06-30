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

  telephoneMask = null;

  blocks = [];

  separates = [];

  direction = 'left';

  telephoneRef = React.createRef();

  componentDidMount() {
    const { mask } = this.props;

    this.telephoneMask = mask || '+X(XXX)-XXX-XX-XX';
    this.maskObj = this.telephoneMask.split('').reduce((acc, it, index) => {
      acc[++index] = it === 'X' ? -2 : -1;
      return acc;
    }, {});

    this.MIN_CURSOR_POS = this.telephoneMask.indexOf('X');
    this.MAX_CURSOR_POS = this.telephoneMask.lastIndexOf('X') + 1;

    this.setState({
      value: this.telephoneMask.replace(/X/g, '_'),
    });
  }

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


        if (prevArrDigitLen - arrDigitLen > 1) {
          console.log('value', value);
          console.log('this.telephoneMask', this.telephoneMask);
          const formatValue = this.telephoneMask.reduce((acc, it, index) => {
            console.log('it', it);
            if (index < 3) return acc;
            if (it === value[index] || isNaN(+it)) return acc + it;
            return `${acc}_`;
          }, '+7(');

          this.telephoneMask = formatValue.split('');
          console.log('this.telephoneMask', this.telephoneMask);
          return this.setState({
            value: formatValue,
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

  handleChange1 = (e) => {
    if (!this.blocks.length || !this.separates.length) return;
    const { value } = e.target;
    const { value: stateVal } = this.state;
    const cursor = this.telephoneRef.current;

    console.log('value', value);
    console.log('stateVal', stateVal);
    if (!value) {
      return this.setState({
        value: this.telephoneMask.replace(/X/g, '_'),
      }, () => {
        cursor.selectionStart = this.MIN_CURSOR_POS;
        cursor.selectionEnd = this.MIN_CURSOR_POS;
      });
    }

    const arrDigit = (value.match(/\d/g));
    const prevArrDigit = (stateVal.match(/\d/g));
    const arrDigitLen = arrDigit && arrDigit.length || 0;
    const prevArrDigitLen = prevArrDigit && prevArrDigit.length || 0;
    const diff = cursor.selectionStart - prevArrDigitLen - arrDigitLen;
    const direction = 'left';
    const len = value.length;
    let acc = '';

    if (arrDigitLen === prevArrDigitLen) {
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
        cursor.selectionStart = index++ < this.MIN_CURSOR_POS ? this.MIN_CURSOR_POS : index;
        cursor.selectionEnd = index < this.MIN_CURSOR_POS ? this.MIN_CURSOR_POS : index;
      });
    }


    // определение направления
    for (let i = 0; i < len; i++) {
      const left = this.separates.indexOf(value[i]);
      const right = len - 1 - this.separates.lastIndexOf(value[len - 1 - i]);
      if (!!~left && left !== right) {
        i = len;
      } else if (~right) {
        this.direction = 'right';
        i = len;
      }
    }

    console.log('value', value);
    let index = 0;
    switch (this.direction) {
      case 'left':
        const diff = cursor.selectionStart - prevArrDigitLen - arrDigitLen;

        for (let i = 0; i < this.telephoneMask.length; i++) {
          if (~this.separates.indexOf(this.telephoneMask[i])) {
            acc += this.telephoneMask[i];
            continue;
          }
          for (let j = 0; j < this.blocks[index]; j++) {
            acc += (arrDigit && (i >= diff) && arrDigit.shift() || '_');
          }
          if (this.blocks[index] > 1) i += this.blocks[index] - 1;
          index++;
        }

        index = this.MAX_CURSOR_POS;
        for (let i = cursor.selectionStart; i < acc.length; i++) {
          if (acc[i] === '_') {
            index = i;
            i = acc.length;
          }
        }
        return this.setState({
          value: acc,
        }, () => {
          cursor.selectionStart = index;
          cursor.selectionEnd = index;
        });
      case 'right':
        index = this.blocks.length - 1;
        for (let i = value.length - 1; i >= 0; i--) {
          if (~this.separates.lastIndexOf(this.telephoneMask[i])) {
            acc += this.telephoneMask[i];
            continue;
          }
          for (let j = 0; j < this.blocks[index]; j++) {
            acc += (arrDigit && arrDigit.pop() || '_');
          }
          if (this.blocks[index] > 1) i -= this.blocks[index] - 1;
          index--;
        }
    }
  };

  updateMaskObj = (position, direction, arrDigit, diff) => {
    console.log('position', position);
    const step = 0;
    let index = 0;
    switch (direction) {
      case 'left':
        for (let i = 1; i <= this.MAX_CURSOR_POS; i++) {
          if (!~this.maskObj[i]) continue;
          if (this.maskObj[i] !== -2 && i < position) {
            index++;
            continue;
          }
          this.maskObj[i] = +arrDigit[index++];
          if (index >= arrDigit.length) {
            i = this.MAX_CURSOR_POS;
          }
        }
        break;
      case 'right': {
        for (let i = this.MAX_CURSOR_POS; i >= 1; i--) {
          if (!~this.maskObj[i]) continue;
          if (this.maskObj[i] === -2) continue;
          if (i > position + 1) continue;
          this.maskObj[i] = -2;
          diff--;
          if (!diff) {
            this.help = i - 1;
            break;
          }
        }
      }
    }
  };

  handleChange2 = (e) => {
    const { value } = e.target;
    const { value: stateVal } = this.state;
    const cursor = this.telephoneRef.current;

    const arrDigit = (value.match(/\d/g));
    const prevArrDigit = (stateVal.match(/\d/g));
    const arrLen = arrDigit && arrDigit.length || 0;
    const prevLen = prevArrDigit && prevArrDigit.length || 0;
    const direction = arrLen > prevLen ? 'left' : 'right';
    const maxLen = this.telephoneMask.match(/X/g).length;
    const diff = Math.abs(prevLen - arrLen);
    let currentPos = this.position;
    currentPos = currentPos < this.MIN_CURSOR_POS ? this.MIN_CURSOR_POS : currentPos > this.MAX_CURSOR_POS ? this.MAX_CURSOR_POS : currentPos;
  
    // if(this.maskObj[currentPos] === -1){
    //   this.setState({
    //     value: stateVal,
    //   }, () => {
    //     cursor.selectionStart = ++this.position;
    //     cursor.selectionEnd = this.position;
    //   });
    // }
    console.log('arrDigit', arrDigit);
    console.log('currentPos', currentPos);
    console.log('this.MIN_CURSOR_POS', this.MIN_CURSOR_POS);
    console.log('this.MAX_CURSOR_POS', this.MAX_CURSOR_POS);

    switch (direction) {
      case 'left':

        let temp = 0;
        if (diff === 1) {
          const arr = Object.keys(this.maskObj);
          arr.push('-1');
          arr.some((it, index) => {
            if (!~this.maskObj[index] || !index) return false;
            if (index <= currentPos) {
              temp++;
              return false;
            }
            this.maskObj[index] = +arrDigit[temp];
            return true;
          });
          arr.some((it, index) => {
            
            if (!~this.maskObj[index] || !index) return false;
            if (temp >= 0) {
              // требуется для перевода последнего символа
              if(temp === 0) this.position = this.MAX_CURSOR_POS;
              temp--;
              return false;
            }
            else this.position = index - 1;
            return true;
          });
        }
      case 'right':
    }
    
    const arr = Object.values(this.maskObj);
    arr.push('-1');
    const total = Object.values(this.maskObj).reduce((acc, it, index) => {
      if (it === -1) return acc + this.telephoneMask[index];
      if (it === -2) return `${acc}_`;
      return acc + this.maskObj[index + 1];
    }, '');

    this.setState({
      value: total,
    }, () => {
      cursor.selectionStart = this.position;
      cursor.selectionEnd = this.position;
    });
  };

  handleChange3 = () => {
  }

  render() {
    const { value } = this.state;
    return (
      <input
        size="20"
        value={value}
        ref={this.telephoneRef}
        onChange={this.handleChange2}
        onClick={(e) => {
          this.position = e.target.selectionStart;
        }}
      />
    );
  }
}
