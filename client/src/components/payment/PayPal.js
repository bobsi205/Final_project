import React, { Component } from 'react';
import { PayPalButton } from 'react-paypal-button-v2';

export default function paypal(props) {
  console.log(this.props);
  return (
    <div>
      <PayPalButton
        style={{
          layout: 'vertical',
          color: 'silver',
          shape: 'pill',
          label: 'paypal'
        }}
        createOrder={(data, actions) => {
          return actions.order.create({
            
            purchase_units: [
              {
                amount: {
                  currency_code: 'ILU',
                  value: {'0.01'},
                },
              },
            ],
            // application_context: {
            //   shipping_preference: "NO_SHIPPING" // default is "GET_FROM_FILE"
            // }
          });
        }}
        onApprove={(data, actions) => {
          // Capture the funds from the transaction
          return actions.order.capture().then(function (details) {
            // Show a success message to your buyer
            alert('Transaction completed by ' + details.payer.name.given_name);

            // OPTIONAL: Call your server to save the transaction
            return fetch('/paypal-transaction-complete', {
              method: 'post',
              body: JSON.stringify({
                orderID: data.orderID,
              }),
            });
          });
        }}
      />
    </div>
  );
}

// amount="0.01"
// // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
// onSuccess={(details, data) => {
//     alert("Transaction completed by " + details.payer.name.given_name);

//     // OPTIONAL: Call your server to save the transaction
//     return fetch("/paypal-transaction-complete", {
//         method: "post",
//         body: JSON.stringify({
//             orderId: data.orderID
//         })
//     });
// }}
// options={{
//     clientId: "PRODUCTION_CLIENT_ID"
// }}
