import React, {useEffect} from 'react';
import { Link, useLocation, useNavigate} from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import Helmet from 'react-helmet';
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {userAuthService} from '../services/userService.js'
import {userAuthAction} from '../actions/userActions.js'

function MainPage()  {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    // reset login status
    /*useEffect(() => { 
        console.log("logout entered");
        dispatch(userAuthAction.logout()); 
        navigate("/login");
    }, []);*/
    
    return (
        <div className="container">
            <Helmet bodyAttributes={{style: 'background-color : #05EDFF'}}/>
            <div className="row">
                <div className="col-sm">
                    <h1 style={{textAlign: "center"}}> Adoveo Coupon Manager </h1>
                </div>
            </div>
        </div>
    );
}


export default MainPage;