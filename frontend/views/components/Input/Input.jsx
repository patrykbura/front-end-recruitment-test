import './Input.scss'
import React from 'react'

function Input({className, label, placeholder}) {

  return (
    <div 
      className={ `input-wrapper ${className}`}
      onClick={ () => document.getElementById('fname').focus() }
    >
      <label htmlFor="fname" >{ label }</label>
      <input type="text" id="fname" name="firstname" placeholder={ placeholder }></input>
      {/* <label>Input here:
        <input type='text' name='theinput' id='theinput'/>
      </label> */}
    </div>
  )
}

export default Input