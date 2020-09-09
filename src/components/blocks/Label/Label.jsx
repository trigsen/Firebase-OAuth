import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';
import ErrorMsg from '@/components/blocks/ErrorMsg/ErrorMsg';
import { Label as Lab, ItemWrapper, ErrorWrap } from './styles';

export function Label({ children, ...props }) {
  return <Lab {...props}>{children}</Lab>;
}

export const createLabelWithInput = ({ inputType, labelName }) => {
  const LabelWithInput = ({
    field: { name, ...fieldProps },
    form: { errors, touched },
    ...rest
  }) => (
    <ItemWrapper>
      <Label htmlFor={name}>{labelName}</Label>
      <Input
        type={inputType}
        {...rest}
        {...fieldProps}
        placeholder={name}
        autoComplete="on" />
      {touched[name] && errors[name] ? (
        <ErrorWrap>
          <ErrorMsg>{errors[name]}</ErrorMsg>
        </ErrorWrap>
      ) : null}
    </ItemWrapper>
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
