import React from "react";
import { Formik, Form, Field, withFormik, ErrorMessage, yupToFormErrors } from "formik";
import * as Yup from "yup";
import axios from 'axios';

const OnboardingFormWithoutFormik = (props) => {
  return (
    <Formik
      initialValues={{ name: props.name || "", email: props.email || "", password: props.password || "" }}
      onSubmit={(values, tools) => {
        tools.resetForm();
        console.log(values);
        axios.post("https://reqres.in/api/users", values)
          .then((response)=>{
            console.log(response)
            props.addMember(response.data)
          })
      }}
      validationSchema={Yup.object().shape({
        name: Yup.string().required().min(3),
        email: Yup.string().required().email(),
        password: Yup.string().required().min(8),
        tosbox: Yup.boolean().oneOf([true], "Accept Terms of Service")
      })}
    >
      {props => {
        return (
          <Form>
            <ErrorMessage name='name' />
            <Field name="name" type="text" placeholder="name" />
            <ErrorMessage name='email' />
            <Field name="email" type="email" placeholder="email" />
            <ErrorMessage name='password' />
            <Field name="password" type="password" placeholder="password" />
            <ErrorMessage name='tosbox' />
            <label name="tosbox">
            <Field type="checkbox" name="tosbox" /* checked={} */ />
              Terms of Service</label>
            <button type='submit'>Submit</button>
          </Form>
        );
      }}
    </Formik>
  );
};

const OnboardingForm = withFormik({
  /* mapPropsToValues({name, email, password, tos }) {      initialValues seems to do this but easier???
    return {
      name: name || '',
      email: email || '',
      password: password || '',
      tos: tos || ''
    }
  } */
  /* validationSchema: Yup.object().shape({
    name: Yup.string().required().min(3),
    email: Yup.string().required().email(),
    password: Yup.string().required().min(8)
  }) */
})(OnboardingFormWithoutFormik)

export default OnboardingForm;
