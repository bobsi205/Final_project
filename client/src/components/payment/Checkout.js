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
    <Container className="text-center p-2 bg-light">
      <Card>
        <Card.Header>
          <p className="display-3">Your wallet</p>
          <Card.Title>
            <p className="">How many coins would tou like to purchase? </p>
            <p className="">5$ = 25 points</p>

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
          <PayPal amount={amount} />
        </div>
      ) : (
        ''
      )}
    </Container>
  );
}
