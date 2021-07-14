import '../css/app.css'
import 'regenerator-runtime/runtime.js';
import React from 'react';
import ReactDOM from 'react-dom';
import Order from 'Containers/Order/Order';

const orderSummaryElement = document.getElementById('order');

if (orderSummaryElement) {
  // TODO it would be better to pass this script only for root url but that
  // requires changes is backend
  ReactDOM.render(
    <React.StrictMode>
      <Order/>
    </React.StrictMode>,
    orderSummaryElement
  );
}