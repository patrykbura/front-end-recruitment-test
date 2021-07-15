import './Order.scss'
import React, { useRef } from 'react'
import Input from 'Components/Input/Input'
import Select from 'Components/Select/Select'
import Form from 'Components/Form/Form';
import Communication from 'Utils/Communication';
import ErrorMessage from 'Components/ErrorMessage/ErrorMessage';
import FormDefinition from './FormDefinition';
import withFormDefinition from 'Components/Form/withFormDefinition';
import { getDigitsOnly } from 'Utils/Parsers';
import { useForm } from "react-hook-form";


const FormInput = withFormDefinition(Input)

const onSubmit = async (data, setError) => {
  console.log(data);

  const result = await Communication.post({
    path: '/order',
    body: Object.assign({}, data, {
      phone: getDigitsOnly(data.phone),
      creditCard: getDigitsOnly(data.creditCard)
    })
  })

  if (result.success) {
    //TODO - UI
    console.log('SUCCESS')
  } else {
    //TODO - UI
    

    result.response?.errors.forEach(err => {
      setError(err.field, {
        type: "manual",
        message: err.message
      })
    })
  }

  console.log('done', result)
}

const Order = ({data}) => {
  const externalSetError = useRef();
  console.log(data)

  return (
    <div>
      <Form 
        onSubmit={(data) => onSubmit(data, externalSetError.current)}
        customSubmitButton={true}
        registerSetError={(setError) => externalSetError.current = setError }
        render={(defProps) => {
          return (
            <div className="todo">
              <div className="order-wrapper">
                <div className="order__personal-information--header">
                  PERSONAL INFORMATION
                </div>
                <div className="order__personal-information--inputs">
                  <FormInput {...defProps} definition={FormDefinition.firstName} className="order__personal-information-first-name" label="First name" placeholder="Your name" type="text"/>
                  <FormInput {...defProps} definition={FormDefinition.lastName} className="order__personal-information-last-name" label="Last name" placeholder="Your last name" type="text"/>
                  <FormInput {...defProps} definition={FormDefinition.email} className="order__personal-information-email" label="Email" placeholder="Your email" type="text"/>
                  {/* <FormInput {...defProps} definition={FormDefinition.country} className="order__personal-information-country" label="Country" placeholder="Select country" type="text"/> */}
                  <Select className="order__personal-information-country" label="Country"/>
                  <FormInput {...defProps} definition={FormDefinition.postalCode} className="order__personal-information-postal-code" label="Postal Code" placeholder="00000" type="text" format="#####" withFormat={true}/>
                  <FormInput {...defProps} definition={FormDefinition.phone} className="order__personal-information-phone" label="Phone Number" placeholder="(000) 000-00-00" type="text" format="(###) ###-##-##" mask="_" withFormat={true}/>
                </div>
                <div className="order__summary">
                  <p className="order__summary-header">YOUR ORDER</p>
                  <div className="order__summary-items">
                    <div className="order__summary-item">
                      <span>{data.items[0].name}</span>
                      <span>$ {data.items[0].price}</span>
                    </div>
                    <div className="order__summary-item">
                      <span>Modern Buckler</span>
                      <span>$ 380</span>
                    </div>
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
                  <span>PAYMENTS DETAILS</span>
                  <img src={require('../../../public/images/lock.svg')}/>
                </div>
                <div className="order__payment--inputs">
                  <FormInput {...defProps} definition={FormDefinition.card} className="order__personal-information-card" label="Credit Card Number" placeholder="0000-0000-0000-0000" type="text" format="####-####-####-####" mask="_" withFormat={true}/>
                  <FormInput {...defProps} definition={FormDefinition.securityCode} className="order__personal-information-security-code" label="Security code" placeholder="***" type="password" maxLength="3"/>
                  <FormInput {...defProps} definition={FormDefinition.expDate} className="order__personal-information-exp-date" label="Expiration date" placeholder="MM/YY" type="text" format="##/##" mask={['M', 'M', 'Y', 'Y'] } withFormat={true}/>
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