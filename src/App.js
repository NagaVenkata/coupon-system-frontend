import React from 'react';
import CouponSystemMainPage from "./CouponSystemMainPage";
import { Provider as ReduxProvider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";



function App() {

    return (
          <div className="App">
                <BrowserRouter>
                  <CouponSystemMainPage />
                </BrowserRouter>
          </div>
  );
}

export default App;