import './Input.scss'
import React from 'react'

const Input = React.forwardRef((props, ref) => {
  const {error, label, className, ...restProps} = props;

  return (
    <div 
      className={`input-wrapper ${className}`} 
      style={{backgroundColor: error ? 'red' : ''}}
      onClick={ () => document.getElementById(props.name).focus() }
    >
      <label htmlFor={props.name}>{ label }</label>
      <input id={props.name} {...restProps} ref={ref} />
      {/* <NumberFormat {...restProps} ref={ref} id={props.name} format="####-####-####-####" placeholder="0000-0000-0000-0000" mask="_"/> */}
    </div>
  )
});

export default Input;