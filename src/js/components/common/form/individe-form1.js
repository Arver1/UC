import React from 'react';


export class IndivideForm1 extends React.Component {
  state = {
    value: null,
  };

  telephoneMask = null;

  maskObj = null;

  MIN_CURSOR_POS = 0;

  MAX_CURSOR_POS = 0;

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

  updateMaskObj = (direction, diff, arrDigit) => {
    let currentPos = this.position;
    if (currentPos < this.MIN_CURSOR_POS) {
      currentPos = this.MIN_CURSOR_POS;
    } else if (currentPos > this.MAX_CURSOR_POS) {
      currentPos = this.MAX_CURSOR_POS;
    }
    if (direction === 'left') {
      let temp = 0;
      if (diff === 1) {
        const arr = Object.values(this.maskObj);
        arr.push('-1');
        arr.some((it, index) => {
          if (!~this.maskObj[index] || !index) return false;
          if (index <= currentPos) {
            if (this.maskObj[index] !== -2) temp++;
            return false;
          }
          this.maskObj[index] = +arrDigit[temp];
          return true;
        });
        arr.some((it, index) => {
          if (!~this.maskObj[index] || !index) return false;
          if (temp >= 0) {
            // требуется для перевода последнего символа
            if (temp === 0) this.position = this.MAX_CURSOR_POS;
            if (this.maskObj[index] !== -2) temp--;
            return false;
          }
          this.position = index - 1;
          return true;
        });
      }
      return;
    }
    if (diff === 0) {
      for (let i = this.position; i >= this.MIN_CURSOR_POS; i--) {
        this.position = i;
        if (!~this.maskObj[i] || this.maskObj[i] === -2) {
          continue;
        }
        break;
      }
    } else if (diff === 1) {
      for (let i = this.position; i >= this.MIN_CURSOR_POS; i--) {
        if (!~this.maskObj[i] || this.maskObj[i] === -2) {
          continue;
        }
        this.maskObj[i] = -2;
        break;
      }
      this.position--;
      while (!~this.maskObj[this.position] === -1) {
        this.position--;
        if (this.position < this.MIN_CURSOR_POS) {
          this.position = this.MIN_CURSOR_POS;
          break;
        }
      }
    }
  };

  handleChange = (e) => {
    this.flag = false;
    const { value } = e.target;
    const { value: stateVal } = this.state;
    const cursor = this.telephoneRef.current;

    const arrDigit = (value.match(/\d/g)) || [];
    const prevArrDigit = (stateVal.match(/\d/g)) || [];
    const arrLen = arrDigit && arrDigit.length || 0;
    const prevLen = prevArrDigit && prevArrDigit.length || 0;
    const maxLen = this.telephoneMask.match(/X/g).length;
    arrDigit.length = maxLen;
    const direction = arrLen > prevLen ? 'left' : 'right';
    const diff = Math.abs(prevLen - arrLen);
    console.log('this.position start', this.posStart);
    console.log('this.position end', this.posEnd);
    if(this.posEnd - this.posStart > 1 && diff === 1 && this.posStart < this.posEnd && direction === 'right'){
      const arr = Object.values(this.maskObj);
      let index = this.posStart < this.MIN_CURSOR_POS ? this.MIN_CURSOR_POS : this.posStart;
      while(index <= this.posEnd + 1){
        if(arr[index] !== -2 && arr[index] !== -1){
          this.position = index + 1;
          console.log('arr[index]',arr[index])
          console.log('arver', this.position);
          console.log('arr', arr)
          break;
        }
        index++;
      }
    }
    let currentPos = this.position;
    if (currentPos < this.MIN_CURSOR_POS) {
      currentPos = this.MIN_CURSOR_POS;
    } else if (currentPos > this.MAX_CURSOR_POS) {
      currentPos = this.MAX_CURSOR_POS;
    }
    if (diff > 1) {
      if (direction === 'left') {
        let index = 0;
        while (arrDigit[index] === prevArrDigit[index]) {
          index++;
          if (index > maxLen) break;
        }
        arrDigit.some((it, i) => {
          if (i >= diff) return true;
          prevArrDigit[index + i] = arrDigit[index + i];
          this.updateMaskObj(direction, 1, prevArrDigit);
          return false;
        });
      } else {
        // случай неправильного выделения при удалении
        if(diff > 1 && this.position === this.MAX_CURSOR_POS) {
          this.position = this.MIN_CURSOR_POS;
        }
        // reset full
        if (!arrLen) {
          Object.values(this.maskObj).forEach((it, i) => {
            i++;
            if (!~it) return;
            this.maskObj[i] = -2;
          });
          this.position = this.MIN_CURSOR_POS;
        } else {
          let temp = 0;
          let arrCount = 0;
          Object.values(this.maskObj).forEach((it, i) => {
            i++;
            if (!~this.maskObj[i]){
              return null;
            }
            console.log('this.position1', this.position);
            if (i <= this.position || this.maskObj[i] === -2) {
              arrCount++;
              return null;
            }
            console.log('temp', temp);
            console.log('diff', diff);
            // console.log('arrCount', arrCount);
            // console.log('this.maskObj', this.maskObj);
            // console.log('diff', diff);

            if (temp < diff) {
              console.log('i: ', i)
              this.maskObj[i] = -2;
              temp++;
              return null;
            }
          });
        }
      }
    } else {
      console.log('else')
      console.log('diff', diff);
      console.log('direction', direction);
      console.log('arrLen', arrLen);
      console.log('position', this.position);
      if (diff === 1 && diff === prevLen && direction === 'right') {
        Object.values(this.maskObj).forEach((it, i) => {
          i++;
          if (!~it) return;
          this.maskObj[i] = -2;
        });
        this.position = this.MIN_CURSOR_POS;
      } else
      this.updateMaskObj(direction, diff, arrDigit);
    }

    console.log('this.maskObj', this.maskObj);
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

  handleClick = (e) => {
    const { value } = e.target;
    const { value: stateVal } = this.state;

    const arrDigit = (value.match(/\d/g)) || [];
    const prevArrDigit = (stateVal.match(/\d/g)) || [];
    const arrLen = arrDigit && arrDigit.length || 0;
    const prevLen = prevArrDigit && prevArrDigit.length || 0;
    const diff = Math.abs(prevLen - arrLen);
    this.posStart = e.target.selectionStart;
    this.posEnd = e.target.selectionEnd;
    // console.log('arrlen', arrLen);
    // console.log('prevlEN', prevLen);
    // console.log('end', this.posEnd);
    // console.log('start', this.posStart);
    // console.log('diff', diff);
    if (diff === 1 || this.posEnd - this.posStart === 1) {
      this.position = this.posEnd;
    } else {
      this.position = this.posStart;
    }
  };

  render() {
    const { value } = this.state;
    return (
      <input
        size="20"
        value={value}
        ref={this.telephoneRef}
        onChange={this.handleChange}
        onClick={this.handleClick}
      />
    );
  }
}
