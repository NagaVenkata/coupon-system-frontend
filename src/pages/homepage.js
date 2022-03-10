import React, { useEffect, useState } from 'react';
import styles from './homepage.module.scss'; 

import Header from '../components/header/Header';
import IntroSection from '../components/homepage-sections/Intro-section';
import Login from '../components/login/Login';
import Register from '../components/register/Register';
import OurProduct from '../components/homepage-sections/Our-product';
import Clients from '../components/homepage-sections/Clients';
import HowItWorks from '../components/how-it-works/How-it-works';
import Contact from '../components/contact/Contact';
import Footer from '../components/footer/Footer';

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

  const onClickRegister = () => {
    setShowRegister(true);
    setShowLogin(false);
  };

  const onClickLogin = () => {
    setShowLogin(!showLogin);
    setShowRegister(false);   
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
          
          {showLogin ? <Login isUser={isUser} onClickClose={onClickClose} onClickRegister={onClickRegister}/> : ''}
          {showRegister ? <Register isUser={isUser} onClickClose={onClickClose} onClickLogin={onClickLogin}/> : ''}

          <div id='mainSection1' className={styles.mainSection1}>
            <IntroSection onClickRegister={onClickRegister}/>
          </div>

          <div id='mainSection2' className={styles.mainSection2}>
            <OurProduct />
          </div>

          <Clients />

          <div id='howItWorksWrapper' className={styles.howItWorksWrapper}>
            <HowItWorks />
          </div>

          <Contact />
        </main>

          <Footer /> 
    </>
  )
};