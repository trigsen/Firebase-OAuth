import React from 'react';
import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { userLoginReq } from '@/actions';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import { createLabelWithInput } from '@/components/blocks/Label';
import * as Yup from 'yup';
import { FormattedMessage, useIntl } from 'react-intl';
import { StyledButton } from '@/common/components/styles';
import { FormWrapper, InnerWrap } from '../styles';

const LogInForm = () => {
  const dispatch = useDispatch();
  const intl = useIntl();

  const schema = Yup.object({
    email: Yup.string()
      .email(intl.formatMessage({ id: 'error.email.invalid' }))
      .required(intl.formatMessage({ id: 'error.email.required' })),
    password: Yup.string()
      .matches(/[a-zA-Z]/, intl.formatMessage({ id: 'error.password.invalid' }))
      .min(8, intl.formatMessage({ id: 'error.password.short' }))
      .required(intl.formatMessage({ id: 'error.password.required' })),
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
