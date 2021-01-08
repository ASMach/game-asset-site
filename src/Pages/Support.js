import React, { Component } from "react";
import axios from "axios";

import { ReCaptcha } from "react-recaptcha-google";

import { Container, Form, Button, Accordion, Card } from "react-bootstrap";

export default class Support extends Component {
  constructor(props, context) {
    super(props, context);
    this.validMail = this.validMail.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onMessageChange = this.onMessageChange.bind(this);
    this.onLoadRecaptcha = this.onLoadRecaptcha.bind(this);
    this.verifyCallback = this.verifyCallback.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }

  validMail() {
    const email = this.props.email;
    const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
  }

  componentDidMount() {
    if (this.captcha) {
      console.log("started, just a second...");
      this.captcha.reset();
      this.captcha.execute();
    }
  }

  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();

    if (this.state.name == "") {
      alert("No name specified, please enter one");
      return;
    }
    if (!this.validMail()) {
      alert("Invalid email, please re-enter and resend");
      return;
    }
    if (this.state.message == "") {
      alert("No question found, please ask one");
      return;
    }

    // Actually send the form
    axios({
      method: "POST",
      url: "/send",
      data: this.state,
    }).then((response) => {
      if (response.data.status === "success") {
        alert("Message Sent.");
        this.resetForm();
      } else if (response.data.status === "fail") {
        alert("Message failed to send.");
      }
    });
  }

  onLoadRecaptcha() {
    if (this.captcha) {
      this.captcha.reset();
      this.captcha.execute();
    }
  }

  verifyCallback(recaptchaToken) {
    // Here you will get the final recaptchaToken!!!
    console.log(recaptchaToken, "<= your recaptcha token");
  }

  resetForm() {
    this.setState({ name: "", email: "", message: "" });
  }

  render() {
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
                    <form onSubmit={this.onSubmit} method="POST">
                      <Form.Group controlId="userName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                          type="name"
                          placeholder="Enter name"
                          onChange={this.onNameChange}
                          value={this.state.name}
                        />
                        <Form.Text className="text-muted">
                          We'll never share your name with anyone else.
                        </Form.Text>
                      </Form.Group>
                      <Form.Group controlId="email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter email"
                          onChange={this.onEmailChange}
                          value={this.state.email}
                        />
                        <Form.Text className="text-muted">
                          We'll never share your email with anyone else.
                        </Form.Text>
                      </Form.Group>
                      <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Question</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={6}
                          onChange={this.onMessageChange}
                          defaultValue=""
                          value={this.state.message}
                        />
                      </Form.Group>
                      <ReCaptcha
                        ref={(el) => {
                          this.captcha = el;
                        }}
                        size="normal"
                        data-theme="dark"
                        render="explicit"
                        sitekey={process.env.KEY}
                        onloadCallback={this.onLoadRecaptcha}
                        verifyCallback={this.verifyCallback}
                      />
                      <Button variant="primary" type="submit">
                        Send
                      </Button>
                    </form>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
            <br />
            <h3>FAQ</h3>A list will go here based on the frequency of questions
            in the support box.
          </Container>
        </div>
      </div>
    );
  }
}
