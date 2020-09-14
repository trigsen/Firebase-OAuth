import React from 'react';
import { Select } from 'antd';
import { setLocale } from '@/store/action';
import { EN_LANG, RU_LANG } from '@/constants';
import { useDispatch, useSelector } from 'react-redux';
import { StyledSelect } from '@/components/styles';
import PropTypes from 'prop-types';
import { getLangSelector } from '@/store/reselect';

const { Option } = Select;

function LangSelector({ popupContainer }) {
  const dispatch = useDispatch();
  const lang = useSelector(getLangSelector);

  const handleChange = value => {
    dispatch(setLocale(value));
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
}

LangSelector.defaultProps = {
  popupContainer: () => document.body,
};

LangSelector.propTypes = {
  popupContainer: PropTypes.func,
};

export default LangSelector;
