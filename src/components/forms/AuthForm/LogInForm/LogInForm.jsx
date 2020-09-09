import React from 'react';
import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { userLogin } from '@/store/action';
import { Button } from 'antd';

import { Link } from 'react-router-dom';
import { createLabelWithInput } from '@/components/blocks/Label/Label';

import * as Yup from 'yup';
import { FormWrapper, InnerWrap, ButtonsWrapper } from '../styles';

function LogInForm() {
  const dispatch = useDispatch();

  const schema = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .matches(/[a-zA-Z]/, 'Password should contain Latin letters')
      .min(8, 'Password is short - should be 8 chars minimum')
      .required('Password is required'),
  });

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={schema}
      onSubmit={values => dispatch(userLogin(values.email, values.password))}
    >
      <FormWrapper>
        <Form>
          <InnerWrap>
            <Field id="email" name="email">
              {createLabelWithInput({
                labelName: 'Email',
                inputType: 'text',
              })}
            </Field>

            <Field id="password" name="password">
              {createLabelWithInput({
                labelName: 'Password',
                inputType: 'password',
              })}
            </Field>

            <ButtonsWrapper>
              <Button type="primary" htmlType="submit" name="login">
                Log In
              </Button>
              <Link to="/signup">
                <Button type="primary">Sign up</Button>
              </Link>
            </ButtonsWrapper>
          </InnerWrap>
        </Form>
      </FormWrapper>
    </Formik>
  );
}

export default LogInForm;
