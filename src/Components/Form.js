import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

export default function UserForm(props) {
  const { formValues, change, submit, buttonDisabled } = props;

  return (
    <Form className="form" onSubmit={submit}>
      <FormGroup className="group">
        <Label for="name" className="label">
          Name:{" "}
        </Label>
        <Input
          type="name"
          name="name"
          id="name"
          placeholder="Enter Name"
          value={formValues.name}
          onChange={change}
        />
      </FormGroup>

      <FormGroup className="group">
        <Label for="email" className="label">
          Email:{" "}
        </Label>
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="Enter Email"
          value={formValues.email}
          onChange={change}
        />
      </FormGroup>

      <FormGroup className="group">
        <Label for="password" className="label">
          Password:{" "}
        </Label>
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="Enter A Password"
          value={formValues.password}
          onChange={change}
        />
      </FormGroup>

      <FormGroup check className="group">
        <Label check className="label">
          <Input
            name="terms"
            type="checkbox"
            onChange={change}
            style={{ cursor: "pointer" }}
          />
          {""} I have read the Terms Of Service
        </Label>
      </FormGroup>

      <Button disabled={buttonDisabled} className="button">
        Submit
      </Button>
    </Form>
  );
}
