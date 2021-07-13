import './Order.scss'
import React from 'react'
import Input from 'Components/Input/Input'

function Order() {
  return (
    <div className="order-wrapper">
      <div className="order__personal-information--header">
        PERSONAL INFORMATION
      </div>
      <div className="order__personal-information--inputs">
        <Input className="order__personal-information-first-name" label="First name" placeholder="Elon"/>
        <Input className="order__personal-information-last-name" label="Last name" placeholder="Musk"/>
        <Input className="order__personal-information-email" label="Email" placeholder="elon@spacex.com"/>
        <Input className="order__personal-information-country" label="Country" placeholder="United Stated"/>
        <Input className="order__personal-information-postal-code" label="Postal Code" placeholder="10001"/>
        <Input className="order__personal-information-phone" label="Phone Number" placeholder="(212) 629-93-92"/>
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
        <Input className="order__personal-information-card" label="Credit Card Number" placeholder="0000-0000-0000-0000"/>
        <Input className="order__personal-information-security-code" label="Security code" placeholder="***"/>
        <Input className="order__personal-information-exp-date" label="Expiration date" placeholder="MM / YY"/>
      </div>
      <button>COMPLETE PURCHASE</button>
    </div>
    
  )
}

export default Order