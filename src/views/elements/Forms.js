import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Col, Row, Card, CardBody } from 'reactstrap';

export default class FormsPage extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Row>
        <Col md={{ size: 8, offset: 2 }}>
          <Card>
            <CardBody>
              <Form>
                <FormGroup>
                  <Label for="name">Name</Label>
                  <Input type="text" name="name" id="name" placeholder="Enter car centre name" />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleSelect">Email</Label>
                  <Input type="text" name="email" id="email" placeholder="Enter Email"></Input>
                </FormGroup>
                <FormGroup>
                  <Label for="exampleSelectMulti">Password</Label>
                  <Input type="text" name="password" id="password" placeholder="Enter password"></Input>
                </FormGroup>

                <Button>Register Car Wash Admin</Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}
