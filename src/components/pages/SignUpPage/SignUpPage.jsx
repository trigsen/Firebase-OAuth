import React from 'react';
import SignUpForm from '@/components/forms/AuthForm/SignUpForm/SignUpForm';
import LangSelect from '@/components/blocks/LangSelect/LangSelect';
import { Row, Col } from 'antd';
import { SelectWrapper } from './styles';

function SignUpPage() {
  return (
    <Row justify="center" align="middle">
      <Col span={24}>
        <SelectWrapper>
          <LangSelect />
        </SelectWrapper>
      </Col>
      <Col span={24}>
        <SignUpForm />
      </Col>
    </Row>
  );
}

export default SignUpPage;
