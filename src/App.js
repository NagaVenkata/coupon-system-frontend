import React, { useState } from 'react';
import styles from './App.module.css';
// import CouponSystemMainPage from "./CouponSystemMainPage";
import { Provider as ReduxProvider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css"; //why bootstrap?
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from './domain/home/index';
import UserPage from './domain/userpage';
import CreateCampaign from './domain/create-campaign/index';
import NotFound from './components/not-found/not-found';
import Footer from './components/footer/footer';

function App() {

  return (
        <div id="app" className={styles.appWrapper}>

          <Router>
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route exact path="/userpage" element={<UserPage />}></Route>
              <Route exact path="/userpage/create-campaign" element={<CreateCampaign />}></Route>
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