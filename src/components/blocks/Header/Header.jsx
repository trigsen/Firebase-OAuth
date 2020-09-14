import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userSignout } from '@/store/action';
import { Row, Col } from 'antd';
import LangSelect from '@/components/blocks/LangSelect/LangSelect';
import { FormattedMessage } from 'react-intl';
import { ThemeSwitcherWrap, StyledButton } from '@/components/styles';
import ThemeSwitcher from '@/components/blocks/ThemeSwitcher/ThemeSwitcher';

import { Wrapper, LangWrap, StyledTitle } from './styles';

function Header() {
  const dispatch = useDispatch();
  const email = useSelector(state => state.user.data.email);

  const signOut = () => {
    dispatch(userSignout());
  };

  const popupContainer = () => document.getElementById('popup-container');
  return (
    <Wrapper>
      <Row justify="space-around" align="center" gutter={[8, 8]}>
        <Col md={8} xs={24}>
          <StyledTitle level={3}>Company</StyledTitle>
        </Col>
        <Col md={8} xs={24}>
          <StyledTitle level={4}>{email}</StyledTitle>
        </Col>
        <Col md={8} xs={24}>
          <Row justify="center" align="middle" gutter={[16, 0]}>
            <Col span={8}>
              <StyledButton type="dashed" onClick={signOut} block>
                <FormattedMessage id="signOut" />
              </StyledButton>
            </Col>
            <Col span={8}>
              <ThemeSwitcherWrap>
                <ThemeSwitcher />
              </ThemeSwitcherWrap>
            </Col>
            <Col span={8}>
              <LangWrap>
                <LangSelect popupContainer={popupContainer} />
              </LangWrap>
            </Col>
          </Row>
        </Col>
      </Row>
    </Wrapper>
  );
}

export default Header;
