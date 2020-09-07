import React from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';

function PrimaryButton({ children, onClick }) {
  return (
    <Button onClick={onClick} type="primary" block>
      {children}
    </Button>
  );
}

PrimaryButton.defaultProps = {
  onClick: () => {},
};

PrimaryButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

export default PrimaryButton;
