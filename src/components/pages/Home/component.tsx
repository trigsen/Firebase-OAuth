import React from 'react';
import Header from '@/components/blocks/Header';
import Calendar from '@/components/blocks/Calendar';
import ModalDateWriter from '@/components/blocks/ModalDateWriter';
import { Row, Col } from 'antd';
import { HomeWrapper } from './styles';

const Home = () => (
  <HomeWrapper>
    <Row>
      <Col span={24}>
        <Header />
      </Col>
      <Col span={24}>
        <ModalDateWriter />
      </Col>
      <Col span={24}>
        <Calendar />
      </Col>
    </Row>
  </HomeWrapper>
);

export default Home;
