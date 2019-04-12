import React from 'react';
import {reduxForm, Field} from 'redux-form';

const Form = ({handleChange}) => {
  const myFormat = (value) => {
    if(value){
      return value++;
    }
    return value;
  };
  const myParse = (value) => value.length;
  return (
    <Field name="firstName" component="input" type="text" onChange={handleChange} format={myFormat} parse={myParse}/>
  )
};

export default reduxForm({
  form: 'bid'
})(Form);
