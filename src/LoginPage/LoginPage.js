import React,  {useState, useEffect} from 'react';
import { Link, useLocation, useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
//import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
//import { EditOutlined, EllipsisOutlined, DeleteOutlined } from '@ant-design/icons';

import { userAuthAction } from '../actions/userActions.js';
import Types from "../app/types";
//import {userAuthService} from '../services/userService.js'
//import { history } from "../helpers/history";

// Login page and its states and sends request to backend and alos shows error if usernae and password are not build

function LoginPage()  {
    
    const [inputs, setInputs] = useState({
        username: '',
        password: ''
    }); 

    const [submitted, setSubmitted] = useState(false);
    const {username, password} = inputs;
    const loggingIn = useSelector(state => state.login.loggingIn);
    const loggedIn = useSelector(state => state.login.loggedIn);
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const location = useLocation();

    /*useEffect(() => { 
        console.log("logout entered");
        dispatch(userAuthAction.logout()); 
        navigate("/login");
    }, []);*/


    function  handleChange(e) {
        const { name, value } = e.target;
        setInputs(inputs => ({ ...inputs, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        setSubmitted(true);
        // if username and password is not empty  dispatch the request to the backend server
        if (username && password) {
            // get return url from location state or default to home page

            dispatch(userAuthAction.login(username, password));
        }
    }

    useEffect(() => {
        // if logged in redirect to main page
        // The redirection should be chnaged to other page in future
        if(loggedIn) {
            navigate("/main");
        }

    },[loggedIn])

    
    return (
            <div className="col-md-12">
                <div className="card card-container">
                    <h2>Login</h2>
                    <form name="form" onSubmit={handleSubmit}>
                        <div className='form-group'>
                            <label htmlFor="username">Username</label>
                             <input type="text" className="form-control" name="username" value={username} onChange={handleChange} />
                                    {submitted && !username &&
                                        <div className="help-block">Username is required</div>
                                    }
                        </div>
                        <div className='form-group'>
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" name="password" value={password} onChange={handleChange} />
                            {submitted && !password &&
                                <div className="help-block">Password is required</div>
                            }
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary btn-block"><span>Login</span></button>
                            {loggingIn &&
                                <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                            }
                        </div>
                    </form>
                </div>
            </div>
        );
    //}
}

export default LoginPage;