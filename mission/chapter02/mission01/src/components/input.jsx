import React from 'react';

function Input({ value, onChange, placeholder, className }) {
  return (
    <input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={className}
    />
  );
}

export default Input;
