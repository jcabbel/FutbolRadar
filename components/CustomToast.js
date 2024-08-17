import React from 'react';
import '../styles/CustomToastStyles.css';

const CustomToast = ({ message, type }) => {
  return (
    <div className={`custom-toast ${type}`}>
      {message}
    </div>
  );
};

export default CustomToast;
