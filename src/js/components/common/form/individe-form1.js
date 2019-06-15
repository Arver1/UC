import React from 'react';

const telephoneMask = ['+', '7', '(', '_', '_', '_', ')', '-', '_', '_', '_', '-', '_', '_', '-', '_', '_'];


export class IndivideForm1 extends React.Component {
	
  state = {
    value: telephoneMask.join('')
  }
	
	telephoneMask = telephoneMask
	telephoneRef = React.createRef();
  
  handleChange = (e) => {
    const { value } = e.target;
    
    const stateVal = this.state.value;
    if(value.length < stateVal.length) {
    	let i = 0;
    	while(value[i] === stateVal[i]){
    		i++;
	    }
	    console.log('value', value.length);
	    console.log('stateVal', stateVal.length);
	    console.log('index', i);
	    const formatValue = stateVal.split('');
	    if(formatValue[i] === '-' || formatValue[i] ===')' || formatValue[i] === '(') {
		    return this.setState({
			    value: formatValue.join('')
		    }, () => {
			    if (i) {
			    	const a = i;
				    this.telephoneRef.current.selectionStart = a < 3 ? 3 : a;
				    this.telephoneRef.current.selectionEnd = a < 3 ? 3 : a;
			    }
		    })
	    }
	    console.log('before', formatValue);
	    
	    formatValue[i] = '_';
	
	    console.log('after', formatValue);
	    return this.setState({
		    value: formatValue.join('')
	    }, () => {
		    if (i) {
			    this.telephoneRef.current.selectionStart = i
			    this.telephoneRef.current.selectionEnd = i;
		    }
	    })
    }
	  console.log('value', value);
   console.log('this.state.value', this.state.value)
   const formatValue = value.split('').reduce((acc, it, index) => {
		  // console.log('acc', acc);
		  // console.log('it', it);
		  // console.log('index', index);
		
		
		  if (index < 3) return acc;
		  if (it === this.telephoneMask[index]) return acc + this.telephoneMask[index];
		  else if (isNaN(+it)) {
			  console.log(`В поле ТЕЛЕФОН допустимы только цифры`);
			  return (acc + this.telephoneMask[index]).slice(0, 17);
		  } else {
			  acc = (acc + this.telephoneMask[index]).slice(0, 17).replace('_', it);
			  return acc;
		  }
		
	  }, '+7(');
    
    console.log('this.telephoneRef', this.telephoneRef);
    const index = formatValue.indexOf('_');
	  console.log('this.telephoneRef', this.telephoneRef);
    this.setState({
      value: formatValue
    }, ()=>{
	    if (index) {
		    this.telephoneRef.current.selectionStart = index;
		    this.telephoneRef.current.selectionEnd = index;
	    }
    })
  }
  
  render() {
    return (
      <form>
        <input size="20" value={this.state.value} ref={this.telephoneRef} onChange={this.handleChange} />
      </form>
    );
  }
}
