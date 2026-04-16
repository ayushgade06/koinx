import React from 'react';

const Checkbox: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => {
  return (
    <input
      type="checkbox"
      className="form-checkbox h-4 w-4 text-blue-600 rounded"
      {...props}
    />
  );
};

export default Checkbox;
