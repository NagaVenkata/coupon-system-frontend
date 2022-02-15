import Types from "../app/types";


// let user = JSON.parse(localStorage.getItem('user'));
// const initialState = user ? { loggedIn: true, user } : {};

// export function login(state = initialState, action) {
//   switch (action.type) {
//     case Types.LOGIN_REQUEST:
//       return {
//         ...state,
//         loggingIn: true,
//         user: action.user
//       };
//     case Types.LOGIN_SUCCESS:
//       return {
//         ...state,
//         loggedIn: true,
//         user: action.user
//       };
//     case Types.LOGIN_FAILURE:
//       return {};
//     case Types.LOGOUT:
//       return {};
//     default:
//       return state
//   }
// }