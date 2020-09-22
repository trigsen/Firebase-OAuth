import React, { useCallback } from 'react';
import SignUpForm from '@/components/forms/AuthForm/SignUpForm';
import LangSelect from '@/components/blocks/LangSelect';
import ThemeSwitcher from '@/components/blocks/ThemeSwitcher';
import { Row, Col } from 'antd';
import { ThemeSwitcherWrap } from '@/common/components/styles';
import { SelectWrapper } from './styles';

const SignUpPage = () => {
  const popupContainer = useCallback((): HTMLElement => document.getElementById('popup-container')!, []);
  return (
    <Row justify="center" align="middle">
      <Col span={24}>
        <Row justify="center" align="middle">
          <Col span={12}>
            <SelectWrapper>
              <LangSelect popupContainer={popupContainer} />
            </SelectWrapper>
          </Col>
          <Col span={12}>
            <ThemeSwitcherWrap>
              <ThemeSwitcher />
            </ThemeSwitcherWrap>
          </Col>
        </Row>
      </Col>
      <Col span={24}>
        <SignUpForm />
      </Col>
    </Row>
  );
};

export default SignUpPage;
