import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '@/actions';
import { getIsDarkState } from '@/reselect';
import { StyledSwitch } from './styles';

const ThemeSwitcher = React.memo(() => {
  const dispatch = useDispatch();
  const isDark : boolean = useSelector(getIsDarkState);
  const onChange = () => {
    dispatch(setTheme());
  };

  return <StyledSwitch onChange={onChange} defaultChecked={isDark} />;
});

export default ThemeSwitcher;
