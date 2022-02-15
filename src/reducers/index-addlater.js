import { combineReducers } from 'redux';

// import { login } from './login.reducers';
import registerReducers from './register-reducers';
/*import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';*/

const rootReducer = combineReducers({
    // login
    registerReducers
    /*,
    registration,
    users,
    alert*/
});

export default rootReducer;

//redux.js:441 Uncaught Error: The slice reducer for key "registerReducers" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.