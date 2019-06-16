import React from 'react';

const telephoneMask = ['+', '7', '(', '_', '_', '_', ')', '-', '_', '_', '_', '-', '_', '_', '-', '_', '_'];
const unusedSymbols = ['+', '(', ')', '-'];


export class IndivideForm1 extends React.Component {
  state = {
    value: telephoneMask.join(''),
  };

  telephoneMask = telephoneMask;

  telephoneRef = React.createRef();

  handleChange = (e) => {
    const { value } = e.target;
    const { value: stateVal } = this.state;
	  console.log('after match', stateVal);
	  console.log('before match', value.match(/\+7(___)-___-__-__/));
    if (stateVal.match(/\+7(___)-___-__-__/)) {
    	console.log('after match');
      return this.setState({
	      stateVal,
      }, () => {
        const i = e.target.current.selectionStart;
        const index = i - 1 < 3 ? 3 : i - 1;
        this.telephoneRef.current.selectionStart = index;
        this.telephoneRef.current.selectionEnd = index;
      });
    }
    if (value.length < stateVal.length) {
      let i = 0;
      while (value[i] === stateVal[i]) {
        i += 1;
      }

      const formatValue = stateVal.split('');
      if (formatValue[i] === '-' || formatValue[i] === ')' || formatValue[i] === '(') {
        return this.setState({
          value: formatValue.join(''),
        }, () => {
          const index = i - 1 < 3 ? 3 : i - 1;
          this.telephoneRef.current.selectionStart = index;
          this.telephoneRef.current.selectionEnd = index;
        });
      }
      formatValue[i] = '_';
      return this.setState({
        value: formatValue.join(''),
      }, () => {
        const index = i < 3 ? 3 : i;
        this.telephoneRef.current.selectionStart = index;
        this.telephoneRef.current.selectionEnd = index;
      });
    }
    const formatValue = value.split('').reduce((acc, it, index) => {
		  // console.log('acc', acc);
		  // console.log('it', it);
		  // console.log('index', index);


		  if (index < 3) return acc;
		  if (it === this.telephoneMask[index]) return acc + this.telephoneMask[index];
		  if (isNaN(+it)) {
			  console.log('В поле ТЕЛЕФОН допустимы только цифры');
			  return (acc + this.telephoneMask[index]).slice(0, 17);
		  }
			  acc = (acc + this.telephoneMask[index]).slice(0, 17).replace('_', it);
			  return acc;
	  }, '+7(');

    console.log('this.telephoneRef', this.telephoneRef);
    const index = formatValue.indexOf('_');
	  console.log('this.telephoneRef', this.telephoneRef);
    this.setState({
      value: formatValue,
    }, () => {
	    if (index) {
		    this.telephoneRef.current.selectionStart = index > 16 ? 16 : index;
		    this.telephoneRef.current.selectionEnd = index > 16 ? 16 : index;
	    }
    });
  }

  handleChange1 = (e) => {
    const { value } = e.target;
    const { value: stateVal } = this.state;

    const arrDigit = (value.match(/\d/g));
    const prevArrDigit = (stateVal.match(/\d/g));
	  const arr1 = e.target.value.match(/(_|\d)/g);
	
	  console.log('value', value);
	  console.log('stateVal', stateVal);
	  // console.log('arrDigit', arrDigit);
	  // console.log('telephoneMask', this.telephoneMask);
	  // console.log('arr1', arr1);
	  
    if (arrDigit.length === 1) {
	    this.telephoneMask = telephoneMask;
      return this.setState({
        value: telephoneMask.join(''),
      }, () => {
        this.telephoneRef.current.selectionStart = 3;
        this.telephoneRef.current.selectionEnd = 3;
      });
    }
	

    if (arrDigit.length === prevArrDigit.length) { // переход на следующий блок
	    const index = this.telephoneRef.current.selectionStart;
	   let i = stateVal.indexOf('_');
	    if(i === -1){
		    return this.setState({
			    value: stateVal,
		    }, () => {

			    this.telephoneRef.current.selectionStart = index;
			    this.telephoneRef.current.selectionEnd = index;
		    });
	    }
	   while (i > 3 && isNaN(+stateVal[i])) {
	   	i--;
	   }
	    console.log('i', i)
	   if (value[i] === '_') i--;
      return this.setState({
	      value: stateVal,
      }, () => {
	      this.telephoneRef.current.selectionStart = i + 1;
	      this.telephoneRef.current.selectionEnd = i + 1;
      });
    }

    if (arrDigit.length < prevArrDigit.length) {
    	let i = 3;
    	while (stateVal[i] === value[i]) {
    		i++;
	    }
	    const formatValue = stateVal.split('');
	    formatValue[i] = '_';
	    this.telephoneMask = formatValue;

	    return this.setState({
		    value: formatValue.join(''),
	    }, () => {
		    this.telephoneRef.current.selectionStart = i;
		    this.telephoneRef.current.selectionEnd = i;
	    });
    }
    
    arrDigit.shift();
    let i = 0;
    while (stateVal[i] === value[i]) {
      i += 1;
    }
    const total = value[i];
    if (!isNaN(+total)) {
      const format = this.telephoneMask.join('').replace('_', total);
      this.telephoneMask = format.split('');
      return this.setState({
        value: format,
      }, () => {
      	
        const i = this.telephoneMask.indexOf('_');
        this.telephoneRef.current.selectionStart = i === -1 ? 17 : i;
        this.telephoneRef.current.selectionEnd = i === -1 ? 17 : i;
      });
    }
  };


  render() {
    return (
      <form>
        <input size="20" value={this.state.value} ref={this.telephoneRef} onChange={this.handleChange1} />
      </form>
    );
  }
}
