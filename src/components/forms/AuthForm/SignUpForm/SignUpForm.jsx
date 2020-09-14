import React from 'react';
import { Form, Formik, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { userSignupReq } from '@/store/action';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import { createLabelWithInput } from '@/components/blocks/Label/Label';
import * as Yup from 'yup';
import { FormattedMessage, injectIntl } from 'react-intl';
import PropTypes from 'prop-types';
import { StyledButton } from '@/components/styles';
import { FormWrapper, InnerWrap } from '../styles';

function SignUpForm({ intl }) {
  const dispatch = useDispatch();

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
      onSubmit={values => dispatch(
        userSignupReq(
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
                localeId: 'email',
                id: 'email',
              })}
            </Field>

            <Field name="password" id="password">
              {createLabelWithInput({
                labelName: 'Password',
                inputType: 'password',
                localeId: 'password',
                id: 'password',
              })}
            </Field>

            <Field name="firstName" id="firstName">
              {createLabelWithInput({
                labelName: 'First name',
                inputType: 'text',
                localeId: 'firstName',
                id: 'firstName',
              })}
            </Field>

            <Field name="lastName" id="lastName">
              {createLabelWithInput({
                labelName: 'Last name',
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
}

SignUpForm.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired,
  }).isRequired,
};

export default injectIntl(SignUpForm);
