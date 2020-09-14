import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '@/store/action';
import { getIsDarkState } from '@/store/reselect';
import { StyledSwitch } from './styles';

function ThemeSwitcher() {
  const dispatch = useDispatch();
  const isDark = useSelector(getIsDarkState);
  const onChange = () => {
    dispatch(setTheme());
  };

  return <StyledSwitch onChange={onChange} defaultChecked={isDark} />;
}

export default ThemeSwitcher;
