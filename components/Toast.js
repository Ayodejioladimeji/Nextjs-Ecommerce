import React from 'react';

const Toast = () => {
  return (
    <div class='toast show'>
      <div class='toast-header'>
        <strong class='me-auto'>Toast Header</strong>
        <button
          type='button'
          class='btn-close'
          data-bs-dismiss='toast'
        ></button>
      </div>
      <div class='toast-body'>
        <p>Some text inside the toast body</p>
      </div>
    </div>
  );
};

export default Toast;
