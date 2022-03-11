import React, { useState } from 'react';
import styles from './App.module.scss'; 
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import CouponSystemMainPage from "./CouponSystemMainPage";
// import { Provider as ReduxProvider } from "react-redux";
// import "bootstrap/dist/css/bootstrap.min.css"; 


import HomePage from './pages/homepage'; //helloworld
import UserPage from './pages/userpage';
import CreateCampaign from './components/create-campaign/index';
import NotFound from './components/not-found/Not-found';

function App() {

  //state true if user is logged in, else false
  const [isUser, setIsUser] = useState(true);

  const loggedIn = () => {
    setIsUser(true);
  }

  console.log("isUser App:", isUser);

  return (
        <div id="app" className={styles.appWrapper}>
          <Router>
            <Routes>
              <Route exact path="/" element={<HomePage isUser={isUser} loggedIn={loggedIn}/>}></Route>
              <Route exact path="/userpage/:userId" element={<UserPage isUser={isUser} />}></Route>
              <Route exact path="/userpage/create-campaign/:campaignId" element={<CreateCampaign />}></Route>
              <Route exact path='*' element={<NotFound />}></Route>
                
            </Routes>
          </Router>
        </div>
  );
};

export default App;