import styled from 'styled-components';
import { Modal, DatePicker } from 'antd';

export const ModalWrapper = styled.div.attrs({
  className: 'modal-wrapper',
})`
  position: relative;
  padding-bottom: 15px;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
`;

export const StyledModal = styled(Modal)`
  .ant-modal-content {
    z-index: 5;
  }
  .ant-modal-content::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: ${({ theme }) => theme.background.default} !important;
    z-index: -1;
    opacity: 0.7;
  }

  .ant-btn {
    background: transparent;
    color: ${({ theme }) => theme.colors.default};
  }

  .ant-btn-primary {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const StyledDatePicker = styled(DatePicker)`
  background-color: ${({ theme }) => theme.background.default};

  .ant-picker-suffix {
    color: ${({ theme }) => theme.colors.placeholder};
  }
  .ant-picker-clear {
    color: ${({ theme }) => theme.colors.placeholder};
    background-color: ${({ theme }) => theme.background.default};
  }
  .ant-picker-input input {
    color: ${({ theme }) => theme.colors.default};
  }
  .ant-picker-input input::placeholder {
    color: ${({ theme }) => theme.colors.placeholder};
  }
`;
