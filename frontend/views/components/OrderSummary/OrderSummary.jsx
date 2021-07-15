import './OrderSummary.scss'
import React from 'react'

const OrderSummary = ({order}) => {
  if (!order) {
    return null;
  }

  return (
    <div className="order-summary-wrapper">
      <div className="order-summary">
        <p className="order-summary__header">YOUR ORDER</p>
        <div className="order-summary__items">
        {order.items?.map((item, idx) => (
          <div key={idx} className="order-summary__item">
            <span>{item.name}</span>
            <span>$ {item.price}</span>
          </div>
        ))}
        </div>
        <div className="order-summary__purchase">
          <span>Total purchase</span>
          <span>$ {order.totals?.subTotal}</span>
        </div>
        <div className="order-summary__tax">
          <span>Estimated tax</span>
          <span>$ {order.totals?.tax}</span>
        </div>
        <div className="order-summary__total">
          <span>Total</span>
          <span>$ {order.totals?.grandTotal}</span>
        </div>
      </div>
    </div>
  )
}

export default OrderSummary;