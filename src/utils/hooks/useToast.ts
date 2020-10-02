import { useContext } from 'react';
import { ToastContext } from '@/context';

export const useToast = () => {
  const context = useContext(ToastContext);

  return [context.add, context.remove];
};
