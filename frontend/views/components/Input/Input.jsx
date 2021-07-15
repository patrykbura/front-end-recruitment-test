import './Input.scss'
import React from 'react'
import NumberFormat from 'react-number-format';

const Input = React.forwardRef((props, ref) => {
  const {error, label, className, withFormat, ...restProps} = props;
  const inputProps = Object.assign(restProps, { ref, id: props.name });

  return (
    <div 
      className={`input-wrapper ${className} ${error ? 'input-wrapper-error' : ''}`}
      // style={{backgroundColor: error ? 'red' : ''}}
      onClick={ () => document.getElementById(props.name).focus() }
    >
      <label htmlFor={props.name}>{ label }</label>
      { withFormat ? <NumberFormat {...inputProps} onValueChange={(a,b,c) => console.log(a,b,c)}/> : <input {...inputProps}/>}
    </div>
  )
});

export default Input;