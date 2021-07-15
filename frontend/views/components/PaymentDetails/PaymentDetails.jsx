import './PaymentDetails.scss'
import React from 'react'
import FormDefinition from 'Definitions/FormDefinition';
import Input from 'Components/Input/Input'
import withFormDefinition from 'Components/Form/withFormDefinition';

const FormInput = withFormDefinition(Input);

const PaymentDetails = ({defProps}) => {
  return (
    <>
      <div className="payment-details__header">
        <img src={require('public/images/two.svg')}/>
        <span>PAYMENTS DETAILS</span>
        <img src={require('public/images/lock.svg')}/>
      </div>
      <div className="payment-details__inputs">
        <FormInput 
          {...defProps} 
          definition={FormDefinition.card} 
          className="payment-details__card" 
          label="Credit Card Number" 
          placeholder="0000-0000-0000-0000"
          type="text" 
          format="####-####-####-####" 
          mask="_" 
          withFormat={true} 
          customImg={require('public/images/visa.svg')}
        />
        <FormInput 
          {...defProps} 
          definition={FormDefinition.securityCode} 
          className="payment-details__security-code" 
          label="Security code" 
          placeholder="***" 
          type="password" 
          maxLength="3" 
          customImg={require('public/images/questionmark.svg')} 
          imgTootltip="CVV Code is a three-digit number on the back of your card."
        />
        <FormInput 
          {...defProps} 
          definition={FormDefinition.expDate} 
          className="payment-details__exp-date" 
          label="Expiration date" 
          placeholder="MM/YY" 
          type="text" 
          format="##/##" 
          mask={['M', 'M', 'Y', 'Y'] } 
          withFormat={true}
        />
      </div>
    </>
  )
}


export default PaymentDetails