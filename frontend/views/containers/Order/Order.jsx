import './Order.scss'
import 'react-notifications/lib/notifications.css';
import React, { useRef } from 'react'
import Form from 'Components/Form/Form';
import PersonalInformation from 'Components/PersonalInformation/PersonalInformation';
import PaymentDetails from 'Components/PaymentDetails/PaymentDetails';
import OrderSummary from 'Components/OrderSummary/OrderSummary';
import Communication from 'Utils/Communication';
import ErrorMessage from 'Components/ErrorMessage/ErrorMessage';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import { getDigitsOnly } from 'Utils/Parsers';

const onSubmit = async (data, setError) => {
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
            <div>
              <div className="order-wrapper">
                <PersonalInformation defProps={defProps} />
                <OrderSummary order={order}/>
                <PaymentDetails defProps={defProps}/>
                <button type="submit"> 
                  <div className="button-items">
                    <img src={require('public/images/cart.svg')}/>
                    <span>COMPLETE PURCHASE</span>
                  </div>
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