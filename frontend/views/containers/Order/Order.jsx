import './Order.scss'
import React from 'react'
import Input from 'Components/Input/Input'
import Form from 'Components/Form/Form';
import Communication from 'Utils/Communication';
import ErrorMessage from 'Components/ErrorMessage/ErrorMessage';
import FormDefinition from './FormDefinition';
import withFormDefinition from 'Components/Form/withFormDefinition';

const FormInput = withFormDefinition(Input)

const Order = () => {
  const onSubmit = (data) => {
    console.log(data);
    Communication.post({
      path: '/order',
      data: {
        firstName: 'Jane'
      }
    })
  }

  return (
    <div>
      <Form 
        onSubmit={onSubmit}
        customSubmitButton={true}
        render={(defProps) => {
          return (
            <div className="todo">
              <div className="order-wrapper">
                <div className="order__personal-information--header">
                  PERSONAL INFORMATION
                </div>
                <div className="order__personal-information--inputs">
                  <FormInput {...defProps} definition={FormDefinition.firstName} className="order__personal-information-first-name" label="First name" placeholder="Elon" type="text"/>
                  <FormInput {...defProps} definition={FormDefinition.lastName} className="order__personal-information-last-name" label="Last name" placeholder="Musk" type="text"/>
                  <FormInput {...defProps} definition={FormDefinition.email} className="order__personal-information-email" label="Email" placeholder="elon@spacex.com" type="text"/>
                  <FormInput {...defProps} definition={FormDefinition.country} className="order__personal-information-country" label="Country" placeholder="United Stated" type="text"/>
                  <FormInput {...defProps} definition={FormDefinition.postalCode} className="order__personal-information-postal-code" label="Postal Code" placeholder="10001" type="text"/>
                  <FormInput {...defProps} definition={FormDefinition.phone} className="order__personal-information-phone" label="Phone Number" placeholder="(212) 629-93-92" type="text"/>
                </div>
                <div className="order__summary">
                  <p className="order__summary-header">YOUR ORDER</p>
                  <div className="order__summary-item">
                    <span>Apple Watch Sport</span>
                    <span>$ 580</span>
                  </div>
                  <div className="order__summary-item">
                    <span>Modern Buckler</span>
                    <span>$ 380</span>
                  </div>
                  <div className="order__summary-purchase">
                    <span>Total purchase</span>
                    <span>$ 960</span>
                  </div>
                  <div className="order__summary-tax">
                    <span>Estimated tax</span>
                    <span>$ 0</span>
                  </div>
                  <div className="order__summary-total">
                    <span>Total</span>
                    <span>$ 960</span>
                  </div>
                </div>
                <div className="order__payment--header">
                  PAYMENT DETAILS
                </div>
                <div className="order__payment--inputs">
                  <FormInput {...defProps} definition={FormDefinition.card} className="order__personal-information-card" label="Credit Card Number" placeholder="0000-0000-0000-0000"  type="text"/>
                  <FormInput {...defProps} definition={FormDefinition.securityCode} className="order__personal-information-security-code" label="Security code" placeholder="***"  type="text"/>
                  <FormInput {...defProps} definition={FormDefinition.expDate} className="order__personal-information-exp-date" label="Expiration date" placeholder="MM / YY"  type="text"/>
                </div>
                <button type="submit">COMPLETE PURCHASE</button>
              </div>
              <ErrorMessage errors={defProps.errors}/>
            </div>
          )
        }}
      />
    </div>
  )
}

export default Order