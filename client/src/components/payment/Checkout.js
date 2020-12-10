import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import PayPal from './PayPal';

export default function Checkout() {
  const [checkout, setCheckout] = useState(false);
  const [amount, setAmount] = useState(5);

  const onHandleChange = (e) => {
    setAmount(e.target.value);
    console.log(amount);
  };

  return (
    <Container className="text-center p-2">
      <p className="display-3">Add coins to your wallet</p>
      <input
        value={amount}
        placeholder="How many coins would you like to purchase"
        onChange={(e) => onHandleChange(e)}
        type="range"
        className="form-control-range"
        min="5"
        max="100"
      ></input>
      {checkout ? (
        <PayPal amount={amount} />
      ) : (
        <Button
          onClick={() => {
            setCheckout(true);
          }}
        >
          Checkout-{amount}$
        </Button>
      )}
    </Container>
  );
}
