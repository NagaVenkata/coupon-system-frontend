import React, { useState } from 'react';
import Header from '../../components/header/index';
import IntroSection from './intro-section';
import LoginMain from './login-main';
import RegisterMain from './register-main';
import B2BFlow from './b2b-flow';
import B2CFlow from './b2c-flow';


import Footer from '../../components/footer/index';


export default function Home() {

  const [showLogin, setShowLogin] = useState(true);

  return (
    <>
        <Header />
        <IntroSection />
        {showLogin ?  <LoginMain /> : <RegisterMain />}
        <B2CFlow />
        <B2BFlow />
        <Footer />
    </>
  )
};



//what's the diff? import Header from '../../components/header';