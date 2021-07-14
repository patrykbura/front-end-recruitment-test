import React from 'react';

const ErrorMessage = ({errors}) => {
  return (
    <div className="error-message">
      {Object.values(errors).map((error, idx) => <p key={idx}>{error.message}</p>)}
    </div>
  )
}

export default ErrorMessage;