import React from 'react';
import { StyledButton } from '@/common/components/styles';
import withToolTip from '@/components/hoc/withTooltip';
import { Props } from './types';

const ButtonWithToolTip = ({
  onClick,
  children,
  disabled = false,
  translation,
}: Props) => {
  const Button = withToolTip(StyledButton, translation);
  return (
    <Button block type="dashed" onClick={onClick} disabled={disabled}>
      {children}
    </Button>
  );
};

export default ButtonWithToolTip;
