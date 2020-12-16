import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import * as yup from "yup";
import { formik } from "formik";

const initialValues = {
  name: "",
  email: "",
  password: "",
  consent: false,
};

const reviewSchema = yup.object().shape({
  name: yup
    .string()
    .name("Name is Not valid, need more than 2 characters!")
    .required("Name is required")
    .min(2, "Name must be longer than 2 characters"),
  email: yup
    .string()
    .email("Email is not valid!")
    .required("Email is required!"),
  password: yup
    .string()
    .min(4, "Password has to be longer than 6 characters!")
    .required("Password is required!"),
  consent: yup
    .bool()
    .test(
      "consent",
      "You have to agree to our Terms and Conditions!",
      (value) => value === true
    )
    .required("You must agree with the Terms and Conditions!"),
});

function getErrorsFromValidationError(validationError) {
  const FirstError = 0;
  return validationError.inner.reduce((errors, error) => {
    return {
      ...errors,
      [error.path]: error.errors[FirstError],
    };
  }, {});
}

export default function FormContainer() {
  return (
    <formik
      initialValues={initialValues}
      validate={validate(reviewSchema)}
      onSubmit={onSubmit}
      render={UserForm}
    />
  );
}

function UserForm(props) {
  const { isSubmitting, errors, handleChange, handleSubmit } = props;

  return (
    <Form className="form">
      <FormGroup className="group">
        <Label for="name" className="label">
          Name:{" "}
        </Label>
        <Input
          type="name"
          name="name"
          id="name"
          placeholder="Enter Name"
          onChange={handleChange}
        />
      </FormGroup>
      <div className="formError">{errors.name}</div>

      <FormGroup className="group">
        <Label for="email" className="label">
          Email:{" "}
        </Label>
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="Enter Email"
          onChange={handleChange}
        />
      </FormGroup>
      <div className="formError">{errors.email}</div>

      <FormGroup className="group">
        <Label for="password" className="label">
          Password:{" "}
        </Label>
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="Enter A Password"
          onChange={handleChange}
        />
      </FormGroup>
      <div className="formError">{errors.email}</div>

      <FormGroup check className="group">
        <Label check className="label">
          <Input
            name="consent"
            type="checkbox"
            onChange={handleChange}
            style={{ cursor: "pointer" }}
          />
          {""} I have read the Terms Of Service
        </Label>
      </FormGroup>
      <div className="formError">{errors.email}</div>

      <Button onClick={handleSubmit} className="button">
        {isSubmitting ? "Loading" : "Sign Up"}Submit
      </Button>
    </Form>
  );
}

function onSubmit(values, { setSubmitting, setErrors }) {
  setTimeout(() => {
    setSubmitting(false);
  }, 1500);
}
