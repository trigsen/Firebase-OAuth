import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userSignout } from '@/store/action';
import {
  Typography, Row, Col, Button,
} from 'antd';

import { Wrapper } from './styles';

function Header() {
  const dispatch = useDispatch();
  const email = useSelector(state => state.user.data.email);
  const { Title } = Typography;

  const signOut = () => {
    dispatch(userSignout());
  };

  return (
    <Wrapper>
      <Row justify="space-between" align="center">
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
          <Button type="primary" onClick={signOut} block>
            Sign out
          </Button>
        </Col>
      </Row>
    </Wrapper>
  );
}

export default Header;
