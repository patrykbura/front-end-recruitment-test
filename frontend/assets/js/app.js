import '../css/app.css'
import 'regenerator-runtime/runtime.js';
import React from 'react';
import ReactDOM from 'react-dom';
import Order from 'Containers/Order/Order';

const orderSummaryElement = document.getElementById('order');

if (orderSummaryElement) {
  ReactDOM.render(
    <React.StrictMode>
      <Order/>
    </React.StrictMode>,
    orderSummaryElement
  );
}