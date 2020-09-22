import React, { useState } from 'react';
import Header from '@/components/blocks/Header';
import Calendar from '@/components/blocks/Calendar';
import ModalDateWriter from '@/components/blocks/ModalDateWriter';
import { Row, Col } from 'antd';
import { Context } from '@/context';
import { HomeWrapper } from './styles';

const Home = () => {
  const [hoursStorage, setHour] = useState({});
  const addHour = (date: string, hour: string) => {
    setHour({
      ...hoursStorage,
      [date]: hour,
    });
  };
  return (
    <Context.Provider value={{ hoursStorage, addHour }}>
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
    </Context.Provider>
  );
};

export default Home;
