import React, { useEffect, useState } from 'react';
import styles from './homepage.module.scss'; 

//useSelector gets things from our state. When we create a var with a state and use useSelector to get the state -> almost like a useEffect (first render = var is created and we get the state as it is BUT also an automatic subscription of our state so if state is changed -> automatic re-rendering of the component)
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import Header from '../components/header/header';
import IntroSection from '../components/homepage-sections/intro-section';
import Login from '../components/login/login';
import Register from '../components/register/register';
import OurProduct from '../components/homepage-sections/our-product';
import Clients from '../components/homepage-sections/clients';
import HowItWorks from '../components/how-it-works/how-it-works';
import Contact from '../components/contact/contact';
import Footer from '../components/footer/footer';

export default function Home(props) {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  let navigate = useNavigate();


  //test with redux
  // const isUser = useSelector(state = state.isUser);
  // const [isUser, setIsUser] = useState(false);

  useEffect( () => {

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

    console.log("props.isUser homepage:", props.isUser);
  }, []);



  const onClickRegister = () => {
    setShowRegister(true);
    setShowLogin(false);
  };

  const onClickLogin = () => {
    setShowLogin(!showLogin);
    setShowRegister(false);   
    console.log("test");
  };

  const onClickClose = () => {
    setShowRegister(false);
    setShowLogin(false);
  };

  return (
    <>
        <header id='header' className={styles.headerWrapper}>
          <Header loggedIn={props.loggedIn} onClickLogin={onClickLogin} onClickRegister={onClickRegister} />
        </header>
        
        <main>
          
          {showLogin ? <Login loggedIn={props.loggedIn} onClickClose={onClickClose} onClickRegister={onClickRegister} isUser={props.isUser} /> : ''}
          {showRegister ? <Register loggedIn={props.loggedIn}onClickClose={onClickClose} onClickLogin={onClickLogin}/> : ''}

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