import React, { useEffect, useState } from 'react';

import Header from '../../components/header/header';
import IntroSection from './intro-section';
import Login from './login';
import Register from './register';
import B2BFlow from './b2b-flow';
import B2CFlow from './b2c-flow';


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
    console.log("stäng");
    setShowLogin(false);
    setShowRegister(false);
  };

  return (
    <>
        <Header onClickLogin={onClickLogin} onClickRegister={onClickRegister}/>
        {showLogin ? <Login userId={userId} onClickClose={onClickClose}/> : ''}
        {showRegister ? <Register onClickClose={onClickClose}/> : ''}
        <IntroSection />
        <B2CFlow />
        <B2BFlow />
    </>
  )
};