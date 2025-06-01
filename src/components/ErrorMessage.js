import React from 'react';
import '../styles/ErrorMessage.css';

const ErrorMessage = () => {
  return (
    <div class="error-container">
      <img class="error-image" src="/error.jpg" alt="error image" />
      <h1 class="error-text">There is an unknown connection issue: the web page cannot be displayed. Please try again in a few minutes.</h1>
    </div>
  )
}

export default ErrorMessage;
