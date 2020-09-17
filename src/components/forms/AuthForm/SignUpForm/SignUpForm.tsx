import React from 'react';
import { Form, Formik, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { userSignupReq } from '@/store/action';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import { createLabelWithInput } from '@/components/blocks/Label/Label';
import * as Yup from 'yup';
import { FormattedMessage, useIntl } from 'react-intl';
import { StyledButton } from '@/components/styles';
import { FormWrapper, InnerWrap } from '../styles';

const SignUpForm = () => {
  const dispatch = useDispatch();
  const intl = useIntl();
  const initValues = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  };

  const schema = Yup.object({
    email: Yup.string()
      .email(intl.formatMessage({ id: 'error.email.invalid' }))
      .required(intl.formatMessage({ id: 'error.email.required' })),
    password: Yup.string()
      .matches(/[a-zA-Z]/, intl.formatMessage({ id: 'error.password.invalid' }))
      .min(8, intl.formatMessage({ id: 'error.password.short' }))
      .required(intl.formatMessage({ id: 'error.password.required' })),
    firstName: Yup.string().min(
      3,
      intl.formatMessage({ id: 'error.firstName.invalid' }),
    ),
    lastName: Yup.string().min(
      3,
      intl.formatMessage({ id: 'error.lastName.invalid' }),
    ),
  });

  return (
    <Formik
      initialValues={initValues}
      validationSchema={schema}
      onSubmit={values => {
        dispatch(
          userSignupReq(
            values.email,
            values.password,
            values.firstName,
            values.lastName,
          ),
        );
      }}
    >
      <FormWrapper>
        <Form>
          <InnerWrap>
            <Field name="email" id="email">
              {createLabelWithInput({
                inputType: 'text',
                localeId: 'email',
                id: 'email',
              })}
            </Field>

            <Field name="password" id="password">
              {createLabelWithInput({
                inputType: 'password',
                localeId: 'password',
                id: 'password',
              })}
            </Field>

            <Field name="firstName" id="firstName">
              {createLabelWithInput({
                inputType: 'text',
                localeId: 'firstName',
                id: 'firstName',
              })}
            </Field>

            <Field name="lastName" id="lastName">
              {createLabelWithInput({
                inputType: 'text',
                localeId: 'lastName',
                id: 'lastName',
              })}
            </Field>
            <Row
              justify="center"
              align="middle"
              gutter={[0, 16]}
              style={{ textAlign: 'center' }}
            >
              <Col sm={12} xs={24}>
                <Link to="/login">
                  <StyledButton type="dashed">
                    <FormattedMessage id="logIn" />
                  </StyledButton>
                </Link>
              </Col>
              <Col sm={12} xs={24}>
                <StyledButton type="dashed" htmlType="submit" name="login">
                  <FormattedMessage id="signUp" />
                </StyledButton>
              </Col>
            </Row>
          </InnerWrap>
        </Form>
      </FormWrapper>
    </Formik>
  );
};
export default SignUpForm;
