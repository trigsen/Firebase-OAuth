import { useIntl } from 'react-intl';

export const useTranslate = (id: string, defaultMsg: string) => {
  const intl = useIntl();

  return intl.formatMessage({ id }) ? intl.formatMessage({ id }) : defaultMsg;
};
