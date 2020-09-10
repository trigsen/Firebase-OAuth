import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userSignout } from '@/store/action';
import {
  Typography, Row, Col, Button,
} from 'antd';
import LangSelect from '@/components/blocks/LangSelect/LangSelect';
import { FormattedMessage } from 'react-intl';
import { Wrapper, LangWrap } from './styles';

function Header() {
  const dispatch = useDispatch();
  const email = useSelector(state => state.user.data.email);
  const { Title } = Typography;

  const signOut = () => {
    dispatch(userSignout());
  };

  return (
    <Wrapper>
      <Row justify="space-around" align="center" gutter={[8, 8]}>
        <Col md={8} xs={24}>
          <Title level={3} style={{ textAlign: 'center' }}>
            Company
          </Title>
        </Col>
        <Col md={8} xs={24}>
          <Title level={4} style={{ textAlign: 'center' }}>
            {email}
          </Title>
        </Col>
        <Col md={8} xs={24}>
          <Row justify="center" align="middle" gutter={[16, 0]}>
            <Col span={12}>
              <Button type="primary" onClick={signOut} block>
                <FormattedMessage id="signOut" />
              </Button>
            </Col>
            <Col span={12}>
              <LangWrap>
                <LangSelect />
              </LangWrap>
            </Col>
          </Row>
        </Col>
      </Row>
    </Wrapper>
  );
}

export default Header;
