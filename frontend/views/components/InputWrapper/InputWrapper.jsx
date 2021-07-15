import './InputWrapper.scss'
import React from 'react'

const InputWrapper = ({children, className, error, id}) => {
  return (
    <div 
      className={`input-wrapper ${className} ${error ? 'input-wrapper-error' : ''}`}
      onClick={ () => document.getElementById(id).focus() }
    >
      { children }
    </div>
  )
}

export default InputWrapper;