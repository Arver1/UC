import React, { Component } from 'react';


export class IndivideForm1 extends Component {
  constructor(props) {
    super(props);

    const { mask } = props;

    this.telephoneMask = mask || '+X(XXX)-XXX-XX-XX';
    this.maxLen = this.telephoneMask.match(/X/g).length;
    this.maskObj = this.telephoneMask.split('').reduce((acc, it, index) => {
      acc[++index] = it === 'X' ? -2 : -1;
      return acc;
    }, {});

    this.MIN_CURSOR_POS = this.telephoneMask.indexOf('X');
    this.MAX_CURSOR_POS = this.telephoneMask.lastIndexOf('X') + 1;

    this.defaultValue = this.telephoneMask.replace(/X/g, '_');

    this.telephoneRef = React.createRef();
    this.posStart = 0;
    this.posEnd = 0;

    this.state = {
      value: this.defaultValue,
    };
  }

  updateMaskObj = (direction, diff, arrDigit, prevLen, maskObjArr) => {
    if (diff === 1 && direction === 'right' && diff === prevLen) {
      return this.resetMask(maskObjArr);
    }

    if (diff === 1 && direction === 'right' && this.posEnd - this.posStart > 1) {
      // correct a position if removed one symbol by multiple selection
      let index = this.posStart;
      while (index <= this.posEnd + 1) {
        if (maskObjArr[index] !== -2 && maskObjArr[index] !== -1) {
          this.position = index + 1;
          break;
        }
        index += 1;
      }
    }


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

  updateState = () => {
    const cursor = this.telephoneRef.current;

    this.setState({
      value: Object.values(this.maskObj).reduce((acc, it, index) => {
        if (it === -1) return acc + this.telephoneMask[index];
        if (it === -2) return `${acc}_`;
        return acc + this.maskObj[index + 1];
      }, ''),
    }, () => {
      cursor.selectionStart = this.position;
      cursor.selectionEnd = this.position;
    });
  };

  resetMask = (maskObjArr) => {
    maskObjArr.forEach((it, i) => {
      if (~this.maskObj[++i]) {
        this.maskObj[i] = -2;
      }
    });
    this.position = this.MIN_CURSOR_POS;
  };

  handleChange = (e) => {
    e.stopPropagation();

    const { value } = e.target;
    const { value: stateVal } = this.state;


    const arrDigit = (value.match(/\d/g)) || [];
    const prevArrDigit = (stateVal.match(/\d/g)) || [];

    const arrLen = arrDigit.length;
    const prevLen = prevArrDigit.length;

    const direction = arrLen > prevLen ? 'left' : 'right';
    const diff = Math.abs(prevLen - arrLen);

    const maskObjArr = Object.values(this.maskObj);

    if (diff > 1 && arrLen > 0) {
      if (direction === 'left') {
        const index = arrDigit.findIndex((it, i) => it !== prevArrDigit[i] || i === prevLen && 0);
        arrDigit.some((it, i) => {
          if (i >= diff) return true;
          prevArrDigit[index + i] = arrDigit[index + i];
          this.updateMaskObj(direction, 1, prevArrDigit);
          return false;
        });
      } else {
        // incorrect multiple selection
        if (this.position === this.MAX_CURSOR_POS) {
          this.position = this.MIN_CURSOR_POS;
        }

        maskObjArr.reduce((acc, it, i) => {
          if (this.maskObj[++i] !== -1 && i > this.position && this.maskObj[i] !== -2 && acc < diff) {
            this.maskObj[i] = -2;
            return acc + 1;
          }
          return acc;
        }, 0);
      }
    } else if (!arrLen) {
      this.resetMask(maskObjArr);
    } else {
      this.updateMaskObj(direction, diff, arrDigit, prevLen, maskObjArr);
    }

    this.updateState();
  };

  handleClick = (e) => {
    e.stopPropagation();

    const { value, selectionStart: posStart, selectionEnd: posEnd } = e.target;
    const { value: stateVal } = this.state;

    const arrLen = ((value.match(/\d/g)) || []).length;
    const prevLen = ((stateVal.match(/\d/g)) || []).length;
    const diff = Math.abs(arrLen - prevLen);

    this.posStart = posStart < this.MIN_CURSOR_POS ? this.MIN_CURSOR_POS : posStart;
    this.posEnd = posEnd;

    // correct a position if select one symbol
    if (diff === 1 || posEnd - posStart === 1) {
      this.position = posEnd;
    } else {
      this.position = posStart;
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
