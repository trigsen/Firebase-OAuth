import React from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { userSignup } from '@/action';

import { Link } from 'react-router-dom';

import * as Yup from 'yup';
import {
  FormWrapper,
  Form,
  Input,
  Label,
  ItemWrapper,
  Button,
  ErrorMsg,
  ButtonsWrapper,
} from '../styles';

function SignUpForm() {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      password: Yup.string()
        .matches(/[a-zA-Z]/, 'Password should contain Latin letters')
        .min(8, 'Password is short - should be 8 chars minimum')
        .required('Password is required'),
      firstName: Yup.string().min(
        3,
        'First name should contain 3 or more letters',
      ),
      lastName: Yup.string().min(
        3,
        'Last name should contain 3 or more letters',
      ),
    }),
    onSubmit: values => {
      dispatch(
        userSignup(
          values.email,
          values.password,
          values.firstName,
          values.lastName,
        ),
      );
    },
  });

  return (
    <FormWrapper>
      <Form onSubmit={formik.handleSubmit}>
        <ItemWrapper>
          <Label htmlFor="email">Email</Label>
          <Input type="text" id="email" {...formik.getFieldProps('email')} />
          {formik.touched.email && formik.errors.email ? (
            <ErrorMsg>{formik.errors.email}</ErrorMsg>
          ) : null}
        </ItemWrapper>

        <ItemWrapper>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            {...formik.getFieldProps('password')} />
          {formik.touched.password && formik.errors.password ? (
            <ErrorMsg>{formik.errors.password}</ErrorMsg>
          ) : null}
        </ItemWrapper>

        <ItemWrapper>
          <Label htmlFor="firstName">First name</Label>
          <Input
            type="text"
            id="firstName"
            {...formik.getFieldProps('firstName')} />
          {formik.touched.firstName && formik.errors.firstName ? (
            <ErrorMsg>{formik.errors.firstName}</ErrorMsg>
          ) : null}
        </ItemWrapper>

        <ItemWrapper>
          <Label htmlFor="lastName">Last name</Label>
          <Input
            type="text"
            id="lastName"
            {...formik.getFieldProps('lastName')} />
          {formik.touched.lastName && formik.errors.lastName ? (
            <ErrorMsg>{formik.errors.lastName}</ErrorMsg>
          ) : null}
        </ItemWrapper>

        <ButtonsWrapper>
          <Button type="submit" htmlFor="submit" name="login">
            Sign up
          </Button>
          <Link to="/login">
            <Button>Log In</Button>
          </Link>
        </ButtonsWrapper>
      </Form>
    </FormWrapper>
  );
}

export default SignUpForm;
