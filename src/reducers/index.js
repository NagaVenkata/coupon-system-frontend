import { combineReducers } from 'redux';

import { login } from './login.reducers';
/*import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';*/

const rootReducer = combineReducers({
    login/*,
    registration,
    users,
    alert*/
});

export default rootReducer;