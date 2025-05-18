import React from 'react';
import './Button.css'; 

function Button() {
  return (
   <div>
   <button className='reg-button' onClick={() => window.location.href = '/register'}>Register Now</button>
   </div>
  );
};

export default Button;
