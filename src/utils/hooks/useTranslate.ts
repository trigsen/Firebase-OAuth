import { useIntl } from 'react-intl';

export const useTranslate = () => {
  const intl = useIntl();

  return (id: string, defaultMsg: string) => (intl.formatMessage({ id }) ? intl.formatMessage({ id }) : defaultMsg);
};
