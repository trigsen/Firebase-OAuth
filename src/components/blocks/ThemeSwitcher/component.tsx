import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '@/actions';
import { getIsDarkState } from '@/reselect';
import { StyledSwitch } from './styles';

const ThemeSwitcher = () => {
  const dispatch = useDispatch();
  const isDark = useSelector(getIsDarkState);
  const onChange = () => {
    dispatch(setTheme());
  };

  return <StyledSwitch onChange={onChange} defaultChecked={isDark} />;
};

export default ThemeSwitcher;
