import React from 'react';
import PropTypes from 'prop-types';
import { Input, Row, Col } from 'antd';
import ErrorMsg from '@/components/blocks/ErrorMsg/ErrorMsg';
import { Label as Lab, ErrorWrap, LabelWrap } from './styles';

export function Label({ children, ...props }) {
  return <Lab {...props}>{children}</Lab>;
}

export const createLabelWithInput = ({ inputType, labelName }) => {
  const LabelWithInput = ({
    field: { name, ...fieldProps },
    form: { errors, touched },
    ...rest
  }) => (
    <Row gutter={[8, 16]} align="middle">
      <Col sm={6} xs={8}>
        <LabelWrap>
          <Label htmlFor={name}>{labelName}</Label>
        </LabelWrap>
      </Col>
      <Col sm={12} xs={16}>
        <Input
          type={inputType}
          {...rest}
          {...fieldProps}
          name={name}
          placeholder={name}
          autoComplete="on" />
      </Col>
      {touched[name] && errors[name] ? (
        <Col xs={{ span: 24, offset: 8 }} sm={{ span: 24, offset: 6 }}>
          <ErrorWrap>
            <ErrorMsg>{errors[name]}</ErrorMsg>
          </ErrorWrap>
        </Col>
      ) : null}
    </Row>
  );

  LabelWithInput.propTypes = {
    field: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,

    form: PropTypes.shape({
      errors: PropTypes.objectOf(PropTypes.string).isRequired,
      touched: PropTypes.objectOf(PropTypes.bool).isRequired,
    }).isRequired,
  };

  return LabelWithInput;
};

createLabelWithInput.defaultProps = {
  labelName: '',
  inputType: 'text',
};

createLabelWithInput.propTypes = {
  labelName: PropTypes.string,
  inputType: PropTypes.string,
};

Label.defaultProps = {
  children: '',
};

Label.propTypes = {
  children: PropTypes.string,
};
