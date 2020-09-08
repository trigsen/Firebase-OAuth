import React, { useState } from 'react';
import Header from '@/components/blocks/Header/Header';
import Calendar from '@/components/blocks/Calendar/Calendar';
import ModalDateWriter from '@/components/blocks/ModalDateWriter/ModalDateWriter';
import { Row, Col } from 'antd';
import { HomeWrapper } from './styles';

const Context = React.createContext(null);

function Home() {
  const [hoursStorage, setHour] = useState({});
  const addHour = (date, hour) => {
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
            <ModalDateWriter context={Context} />
          </Col>

          <Col span={24}>
            <Calendar context={Context} />
          </Col>
        </Row>
      </HomeWrapper>
    </Context.Provider>
  );
}

export default Home;
