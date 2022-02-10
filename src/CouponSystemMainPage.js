import React, {useEffect} from "react";
import {Layout, Menu} from 'antd';
import { connect, useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from "react-router-dom";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MainPage from "./MainPage/MainPage";
import LoginPage from "./LoginPage/LoginPage";
import { history } from "./helpers/history";
import { ErrorBoundry } from "./helpers/ErrorBoundary";
import { userAuthAction } from './actions/userActions.js';

// Main function where naviagation bar and related links and pages are linked.

function CouponSystemMainPage()  {

    const user = useSelector(state => state.login.user); 

    const navigate = useNavigate();

    const dispatch = useDispatch();
    const location = useLocation();

    return (
                <div>
                    <nav className="navbar navbar-expand navbar-dark bg-dark">
                        <div className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/main" className="nav-link">Main</Link>
                            </li>
                        </div>
                        {user ?(<div className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to="/logout" className="nav-link">Logout</Link>
                            </li>
                        </div>)
                        :(<div className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to="/login" className="nav-link">Login</Link>
                            </li>
                        </div>)
                       }
                    </nav>
                    <Routes>
                        <Route exact path="/main" element={<MainPage />}></Route>
                        <Route exact path="/login" element={<LoginPage />}></Route>
                        <Route exact path="/logout" element={<Logout />}></Route>
                    </Routes>
                </div>
    );
}


export default CouponSystemMainPage;

function Logout() {
    const navigate = useNavigate();

    const dispatch = useDispatch();
    useEffect(() => { 
        console.log("logout entered");
        dispatch(userAuthAction.logout()); 
        navigate("/login");
    }, []);
    return(<p>Logout</p>);
}

    