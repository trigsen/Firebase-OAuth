import React from 'react';
import { Tooltip } from 'antd';

type Placement =
  | 'left'
  | 'right'
  | 'top'
  | 'bottom'
  | 'topLeft'
  | 'topRight'
  | 'bottomLeft'
  | 'bottomRight'
  | 'leftTop'
  | 'leftBottom'
  | 'rightTop'
  | 'rightBottom';

const withToolTip = (
  Component: React.ComponentType<any>,
  title = '',
  placement = 'top' as Placement,
) => (props: any) => (
  <Tooltip title={title} placement={placement}>
    <Component {...props} />
  </Tooltip>
);

export default withToolTip;
