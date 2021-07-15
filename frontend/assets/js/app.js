import '../css/app.css'
import 'regenerator-runtime/runtime.js';
import React from 'react';
import ReactDOM from 'react-dom';
import Order from 'Containers/Order/Order';
import AdonisReactStateProvider from 'CustomElements/AdonisReactStateProvider';

const orderSummaryElement = document.getElementById('order');

if (orderSummaryElement) {
  const state = document.getElementsByTagName('adonis-react-state-provider')[0].getState();


  ReactDOM.render(
    <React.StrictMode>
      <Order data={state}/>
    </React.StrictMode>,
    orderSummaryElement
  );
}