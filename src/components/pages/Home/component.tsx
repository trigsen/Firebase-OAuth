import React from 'react';
import Header from '@/components/blocks/Header';
import Calendar from '@/components/blocks/Calendar';
import ModalDateWriter from '@/components/blocks/ModalDateWriter';
import { Row, Col } from 'antd';
import { HomeWrapper, StyledCol } from './styles';
import EmojiesList from '@/components/blocks/EmojiesList';

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
      <StyledCol>
        <EmojiesList />
      </StyledCol>
    </Row>
  </HomeWrapper>
);

export default Home;
