// import Types from "../app/types";
// import axios from "axios";

// // sends request to the server and saves the user data to localhost and updates the store
// export const userAuthService = {
//     login,
//     logout
// };

// function login(userName, password) {
// 	let userData = {userName:userName, password:password};
//     console.log("json data ", JSON.stringify(userData));
//     const headers = { 
//         'Content-Type': 'application/json'
//     };
//     return axios.post('http://127.0.0.1:1337/api/authenticate', JSON.stringify(userData).toString(), {headers})
//         .then(response => {if(response.data.login){localStorage.setItem("user", JSON.stringify(response.data));}  return response;})
//         .catch(err => {
//             this.setState({ errorMessage: err.message });
//             console.error('There was an error!', err);
//         });
// }

// function logout() {
//     // remove user from local storage to log user out
//     localStorage.removeItem('user');
// }