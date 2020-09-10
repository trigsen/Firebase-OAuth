import React from 'react';
import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { userLogin } from '@/store/action';
import { Button, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import { createLabelWithInput } from '@/components/blocks/Label/Label';
import * as Yup from 'yup';
import { FormattedMessage, injectIntl } from 'react-intl';
import PropTypes from 'prop-types';
import { FormWrapper, InnerWrap } from '../styles';

function LogInForm({ intl }) {
  const dispatch = useDispatch();
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
      onSubmit={values => dispatch(userLogin(values.email, values.password))}
    >
      <FormWrapper>
        <Form>
          <InnerWrap>
            <Field id="email" name="email">
              {createLabelWithInput({
                labelName: 'Email',
                inputType: 'text',
                localeId: 'email',
                id: 'email',
              })}
            </Field>

            <Field id="password" name="password">
              {createLabelWithInput({
                labelName: 'Password',
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
                <Button type="primary" htmlType="submit" name="login">
                  <FormattedMessage id="logIn" />
                </Button>
              </Col>
              <Col sm={12} xs={24}>
                <Link to="/signup">
                  <Button type="primary">
                    <FormattedMessage id="signUp" />
                  </Button>
                </Link>
              </Col>
            </Row>
          </InnerWrap>
        </Form>
      </FormWrapper>
    </Formik>
  );
}

LogInForm.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired,
  }).isRequired,
};

export default injectIntl(LogInForm);
