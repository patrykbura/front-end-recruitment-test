import './Select.scss'
import InputWrapper from 'Components/InputWrapper/InputWrapper';
import React from 'react'

const Select = React.forwardRef((props, ref) => {
  const {error, label, className, placeholder, options, ...restProps} = props;
  
  return (
    <InputWrapper className={className} error={error} id={props.name}>
      <label htmlFor={props.name}>{ label }</label>
      <select id={props.name} ref={ref} {...restProps}>
        <option value="" defaultValue>{placeholder}</option>
        {options.map(option => <option value={option} key={option}>{option}</option>)}
      </select>
    </InputWrapper>
  )
})

export default Select;