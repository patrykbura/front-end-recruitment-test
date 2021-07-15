import React from 'react';
import './ErrorMessage.scss'

const ErrorMessage = ({errors}) => {
  if (Object.keys(errors).length !== 0) {
    return (
      <div className="error-message">
        <span>There was a problem with your purchase. Please see below:</span>
        <ul>
          {Object.values(errors).map((error, idx) => <li key={idx}>{error.message}</li>)}
        </ul>
      </div>
    )
  }
  
  return null
}

export default ErrorMessage;