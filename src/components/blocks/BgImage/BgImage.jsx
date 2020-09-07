import React from 'react';
import PropTypes from 'prop-types';
import BackgroundImg from './styles';

function BgImage({ children }) {
  return <BackgroundImg>{children}</BackgroundImg>;
}

BgImage.defaultProps = {
  children: '',
};

BgImage.propTypes = {
  children: PropTypes.node,
};

export default BgImage;
