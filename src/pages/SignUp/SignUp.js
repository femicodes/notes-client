import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './SignUp.scss';
import { signup } from '../../utils/request';

const SignUpSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Your name must be at least 3 characters')
    .required('Name is required'),
  email: Yup.string()
    .email("Invalid email address format")
    .required("Email is required"),
  password: Yup.string()
    .min(5, 'Password must be at least 5 characters')
    .required("Password is required!"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], "Passwords must match!")
    .required("You have to confirm your password!")
});

export class SignUp extends Component {
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
        <p className="header">Notes</p>
        <Formik
          initialValues={{ name: "", email: "", password: "", confirmPassword: "" }}
          validationSchema={SignUpSchema}
          onSubmit={fields => {
            signup(fields).then(res => {
              if (res.status === 403) return this.setState({ error: res.errors.message });
              localStorage.setItem('user_token', res.data.token);
              this.props.history.push('/dashboard');
            });
          }}
        >
          {({ touched, errors, isSubmitting }) => (
            <Form className="card">
              <p>Create an account</p>
              <div className={this.state.error ? 'error' : ''}>{this.state.error}</div>
              <Field type="text"
                name="name"
                placeholder="🖋️ Name"
                className={`input ${
                  touched.name && errors.name ? "is-invalid" : ""
                  }`}
              />
              <ErrorMessage
                component="div"
                name="name"
                className="error"
              />

              <Field type="email"
                name="email"
                placeholder="✉️ Email"
                className={`input ${
                  touched.email && errors.email ? "is-invalid" : ""
                  }`}
              />
              <ErrorMessage
                component="div"
                name="email"
                className="error"
              />

              <Field type="password"
                name="password"
                placeholder="🔒 Password"
                className={`input ${
                  touched.password && errors.password ? "is-invalid" : ""
                  }`}
              />
              <ErrorMessage
                component="div"
                name="password"
                className="error"
              />

              <Field type="password"
                name="confirmPassword"
                placeholder="💪🏾 Confirm password"
                className={`input ${
                  touched.confirmPassword && errors.confirmPassword ? "is-invalid" : ""
                  }`}
              />
              <ErrorMessage
                component="div"
                name="confirmPassword"
                className="error"
              />

              <button
                type="submit"
              >
                Sign up
              </button>
            </Form>
          )}
        </Formik>
        <p className="signin">Already have an account? <Link to="/">Sign in</Link></p>
      </div>
    );
  };
};

export default SignUp;
