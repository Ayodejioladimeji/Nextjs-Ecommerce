import React from 'react';
import { FaTimes } from 'react-icons/fa';

const Toast = ({ bgColor, handleShow, msg }) => {
  return (
    <div className={`toast show ${bgColor}`}>
      <div className='toast-body'>{msg.msg}</div>
      <FaTimes className='cancel' onClick={handleShow} />
    </div>
  );
};

export default Toast;
