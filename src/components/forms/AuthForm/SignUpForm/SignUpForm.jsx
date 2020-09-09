import React from 'react';
import { Form, Formik, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { userSignup } from '@/store/action';
import { Button } from 'antd';

import { Link } from 'react-router-dom';
import { createLabelWithInput } from '@/components/blocks/Label/Label';

import * as Yup from 'yup';
import { FormWrapper, InnerWrap, ButtonsWrapper } from '../styles';

function SignUpForm() {
  const dispatch = useDispatch();

  const initValues = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  };

  const schema = Yup.object({
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
    lastName: Yup.string().min(3, 'Last name should contain 3 or more letters'),
  });

  return (
    <Formik
      initialValues={initValues}
      validationSchema={schema}
      onSubmit={values => dispatch(
        userSignup(
          values.email,
          values.password,
          values.firstName,
          values.lastName,
        ),
      )}
    >
      <FormWrapper>
        <Form>
          <InnerWrap>
            <Field name="email" id="email">
              {createLabelWithInput({
                labelName: 'Email',
                inputType: 'text',
              })}
            </Field>

            <Field name="password" id="password">
              {createLabelWithInput({
                labelName: 'Password',
                inputType: 'password',
              })}
            </Field>

            <Field name="firstName" id="firstName">
              {createLabelWithInput({
                labelName: 'First name',
                inputType: 'text',
              })}
            </Field>

            <Field name="lastName" id="lastName">
              {createLabelWithInput({
                labelName: 'Last name',
                inputType: 'text',
              })}
            </Field>
            <ButtonsWrapper>
              <Link to="/login">
                <Button type="primary">Log In</Button>
              </Link>
              <Button type="primary" htmlType="submit" name="login">
                Sign up
              </Button>
            </ButtonsWrapper>
          </InnerWrap>
        </Form>
      </FormWrapper>
    </Formik>
  );
}

export default SignUpForm;
