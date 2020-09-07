import React from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { userLogin } from '@/action';

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

function LogInForm() {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      password: Yup.string()
        .matches(/[a-zA-Z]/, 'Password should contain Latin letters')
        .min(8, 'Password is short - should be 8 chars minimum')
        .required('Password is required'),
    }),
    onSubmit: values => {
      dispatch(userLogin(values.email, values.password));
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
        <ButtonsWrapper>
          <Button type="submit" htmlFor="submit" name="login">
            Log In
          </Button>
          <Link to="/signup">
            <Button>Sign up</Button>
          </Link>
        </ButtonsWrapper>
      </Form>
    </FormWrapper>
  );
}

export default LogInForm;
