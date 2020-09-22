import React from 'react';
import { Select } from 'antd';
import { setLocale } from '@/actions';
import { EN_LANG, RU_LANG } from '@/constants';
import { useDispatch, useSelector } from 'react-redux';
import { StyledSelect } from '@/common//components/styles';
import { getLangSelector } from '@/reselect';
import { SelectValue } from 'antd/lib/select';
import { Messages } from '@/common/types/types';
import { Props } from './types';

const { Option } = Select;

const LangSelector: React.FC<Props> = ({ popupContainer }) => {
  const dispatch = useDispatch();
  const lang = useSelector(getLangSelector);

  const handleChange = (value: SelectValue) => {
    dispatch(setLocale(value as keyof Messages));
  };

  return (
    <StyledSelect
      defaultValue={lang}
      onChange={handleChange}
      getPopupContainer={popupContainer}
    >
      <Option value={EN_LANG}>English</Option>
      <Option value={RU_LANG}>Русский</Option>
    </StyledSelect>
  );
};

export default LangSelector;
