import React, { useEffect } from 'react';

const Input = () => {
  useEffect(() => {
    console.log('Doesn\'t get here');
  }, []);

  return <input />;
};

export default Input;