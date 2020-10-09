import React, { useEffect, useRef } from 'react';
import { Col } from 'antd';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Props } from './types';
import { Wrapper, StyledTypography, StyledRow } from './styles';

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
      <StyledRow justify="center" align="middle" gutter={[16, 0]}>
        <Col span={4}>{Icon}</Col>
        <Col span={20}>
          <StyledTypography>{children}</StyledTypography>
        </Col>
      </StyledRow>
    </Wrapper>
  );
};

export default Toast;
