import React from 'react';
import { Accordion, Card, Container, Image } from 'react-bootstrap';
import arrow from './images/arrow-down-sign-to-navigate.svg';
export default function Faq() {
  const faqDB = [
    {
      id: 1,
      Q: 'What should be included in a FAQ page?',
      A:
        'FAQ pages include a series of questions that are commonly asked by customers. They cover a variety of topics including product or service usage, business hours, prices, and more. FAQ pages are important because they save time for both customers and employees.',
    },
    {
      id: 2,
      Q: 'What should be included in a FAQ page?',
      A:
        'FAQ pages include a series of questions that are commonly asked by customers. They cover a variety of topics including product or service usage, business hours, prices, and more. FAQ pages are important because they save time for both customers and employees.',
    },
    {
      id: 3,
      Q: 'What should be included in a FAQ page?',
      A:
        'FAQ pages include a series of questions that are commonly asked by customers. They cover a variety of topics including product or service usage, business hours, prices, and more. FAQ pages are important because they save time for both customers and employees.',
    },
    {
      id: 4,
      Q: 'What should be included in a FAQ page?',
      A:
        'FAQ pages include a series of questions that are commonly asked by customers. They cover a variety of topics including product or service usage, business hours, prices, and more. FAQ pages are important because they save time for both customers and employees.',
    },
    {
      id: 5,
      Q: 'What should be included in a FAQ page?',
      A:
        'FAQ pages include a series of questions that are commonly asked by customers. They cover a variety of topics including product or service usage, business hours, prices, and more. FAQ pages are important because they save time for both customers and employees.',
    },
    {
      id: 6,
      Q: 'What should be included in a FAQ page?',
      A:
        'FAQ pages include a series of questions that are commonly asked by customers. They cover a variety of topics including product or service usage, business hours, prices, and more. FAQ pages are important because they save time for both customers and employees.',
    },
  ];
  return (
    <Container>
      <h1 className="display-4 text-primary text-center">FAQ</h1>
      <Accordion defaultActiveKey="0">
        {faqDB.map((item) => (
          <div>
            <Accordion.Toggle
              className="d-flex"
              as={Card.Header}
              eventkey={item.id}
            >
              {item.Q}

              <Image className="ml-auto" src={arrow} width="28" height="28" />
            </Accordion.Toggle>

            <Accordion.Collapse eventkey={item.id}>
              <Card.Body>{item.A}</Card.Body>
            </Accordion.Collapse>
          </div>
        ))}
      </Accordion>
    </Container>
  );
}
