import React from 'react';
import LogInForm from '@/components/forms/AuthForm/LogInForm';
import LangSelect from '@/components/blocks/LangSelect';
import ThemeSwitcher from '@/components/blocks/ThemeSwitcher';
import { Row, Col } from 'antd';
import { ThemeSwitcherWrap } from '@/common//components/styles';
import { SelectWrapper } from './styles';

const LogInPage = () => {
  const popupContainer = (): HTMLElement => document.getElementById('popup-container')!;
  return (
    <>
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
          <LogInForm />
        </Col>
      </Row>
    </>
  );
};

export default LogInPage;
