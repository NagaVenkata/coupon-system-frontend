import React, { useEffect, useState } from 'react';

import styles from './homepage.module.scss'; 
import backgroundImg from '../img/qr-code-transaction-in-store-tim-douglas-pexels.jpg';
import BlobSvg from '../../src/img/blob-svg';


import Header from '../components/header/header';
import IntroWrapper from '../components/home/intro-wrapper';
import Login from '../components/check-credentials/login';
import Register from '../components/check-credentials/register';
import MainSection3 from '../components/home/main-section3';
import MainSection2 from '../components/home/main-section2';
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

  const onClickRegister = () => {
    setShowRegister(true);
    setShowLogin(false);
  };

  const onClickLogin = () => {
    setShowLogin(true);
    setShowRegister(false);
  };

  const onClickClose = () => {
    setShowLogin(false);
    setShowRegister(false);
  };

  return (
    <>
        <header id='header' className={styles.headerWrapper}>
          <Header isUser={isUser} onClickLogin={onClickLogin} onClickRegister={onClickRegister} />
        </header>
        
        <main className={styles.homePageMain}>
          
          {showLogin ? <Login isUser={isUser} onClickClose={onClickClose}/> : ''}
          {showRegister ? <Register isUser={isUser} onClickClose={onClickClose}/> : ''}

          {/* <span id='aboveFoldWrapper' className={styles.aboveFoldWrapper}> */}
            <div id='backgroundImgAboveFoldWrapper' className={styles.backgroundImgAboveFoldWrapper}>
              {/* <div style={ {backgroundImage: `url(${backgroundImg})`}}></div> */}
              {/* <img className={styles.backgroundImgAboveFold} alt='Allt'></img> */}
                {/* <img id='backgroundImgAboveFold' className={styles.backgroundImgAboveFold} alt='Customer buying in store with QR code coupon, by Tim Douglas from Pexels.' src={backgroundImg}></img> */}
                <div id='mainSection1' className={styles.mainSection1}>
                  <IntroWrapper onClickRegister={onClickRegister}/>
                </div>
            </div>
            
            
          {/* </span> */}
          

          {/* <div id='blobWrapper' className={styles.blobWrapper}> */}
            {/* <BlobSvg /> */}
          {/* </div> */}

          <div id='mainSection2' className={styles.mainSection2}>
            <MainSection2 />
          </div>

          <div id='mainSection3' className={styles.mainSection3}>
            <MainSection3 />
          </div>
        </main>
        
        <footer id='footer' className={styles.footerWrapper}>
          <Footer /> 
        </footer>

    </>
  )
};

// needs to add footer here and not in App due to css/sass?