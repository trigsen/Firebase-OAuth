import React, { useState } from 'react';
import { ToastContext } from '@/context';
import { createPortal } from 'react-dom';
import Toast from '@/components/blocks/Toast';
import { generateID } from '@/utils/helpers/generateID';
import PopUpService from '@/utils/helpers/PopUpService';
import { useTranslate } from '@/utils/hooks';
import { Toasts, Props } from './types';
import { Wrapper } from './styles';

const ToastProvider = ({ children }: Props) => {
  const [list, setList] = useState<Toasts[]>([]);
  const translate = useTranslate();

  const add = (type: 'danger' | 'success', content: string) => {
    setList([...list, { id: generateID(), content: translate(content, ''), type } as Toasts]);
  };
  PopUpService.setPopUpShow(add);
  const remove = (id: number) => setList(list.filter(toast => toast.id !== id));
  const providerValue = { add, remove };

  return (
    <ToastContext.Provider value={providerValue}>
      {children}
      {createPortal(
        <Wrapper>
          {list.map(toast => (
            <Toast
              key={toast.id}
              remove={() => remove(toast.id)}
              type={toast.type}
            >
              {toast.content}
            </Toast>
          ))}
        </Wrapper>,
        document.body,
      )}
    </ToastContext.Provider>
  );
};

export default ToastProvider;
