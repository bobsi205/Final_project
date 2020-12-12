import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import Paypal from './Paypal';

export default function Checkout() {
  const [checkout, setCheckout] = useState(false);
  const [amount, setAmount] = useState(5);

  const onHandleChange = (e) => {
    setAmount(e.target.value);
    console.log(checkout);
  };

  return (
    <Container className="text-center p-2 bg-light">
      <p className="display-3">Add coins to your wallet</p>
      <div className="d-flex justify-content-center" style={{ width: '50%' }}>
        <input
          value={amount}
          placeholder="How many coins would you like to purchase"
          onChange={(e) => onHandleChange(e)}
          type="range"
          className="form-control-range"
          min="5"
          max="100"
        ></input>
        <Button className="m-2 rounded-circle">{amount}$</Button>
      </div>

      <Button
        className="m-2"
        onClick={() => {
          setCheckout(true);
        }}
      >
        Checkout
      </Button>

      {checkout ? (
        <div className="invisible">
          <Paypal amount={amount} />
        </div>
      ) : (
        ''
      )}
    </Container>
  );
}
