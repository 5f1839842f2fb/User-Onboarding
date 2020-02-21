import React from "react";
import { Formik, Form, Field } from "formik";

const OnboardingForm = props => {
  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      onSubmit={(values, tools) => {
        console.log(values);
      }}
    >
      {props => {
        return (
          <Form>
            <Field name="name" placeholder="name" />
            <Field name="email" placeholder="email" />
            <Field name="password" placeholder="password" />
            <button type='submit'>Submit</button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default OnboardingForm;
