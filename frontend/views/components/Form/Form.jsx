import React from 'react';
import { useForm } from "react-hook-form";

const Form = ({onSubmit, customSubmitButton, registerSetError, render}) => {
  const { register, handleSubmit, watch, setError, formState: { errors } } = useForm();
  const registerFormDefinition = (def) => register(def.id, def.validation);

  if (registerSetError) {
    registerSetError(setError);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      { render({register: registerFormDefinition, errors}) }
      { !customSubmitButton ? <input type="submit" /> : null }
    </form>
  )
}

export default Form;