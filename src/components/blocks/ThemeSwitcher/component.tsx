import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '@/actions';
import { getIsDarkState } from '@/reselect';
import { StyledSwitch } from './styles';
import withToolTip from '@/components/hoc/withTooltip';
import { useTranslate } from '@/utils/hooks';

const ThemeSwitcher = React.memo(() => {
  const dispatch = useDispatch();
  const isDark : boolean = useSelector(getIsDarkState);
  const onChange = () => {
    dispatch(setTheme());
  };
  const StyledSwitchWithTip = withToolTip(StyledSwitch, useTranslate('themeswitcher.tip', 'Switch current theme'), 'right');

  return <StyledSwitchWithTip onChange={onChange} defaultChecked={isDark} />
});

export default ThemeSwitcher;
