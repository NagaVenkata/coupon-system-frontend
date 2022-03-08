import React, { useEffect, useState } from 'react';
import styles from './homepage.module.scss'; 

import Header from '../components/header/header';
import IntroWrapper from '../components/home/intro-wrapper';
import Login from '../components/check-credentials/login';
import Register from '../components/check-credentials/register';
import MainSection2 from '../components/home/main-section2';
import MainSection3 from '../components/home/main-section3';
import HowItWorks from '../components/how-it-works/How-it-works';
import Contact from '../components/contact/Contact';
import Footer from '../components/footer/footer';

export default function Home(props) {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [isUser, setIsUser] = useState(false);

  useEffect( () => {

    setIsUser(props.isUser);

    //save mockdata in lS if lS is empty
    if (JSON.parse(localStorage.getItem('users')) === null) {

      let mockUsers = [
        {
        'userId': '1',
        'userName': 'pippi@mail.com',
        'password': 'pippi',
        'campaignArrId': '1'
        }, {
          'userId': '2',
          'userName': 'tommy@mail.com',
          'password': 'tommy',
          'campaignArrId': '2'
        }
      ];
      localStorage.setItem('users', JSON.stringify(mockUsers));

      //later add mockCampaignArrs with userIds?
    }

  }, []);

  //TODO remove registerBtn from header?
  const onClickRegister = () => {
    setShowRegister(true);
    setShowLogin(false);
  };

  const onClickLogin = () => {
    setShowLogin(!showLogin);
    // setShowRegister(false);   //TODO remove registerBtn from header?
  };

  const onClickClose = () => {
    setShowRegister(false);
    setShowLogin(false);

  };

  return (
    <>
        <header id='header' className={styles.headerWrapper}>
          <Header isUser={isUser} onClickLogin={onClickLogin} onClickRegister={onClickRegister} />
        </header>
        
        <main className={styles.homePageMain}>
          
          {showLogin ? <Login isUser={isUser} onClickClose={onClickClose}/> : ''}
          {showRegister ? <Register isUser={isUser} onClickClose={onClickClose}/> : ''}

          <div id='mainSection1' className={styles.mainSection1}>
            <IntroWrapper onClickRegister={onClickRegister}/>
          </div>

          <div id='mainSection2' className={styles.mainSection2}>
            <MainSection2 />
          </div>

          {/* this causes an error */}
          <MainSection3 />

          <div id='howItWorksWrapper' className={styles.howItWorksWrapper}>
            <HowItWorks />
          </div>

          <Contact />
        </main>
        
        {/* <footer id='footer' className={styles.footerWrapper}> */} 
          <Footer /> 
        {/* </footer> */}
    </>
  )
};

// needs to add footer here and not in App due to css/sass?