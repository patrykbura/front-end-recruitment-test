import './Input.scss'
import React from 'react'
import InputWrapper from 'Components/InputWrapper/InputWrapper';
import NumberFormat from 'react-number-format';

const Input = React.forwardRef((props, ref) => {
  const {error, label, className, withFormat, customImg, imgTootltip, ...restProps} = props;
  const inputProps = Object.assign(restProps, { ref, id: props.name });

  return (
    <InputWrapper className={className} error={error} id={props.name}>
      { customImg && <img src={customImg} title={imgTootltip}/> }
      <label htmlFor={props.name}>{ label }</label>
      { withFormat ? <NumberFormat {...inputProps}/> : <input {...inputProps}/>}
    </InputWrapper>
  )
});

export default Input;