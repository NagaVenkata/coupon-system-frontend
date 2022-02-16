import React, { useEffect, useState } from 'react';

import Header from '../components/header/header';
import IntroSection from '../components/home/intro-section';
import Login from '../components/home/login';
import Register from '../components/check-credentials/register';
import B2BFlow from '../components/home/b2b-flow';
import B2CFlow from '../components/home/b2c-flow';


export default function Home() {

  useEffect( () => {
    //set mockdata in lS
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
    //later add mockCampaignArrs?
    console.log("mockUsers in home:", mockUsers);

    localStorage.setItem('users', JSON.stringify(mockUsers));
    
  }, []);

  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [userId, setUserId] = useState('');

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
        <Header onClickLogin={onClickLogin} onClickRegister={onClickRegister}/>
        <main>
          {showLogin ? <Login userId={userId} onClickClose={onClickClose}/> : ''}
          {showRegister ? <Register onClickClose={onClickClose}/> : ''}
          <IntroSection onClickRegister={onClickRegister}/>
          <B2CFlow />
          <B2BFlow />
        </main>

    </>
  )
};