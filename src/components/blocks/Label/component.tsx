import React from 'react';
import { Row, Col } from 'antd';
import ErrorMsg from '@/components/blocks/ErrorMsg';
import { FormattedMessage, useIntl } from 'react-intl';
import { FieldProps } from 'formik';
import { StyledInput, Label as Lab, ErrorWrap } from './styles';
import { Props } from './types';

export const Label: React.FC<Props> = ({ children, ...props }) => (
  <Lab {...props}>{children}</Lab>
);

export const createLabelWithInput = ({ inputType, id, localeId }: Props) => ({
  field: { name, ...fieldProps },
  form: { errors, touched },
  ...rest
}: FieldProps) => {
  const intl = useIntl();

  return (
    <Row gutter={[8, 16]} align="middle">
      <Col md={4} xs={8}>
        <Label htmlFor={id}>
          <FormattedMessage id={localeId} />
        </Label>
      </Col>
      <Col md={20} xs={16}>
        <StyledInput
          type={inputType}
          {...rest}
          {...fieldProps}
          name={name}
          id={id}
          size="middle"
          placeholder={intl.formatMessage({ id: localeId })}
          autoComplete="on" />
      </Col>
      {touched[name] && errors[name] ? (
        <Col md={{ span: 20, offset: 4 }} xs={{ span: 24 }}>
          <ErrorWrap>
            <ErrorMsg>{errors[name]}</ErrorMsg>
          </ErrorWrap>
        </Col>
      ) : null}
    </Row>
  );
};
