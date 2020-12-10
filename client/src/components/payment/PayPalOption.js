import React, { Component } from 'react';
import { PayPalButton } from 'react-paypal-button-v2';

export default class PayPalOption extends Component {
  render() {
    return (
      <div>
        <PayPalButton />
      </div>
    );
  }
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
