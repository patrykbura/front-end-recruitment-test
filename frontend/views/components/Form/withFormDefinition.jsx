import React from 'react';

const withFormDefinition = (WrappedComponent) => {
  return (props) => {
    const {definition, register, errors, ...restProps} = props;

    return (
      <WrappedComponent
        {...register(definition)} 
        {...restProps}
        error={errors[definition.id]}
      />
    )
  }
}

export default withFormDefinition;