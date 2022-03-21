import { combineReducers } from 'redux';

import alert from './alert/alertReducers';
import auth from './auth/authReducers';
import experiences from './exps/expReducers';
import codes from './codes/codeReducers';
import blogs from './blogs/blogReducers';
import theme from './theme/themeReducers';
import contact from './contact/contactReducers';

const rootReducer = combineReducers({
    alert,
    auth,
    theme,
    contact,
    experiences,
    codes,
    blogs
});

export default rootReducer;