import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '@/actions';
import { getIsDarkState } from '@/reselect';
import withToolTip from '@/components/hoc/withTooltip';
import { useTranslate } from '@/utils/hooks';
import { StyledSwitch } from './styles';

const ThemeSwitcher = React.memo(() => {
  const dispatch = useDispatch();
  const translate = useTranslate();
  const isDark: boolean = useSelector(getIsDarkState);
  const onChange = () => {
    dispatch(setTheme());
  };
  const StyledSwitchWithTip = withToolTip(
    StyledSwitch,
    translate('themeswitcher.tip', 'Switch current theme'),
    'right',
  );

  return <StyledSwitchWithTip onChange={onChange} defaultChecked={isDark} />;
});

export default ThemeSwitcher;
