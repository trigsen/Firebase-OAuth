import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '@/store/action';
import { StyledSwitch } from './styles';

function ThemeSwitcher() {
  const dispatch = useDispatch();
  const isDark = useSelector(state => state.theme.isDark);
  const onChange = () => {
    dispatch(setTheme());
  };

  return <StyledSwitch onChange={onChange} defaultChecked={isDark} />;
}

export default ThemeSwitcher;
