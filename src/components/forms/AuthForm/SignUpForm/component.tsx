import React from 'react';
import { Form, Formik, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { userSignupReq } from '@/actions';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import { createLabelWithInput } from '@/components/blocks/Label';
import * as Yup from 'yup';
import { FormattedMessage } from 'react-intl';
import { StyledButton } from '@/common/components/styles';
import { useTranslate } from '@/utils/hooks/hooks';
import { FormWrapper, InnerWrap } from '../styles';

const SignUpForm = () => {
  const dispatch = useDispatch();
  const translate = useTranslate();
  const initValues = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  };

  const schema = Yup.object({
    email: Yup.string()
      .email(translate('error.email.invalid', 'Invalid email'))
      .required(translate('error.email.required', 'Email is required')),
    password: Yup.string()
      .matches(
        /[a-zA-Z]/,
        translate('error.password.invalid', 'Incorrect password'),
      )
      .min(8, translate('error.password.short', 'Password is short'))
      .required(
        translate('error.password.required', 'Password is required'),
      ),
    firstName: Yup.string().min(
      3,
      translate('error.firstName.invalid', 'Invalid first name'),
    ),
    lastName: Yup.string().min(
      3,
      translate('error.lastName.invalid', 'Invalid last name'),
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
