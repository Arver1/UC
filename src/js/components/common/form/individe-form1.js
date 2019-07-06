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
    console.log('currentPos', currentPos);
    console.log('arrDigit', arrDigit);
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
    const { value } = e.target;
    const { value: stateVal } = this.state;
    const cursor = this.telephoneRef.current;

    const arrDigit = (value.match(/\d/g)) || [];
    const prevArrDigit = (stateVal.match(/\d/g)) || [];
    const arrLen = arrDigit && arrDigit.length || 0;
    const prevLen = prevArrDigit && prevArrDigit.length || 0;
    const maxLen = this.telephoneMask.match(/X/g).length;
    const direction = arrLen > prevLen ? 'left' : 'right';
    const diff = Math.abs(prevLen - arrLen);
    let currentPos = this.position;
    if (currentPos < this.MIN_CURSOR_POS) {
      currentPos = this.MIN_CURSOR_POS;
    } else if (currentPos > this.MAX_CURSOR_POS) {
      currentPos = this.MAX_CURSOR_POS;
    }

    // console.log('diff', diff);
    // console.log('currentPos', currentPos);
    if (diff > 1) {
      if (direction === 'left') {
        let index = 0;
        // console.log('arrDigit',arrDigit);
        // console.log('prevArrDigit',prevArrDigit);
        while (arrDigit[index] === prevArrDigit[index]) {
          index++;
          if (index > maxLen) break;
        }
        arrDigit.some((it, i) => {
          if(i >= diff) return true;
          prevArrDigit[index + i] = arrDigit[index + i];
          this.updateMaskObj(direction, 1, prevArrDigit);
          return false;
        });
      }
    } else {
      this.updateMaskObj(direction, diff, arrDigit);
    }

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
    this.position = e.target.selectionStart;
  }

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
