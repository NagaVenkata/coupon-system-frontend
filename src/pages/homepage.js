import React, { useEffect, useState } from 'react';
import './homepage.scss';

import Header from '../components/header/header';
import IntroSection from '../components/home/intro-section';
import Login from '../components/check-credentials/login';
import Register from '../components/check-credentials/register';
import B2BFlow from '../components/home/b2b-flow';
import B2CFlow from '../components/home/b2c-flow';


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
        <Header isUser={isUser} onClickLogin={onClickLogin} onClickRegister={onClickRegister} />
        <main>
          {showLogin ? <Login isUser={isUser} onClickClose={onClickClose}/> : ''}
          {showRegister ? <Register isUser={isUser} onClickClose={onClickClose}/> : ''}
          <IntroSection onClickRegister={onClickRegister}/>
          <B2CFlow />
          <B2BFlow />
        </main>
    </>
  )
};