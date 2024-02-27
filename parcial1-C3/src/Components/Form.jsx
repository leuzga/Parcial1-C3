// Form.jsx
import React, { useState } from 'react';

const Form = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type='submit'>Submit</button>
    </form>
  );
};

export default Form;
