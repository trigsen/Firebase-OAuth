import { combineReducers } from 'redux';
import { user } from '@/store/user';
import { locale } from '@/store/locale';
import { theme } from '@/store/theme';

export default combineReducers({
  user,
  locale,
  theme,
});
