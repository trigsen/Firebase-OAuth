import { combineReducers } from 'redux';
import user from './user';
import locale from './locale';
import theme from './theme';

export default combineReducers({
  user,
  locale,
  theme,
});
