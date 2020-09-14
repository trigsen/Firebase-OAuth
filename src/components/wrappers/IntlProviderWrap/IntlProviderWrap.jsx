import React from 'react';
import { IntlProvider } from 'react-intl';
import messages from '@/internalization';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { getLangSelector } from '@/store/reselect';

function IntlProviderWrap({ children }) {
  const locale = useSelector(getLangSelector);
  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      {children}
    </IntlProvider>
  );
}

IntlProviderWrap.propTypes = {
  children: PropTypes.element.isRequired,
};

export default IntlProviderWrap;
