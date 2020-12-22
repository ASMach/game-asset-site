import React from 'react';

import {Container, Form, Button, Accordion, Card} from 'react-bootstrap';

export default function Games (props) {
    return (
        <div className="App-body">
            <div className="about">
                <Container>
                <Accordion>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        Open Support Query
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
      <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Question</Form.Label>
                    <Form.Control as="textarea" rows={6} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Send
                    </Button>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  </Accordion>
  <br />
  <h3>FAQ</h3>
    A list will go here
                </Container>
            </div>
        </div>
    );
}