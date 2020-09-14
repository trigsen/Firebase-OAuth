import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import ErrorMsg from '@/components/blocks/ErrorMsg/ErrorMsg';
import { FormattedMessage, injectIntl } from 'react-intl';
import { StyledInput, Label as Lab, ErrorWrap } from './styles';

export function Label({ children, ...props }) {
  return <Lab {...props}>{children}</Lab>;
}

export const createLabelWithInput = ({ inputType, id, localeId }) => {
  const LabelWithInput = ({
    intl,
    field: { name, ...fieldProps },
    form: { errors, touched },
    ...rest
  }) => (
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

  LabelWithInput.propTypes = {
    field: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,

    form: PropTypes.shape({
      errors: PropTypes.objectOf(PropTypes.string).isRequired,
      touched: PropTypes.objectOf(PropTypes.bool).isRequired,
    }).isRequired,

    intl: PropTypes.shape({
      formatMessage: PropTypes.func.isRequired,
    }).isRequired,
  };

  return injectIntl(LabelWithInput);
};

createLabelWithInput.defaultProps = {
  labelName: '',
  inputType: 'text',
};

createLabelWithInput.propTypes = {
  labelName: PropTypes.string,
  inputType: PropTypes.string,
  localeId: PropTypes.string,
  id: PropTypes.string,
};

Label.defaultProps = {
  children: '',
};

Label.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};
