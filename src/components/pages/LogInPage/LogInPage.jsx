import React from 'react';
import LogInForm from '@/components/forms/AuthForm/LogInForm/LogInForm';
import LangSelect from '@/components/blocks/LangSelect/LangSelect';
import { Row, Col } from 'antd';
import { SelectWrapper } from './styles';

function LogInPage() {
  return (
    <>
      <Row justify="center" align="middle">
        <Col span={24}>
          <SelectWrapper>
            <LangSelect />
          </SelectWrapper>
        </Col>
        <Col span={24}>
          <LogInForm />
        </Col>
      </Row>
    </>
  );
}

export default LogInPage;
