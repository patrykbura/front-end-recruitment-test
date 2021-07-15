import React from 'react'
import Countries from 'Mocks/Countries';
import FormDefinition from 'Definitions/FormDefinition';
import Select from 'Components/Select/Select'
import Input from 'Components/Input/Input'
import withFormDefinition from 'Components/Form/withFormDefinition';

const FormInput = withFormDefinition(Input)
const FormSelect = withFormDefinition(Select);

const PersonalInformation = ({defProps}) => {
  return (
    <>
      <div className="order__personal-information--header">
        <img src={require('../../../public/images/one.svg')}/>
        <span>PERSONAL INFORMATION</span>
      </div>
      <div className="order__personal-information--inputs">
        <FormInput 
          {...defProps} 
          definition={FormDefinition.firstName} 
          className="order__personal-information-first-name" 
          label="First name" 
          placeholder="Your name" 
          type="text"
        />
        <FormInput 
          {...defProps} 
          definition={FormDefinition.lastName} 
          className="order__personal-information-last-name" 
          label="Last name" placeholder="Your last name" 
          type="text"
        />
        <FormInput 
          {...defProps} 
          definition={FormDefinition.email} 
          className="order__personal-information-email" 
          label="Email" 
          placeholder="Your email" 
          type="text"
        />
        <FormSelect 
          {...defProps} 
          definition={FormDefinition.country} 
          className="order__personal-information-country" 
          label="Country" 
          placeholder="Select country" 
          options={Countries}
        /> 
        <FormInput 
          {...defProps} 
          definition={FormDefinition.postalCode} 
          className="order__personal-information-postal-code" 
          label="Postal Code" 
          placeholder="00000"
          type="text" 
          format="#####" 
          withFormat={true}
        />
        <FormInput 
          {...defProps} 
          definition={FormDefinition.phone} 
          className="order__personal-information-phone" 
          label="Phone Number" 
          placeholder="(000) 000-00-00" 
          type="text" 
          format="(###) ###-##-##" 
          mask="_" 
          withFormat={true}
        />
      </div>
    </>
  )
}


export default PersonalInformation