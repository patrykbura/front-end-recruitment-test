import React from 'react';

const ErrorMessage = ({errors}) => {
  // console.log(Object.keys(obj).length !== 0)
  if (Object.keys(errors).length !== 0) {
    return (
      <div className="error-message">
        <span>There was a problem with your purchase. See below:</span>
        <ul>
        {Object.values(errors).map((error, idx) => <li key={idx}>{error.message}</li>)}
        </ul>
      </div>
    )
  }
  
  return null
}

export default ErrorMessage;