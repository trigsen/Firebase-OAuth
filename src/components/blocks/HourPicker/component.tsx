import React, { useMemo } from 'react';
import { StyledSelect } from '@/common/components/styles';
import { Select } from 'antd';

const { Option } = Select;

const HourPicker = React.memo(
  ({ handleSelectorChange, popupContainer }: any) => {
    const hours = useMemo(() => [...Array(24).keys()], []);

    return (
      <StyledSelect
        onChange={handleSelectorChange}
        getPopupContainer={popupContainer}
      >
        {hours.map(value => (
          <Option key={value} value={value}>
            {value}
          </Option>
        ))}
      </StyledSelect>
    );
  },
);

export default HourPicker;
