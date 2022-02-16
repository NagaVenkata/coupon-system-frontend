import React, { useState } from 'react';
import styles from './App.module.css';
// import CouponSystemMainPage from "./CouponSystemMainPage";
import { Provider as ReduxProvider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css"; //why bootstrap?
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from './pages/homepage';
import UserPage from './pages/userpage';
import CreateCampaign from './components/create-campaign/index';
import NotFound from './components/not-found/not-found';
import Footer from './components/footer/footer';

function App() {

  //state true if user is logged in, else false
  const [isUser, setIsUser] = useState(false);

  return (
        <div id="app" className={styles.appWrapper}>

          <Router>
            <Routes>
              <Route exact path="/" element={<HomePage isUser={isUser} />}></Route>
              <Route exact path="/userpage/:userId" element={<UserPage isUser={isUser} />}></Route>
              <Route exact path="/userpage/create-campaign/:campaignId" element={<CreateCampaign />}></Route>
              <Route exact path='*' element={<NotFound />}></Route>
                
            </Routes>
          </Router>

          <Footer />
        </div>
  );
};

export default App;


//  Q: why naming: CouponSystemMainPage?
// why put BrowserRouter in another file? Dvs only BrowserRouter in step 1 and then i CouponSysdtemMainPage -> "as Router(...)"

//why get warning: react_devtools_backend.js:4061 No routes matched location "/"   ? Need to addt o backend?