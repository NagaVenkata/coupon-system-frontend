import React, { useEffect, useState } from 'react';

import styles from './homepage.module.scss'; 
import backgroundImg from '../img/qr-code-transaction-in-store-tim-douglas-pexels.jpg';
// import BlobSvg from '../../src/img/blob-svg';


import Header from '../components/header/header';
import IntroWrapper from '../components/home/intro-wrapper';
import Login from '../components/check-credentials/login';
import Register from '../components/check-credentials/register';
import MainSection2 from '../components/home/main-section2';
import MainSection3 from '../components/home/main-section3';
import MainSection4 from '../components/home/main-section4';

import Footer from '../components/footer/footer';


export default function Home(props) {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [isUser, setIsUser] = useState(false);
  const [btnText, setBtnText] = useState('');

  useEffect( () => {

    setIsUser(props.isUser);
    setBtnText('LOGGA IN');

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
    if (showLogin === true) {
      setBtnText('LOGGA IN');
    } else {
      setBtnText('STÄNG');
    }
  };

  const onClickClose = () => {
    setShowRegister(false);
  };

  return (
    <>
        <header id='header' className={styles.headerWrapper}>
          <Header isUser={isUser} onClickLogin={onClickLogin} onClickRegister={onClickRegister} btnText={btnText}/>
        </header>
        
        <main className={styles.homePageMain}>
          
          {showLogin ? <Login isUser={isUser}/> : ''}
          {showRegister ? <Register isUser={isUser} onClickClose={onClickClose}/> : ''}

            {/* <div id='backgroundImgAboveFold' className={styles.backgroundImgAboveFold}> */}
                <div id='mainSection1' className={styles.mainSection1}>
                  <IntroWrapper onClickRegister={onClickRegister}/>
                </div>
            {/* </div> */}

          {/* <div id='blobWrapper' className={styles.blobWrapper}> */}

          <div id='mainSection2' className={styles.mainSection2}>
            <MainSection2 />
          </div>

          <MainSection3 />

          <div id='mainSection4' className={styles.mainSection4}>
            <MainSection4 />
          </div>
        </main>
        
        <footer id='footer' className={styles.footerWrapper}>
          <Footer /> 
        </footer>

    </>
  )
};

// needs to add footer here and not in App due to css/sass?