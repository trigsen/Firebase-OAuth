import React from 'react';
import { IntlProvider } from 'react-intl';
import messages from '@/internalization';
import { useSelector } from 'react-redux';
import { getLangSelector } from '@/reselect';
import { Props } from './types';

const IntlProviderWrap: React.FC<Props> = ({ children }) => {
  const locale = useSelector(getLangSelector);
  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      {children}
    </IntlProvider>
  );
};

export default IntlProviderWrap;
