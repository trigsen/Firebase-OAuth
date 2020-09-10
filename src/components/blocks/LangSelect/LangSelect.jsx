import React from 'react';
import { Select } from 'antd';
import { setLocale } from '@/store/action';
import { EN_LANG, RU_LANG } from '@/constants';
import { useDispatch, useSelector } from 'react-redux';

const { Option } = Select;

function LangSelector() {
  const dispatch = useDispatch();
  const lang = useSelector(store => store.locale.lang);

  const handleChange = value => {
    dispatch(setLocale(value));
  };

  return (
    <Select defaultValue={lang} onChange={handleChange}>
      <Option value={EN_LANG}>English</Option>
      <Option value={RU_LANG}>Русский</Option>
    </Select>
  );
}

export default LangSelector;
