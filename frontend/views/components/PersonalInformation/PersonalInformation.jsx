import './PersonalInformation.scss'
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
      <div className="personal-information__header">
        <img src={require('../../../public/images/one.svg')}/>
        <span>PERSONAL INFORMATION</span>
      </div>
      <div className="personal-information__inputs">
        <FormInput 
          {...defProps} 
          definition={FormDefinition.firstName} 
          className="personal-information__first-name" 
          label="First name" 
          placeholder="Your name" 
          type="text"
        />
        <FormInput 
          {...defProps} 
          definition={FormDefinition.lastName} 
          className="personal-information__last-name" 
          label="Last name" placeholder="Your last name" 
          type="text"
        />
        <FormInput 
          {...defProps} 
          definition={FormDefinition.email} 
          className="personal-information__email" 
          label="Email" 
          placeholder="Your email" 
          type="text"
        />
        <FormSelect 
          {...defProps} 
          definition={FormDefinition.country} 
          className="personal-information__country" 
          label="Country" 
          placeholder="Select country" 
          options={Countries}
        /> 
        <FormInput 
          {...defProps} 
          definition={FormDefinition.postalCode} 
          className="personal-information__postal-code" 
          label="Postal Code" 
          placeholder="00000"
          type="text" 
          format="#####" 
          withFormat={true}
        />
        <FormInput 
          {...defProps} 
          definition={FormDefinition.phone} 
          className="personal-information__phone" 
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