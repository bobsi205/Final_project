import React, { useState } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
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
          </Card.Title>
        </Card.Header>
        <Card.Body>
          <div className="d-flex justify-content-center m-2 px-auto w-auto">
            <input
              value={amount}
              onChange={(e) => onHandleChange(e)}
              type="range"
              className="form-control-range m-2"
              min="5"
              max="100"
              step="5"
            ></input>
            <Button className="m-2 rounded-pill">{amount}$</Button>
            <Card.Title className="m-2 rounded-pill">
              {amount * 5} point
            </Card.Title>
          </div>
        </Card.Body>
        <Card.Footer>
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
        </Card.Footer>
      </Card>
    </Container>
  );
}
