import React from 'react';
import PropTypes from 'prop-types';
import { ErrorMsg as Err } from './styles';

export default function ErrorMsg({ children }) {
  return <Err>{children}</Err>;
}

ErrorMsg.defaultProps = {
  children: '',
};

ErrorMsg.propTypes = {
  children: PropTypes.string,
};
