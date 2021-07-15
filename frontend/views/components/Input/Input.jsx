import './Input.scss'
import React from 'react'
import NumberFormat from 'react-number-format';

const Input = React.forwardRef((props, ref) => {
  const {error, label, className, withFormat, customImg, imgTootltip, ...restProps} = props;
  const inputProps = Object.assign(restProps, { ref, id: props.name });

  return (
    <div 
      className={`input-wrapper ${className} ${error ? 'input-wrapper-error' : ''}`}
      onClick={ () => document.getElementById(props.name).focus() }
    >
      { customImg && <img src={customImg} title={imgTootltip}/> }
      <label htmlFor={props.name}>{ label }</label>
      { withFormat ? <NumberFormat {...inputProps}/> : <input {...inputProps}/>}
    </div>
  )
});

export default Input;