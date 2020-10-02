import React from 'react';
import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { userLoginReq } from '@/actions';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import { createLabelWithInput } from '@/components/blocks/Label';
import * as Yup from 'yup';
import { FormattedMessage } from 'react-intl';
import { StyledButton } from '@/common/components/styles';
import { useTranslate } from '@/utils/hooks/useTranslate';
import { FormWrapper, InnerWrap } from '../styles';

const LogInForm = () => {
  const dispatch = useDispatch();
  const translate = useTranslate();

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
      .required(translate('error.password.required', 'Password is required')),
  });

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={schema}
      onSubmit={values => {
        dispatch(userLoginReq(values.email, values.password));
      }}
    >
      <FormWrapper>
        <Form>
          <InnerWrap>
            <Field id="email" name="email">
              {createLabelWithInput({
                inputType: 'text',
                localeId: 'email',
                id: 'email',
              })}
            </Field>

            <Field id="password" name="password">
              {createLabelWithInput({
                inputType: 'password',
                localeId: 'password',
                id: 'password',
              })}
            </Field>

            <Row
              justify="center"
              align="middle"
              gutter={[0, 16]}
              style={{ textAlign: 'center' }}
            >
              <Col sm={12} xs={24}>
                <StyledButton type="dashed" htmlType="submit" name="login">
                  <FormattedMessage id="logIn" />
                </StyledButton>
              </Col>
              <Col sm={12} xs={24}>
                <Link to="/signup">
                  <StyledButton type="dashed">
                    <FormattedMessage id="signUp" />
                  </StyledButton>
                </Link>
              </Col>
            </Row>
          </InnerWrap>
        </Form>
      </FormWrapper>
    </Formik>
  );
};

export default LogInForm;
