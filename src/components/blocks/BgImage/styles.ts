import styled from 'styled-components';

export default styled.div.attrs({
  id: 'popup-container',
})`
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url(https://source.unsplash.com/WLUHO9A_xik/1600x900);
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 15;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: ${({ theme }) => theme.background.default};
    opacity: 0.3;
    z-index: -1;
    transition: background 0.5s;
  }

  .ant-select-dropdown,
  .ant-picker-panel-container {
    background-color: ${({ theme }) => theme.background.default};
  }

  .ant-select-item-option,
  .ant-picker-cell,
  .ant-picker-header-view,
  .ant-picker-content tr th {
    color: ${({ theme }) => theme.colors.default};
  }

  .ant-select-item-option-active,
  .ant-select-item-option-selected {
    background: ${({ theme }) => theme.colors.grey};
  }

  .ant-picker-cell:hover .ant-picker-cell-inner {
    background: ${({ theme }) => theme.colors.grey} !important;
  }

  .ant-picker-prev-icon,
  .ant-picker-super-prev-icon,
  .ant-picker-next-icon,
  .ant-picker-super-next-icon {
    color: ${({ theme }) => theme.colors.placeholder};
  }
`;
