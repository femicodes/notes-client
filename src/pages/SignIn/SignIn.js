import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './SignIn.scss';
import { signin } from '../../utils/request';

const SigninSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address format")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
});

export class SignIn extends Component {
  state = {
    error: ''
  }

  componentDidMount() {
    document.body.style.backgroundColor = "#AD97EF";
    document.body.style.display = 'flex';
    document.body.style.justifyContent = 'center';
  }

  render() {
    return (
      <div>
        <p className="signin-header">Notes</p>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={SigninSchema}
          onSubmit={fields => {
            signin(fields).then(res => {
              if (res.status === 403) return this.setState({ error: res.errors.message });
              localStorage.setItem('user_token', res.data.token);
              this.props.history.push('/dashboard');
            });
          }}
        >
          {({ touched, errors, isSubmitting }) => (
            <Form className="signin-card">
              <p>Sign in</p>
              <div className={this.state.error ? 'signin-error' : ''}>{this.state.error}</div>
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
              >
                Sign in
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
