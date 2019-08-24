import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './SignIn.scss';

const SigninSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address format")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
});

export class SignIn extends Component {
  render() {
    return (
      <div className="signin-main">
        <p className="signin-header">Notes</p>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={SigninSchema}
          onSubmit={fields => {
            alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
          }}
        >
          {({ touched, errors, isSubmitting }) => (
            <Form className="signin-card">
              <p>Sign in</p>
              <Field type="email"
                name="email"
                placeholder="✉️ Email"
                className={`signin-input ${
                  touched.email && errors.email ? "is-invalid" : ""
                  }`}
              />
              <ErrorMessage
                component="div"
                name="email"
                className="signin-error"
              />

              <Field type="password"
                name="password"
                placeholder="🔒 Password"
                className={`signin-input ${
                  touched.password && errors.password ? "is-invalid" : ""
                  }`}
              />
              <ErrorMessage
                component="div"
                name="password"
                className="signin-error"
              />
              <button
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Please wait..." : "Sign in"}
              </button>
            </Form>
          )}
        </Formik>
        <p className="signup">Don’t have an account? <Link to="/auth/signup">Sign up</Link></p>
      </div>
    );
  };
};

export default SignIn;
