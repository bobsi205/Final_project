import React, { Component } from 'react';
import { PayPalButton } from 'react-paypal-button-v2';
import { setAlert } from '../../actions/alert';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import api from '../../utils/api';

export const PayPal = (props) => {
  const payment_value = props.amount + '.00';
  console.log(payment_value);
  return (
    <div>
      <PayPalButton
        style={{
          layout: 'vertical',
          color: 'silver',
          shape: 'pill',
          label: 'paypal',
        }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  currency_code: 'USD',
                  value: payment_value,
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
          return actions.order.capture().then(async function (details) {
            // Show a success message to your buyer
            // alert('Transaction completed by ' + details.payer.name.given_name);

            console.log(details.purchase_units[0].amount.value);
            let data = { coins: details.purchase_units[0].amount.value * 5 };
            try {
              let res = await api.put('/users/balance', data);
              props.setAlert(
                'Transaction completed by' + details.payer.name.given_name,
                'success'
              );
            } catch (error) {
              props.setAlert('Transaction was not successful', 'danger');
            }
            <Redirect push to="/" />;

            // OPTIONAL: Call your server to save the transaction
            // return fetch('/paypal-transaction-complete', {
            //   method: 'post',
            //   body: JSON.stringify({
            //     orderID: data.orderID,
            //   }),
            // });
          });
        }}
        onError={(err) => {
          console.log(err);
        }}
      />
    </div>
  );
};

PayPal.propTypes = {
  setAlert: PropTypes.func.isRequired,
};

export default connect(null, { setAlert })(PayPal);
