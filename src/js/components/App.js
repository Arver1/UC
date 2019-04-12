import React from 'react';
import Form from './Form';

function App(){

  const handleChange = (e) => console.log(e.target.value);
  return (
    <Form handleChange={handleChange}/>
  )
}

export default App
