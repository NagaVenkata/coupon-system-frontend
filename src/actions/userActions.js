import Types from "../app/types";
import {userAuthService} from '../services/userService.js'
import { history } from '../helpers/history';
//import { useNavigate } from 'react-router-dom';

//actions to be performed and will use service to send the request

export const userAuthAction = {
    login,
    logout
};

function login(userName, password) {

    //let navigate = useNavigate();
       
	return dispatch => {
		dispatch({type:Types.LOGIN_REQUEST, userName});
		userAuthService.login(userName, password)
		.then(
                user => { 
                    
                    dispatch({type:Types.LOGIN_SUCCESS, user});
                    if(user.data.login) {
                        console.log("response data", user.data);
                        return {...user.data}
                        //history.push(from);
                        //navigate("main");
                    }
                },
                err => {
                    console.log(err)
                    dispatch({type:Types.LOGIN_FAILURE, err});
                }
            );
	}

}

function logout() {
    userAuthService.logout();
    return {type:Types.LOGOUT};
}



    