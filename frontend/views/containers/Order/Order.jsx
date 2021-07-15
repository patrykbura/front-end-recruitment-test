import './Order.scss'
import 'react-notifications/lib/notifications.css';
import React, { useRef } from 'react'
import Input from 'Components/Input/Input'
import Select from 'Components/Select/Select'
import Form from 'Components/Form/Form';
import OrderSummary from 'Components/OrderSummary/OrderSummary';
import Communication from 'Utils/Communication';
import ErrorMessage from 'Components/ErrorMessage/ErrorMessage';
import FormDefinition from './FormDefinition';
import withFormDefinition from 'Components/Form/withFormDefinition';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import { getDigitsOnly } from 'Utils/Parsers';
import { useForm } from "react-hook-form";


window.doit = () => NotificationManager.success('Purchase completed', 'Success!');

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
    NotificationManager.success('Purchase completed.', 'Success!');
  } else {
    NotificationManager.warning('Purchase failed! Try again.')
    result.response?.errors.forEach(err => {
      setError(err.field, {
        type: "manual",
        message: err.message
      })
    })
  }
}

const Order = ({order}) => {
  const externalSetError = useRef();

  return (
    <div>
      <NotificationContainer/>
      <Form 
        onSubmit={(data) => onSubmit(data, externalSetError.current)}
        customSubmitButton={true}
        registerSetError={(setError) => externalSetError.current = setError }
        render={(defProps) => {
          return (
            <div className="todo">
              <div className="order-wrapper">
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
                  {/* <FormInput {...defProps} definition={FormDefinition.country} className="order__personal-information-country" label="Country" placeholder="Select country" type="text"/> */}
                  <Select 
                    className="order__personal-information-country" 
                    label="Country"
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
                <OrderSummary order={order}/>
                <div className="order__payment--header">
                  <img src={require('../../../public/images/two.svg')}/>
                  <span>PAYMENTS DETAILS</span>
                  <img src={require('../../../public/images/lock.svg')}/>
                </div>
                <div className="order__payment--inputs">
                  <FormInput 
                    {...defProps} 
                    definition={FormDefinition.card} 
                    className="order__personal-information-card" 
                    label="Credit Card Number" 
                    placeholder="0000-0000-0000-0000"
                    type="text" 
                    format="####-####-####-####" 
                    mask="_" 
                    withFormat={true} 
                    customImg={require('../../../public/images/visa.svg')}
                  />
                  <FormInput 
                    {...defProps} 
                    definition={FormDefinition.securityCode} 
                    className="order__personal-information-security-code" 
                    label="Security code" placeholder="***" 
                    type="password" maxLength="3" 
                    customImg={require('../../../public/images/questionmark.svg')} 
                    imgTootltip="CVV Code is a three-digit number on the back of your card."
                  />
                  <FormInput 
                    {...defProps} 
                    definition={FormDefinition.expDate} 
                    className="order__personal-information-exp-date" 
                    label="Expiration date" 
                    placeholder="MM/YY" 
                    type="text" 
                    format="##/##" 
                    mask={['M', 'M', 'Y', 'Y'] } 
                    withFormat={true}
                  />
                </div>
                <button type="submit">
                  COMPLETE PURCHASE
                </button>
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