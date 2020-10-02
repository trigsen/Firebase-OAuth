import React, { useEffect, useRef } from 'react';
import { Col, Row, Typography } from 'antd';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Props } from './types';
import { Wrapper } from './styles';

const getIcon = (type: 'danger' | 'success') => {
  switch (type) {
    case 'danger':
      return <CloseOutlined />;
    case 'success':
      return <CheckOutlined />;
    default:
      return null;
  }
};

const Toast = ({ type, children, remove }: Props) => {
  const ref: any = useRef();

  ref.current = remove;

  const Icon = getIcon(type);

  useEffect(() => {
    const timeout = setTimeout(() => ref.current(), 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <Wrapper type={type}>
      <Row justify="center" align="middle" gutter={[16, 0]} style={{width: '100%'}}>
        <Col span={4}>{Icon}</Col>
        <Col span={20}>
          <Typography style={{ color: '#FFFFFF' }}>{children}</Typography>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default Toast;
