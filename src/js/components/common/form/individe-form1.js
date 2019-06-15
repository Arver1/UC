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
