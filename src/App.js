import React from 'react';
// import CouponSystemMainPage from "./CouponSystemMainPage";
import { Provider as ReduxProvider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css"; //why bootstrap?
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import * as Styled from './App-style';

import Home from './domain/home/index';
import UserPage from './domain/userpage/index';
import CreateCampaign from './domain/create-campaign/index';

function App() {

    return (
          <Styled.App id="app">
            <Router>
              <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route exact path="/userpage" element={<UserPage />}></Route>
                <Route exact path="/userpage/create-campaign" element={<CreateCampaign />}></Route>
                 

              </Routes>
            </Router>
                {/* <BrowserRouter> */}
                  {/* <CouponSystemMainPage /> */}
                {/* </BrowserRouter> */}
          </Styled.App>
  );
}

export default App;


//  Q: why naming: CouponSystemMainPage?
// why put BrowserRouter in another file? Dvs only BrowserRouter in step 1 and then i CouponSysdtemMainPage -> "as Router(...)"


{/* <Route exact path="/main" element={<MainPage />}></Route>
<Route exact path="/login" element={<LoginPage />}></Route>
<Route exact path="/logout" element={<Logout />}></Route> */}

//why get warning: react_devtools_backend.js:4061 No routes matched location "/"   ? Need to addt o backend?