import React, { useState } from 'react';
import * as Styled from './create-account-style';

import RegisterBtn from '../button/register-btn';

export default function CreateAccount() {
  const [inputUserName, setInputUserName] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  const [newUser, setNewUser] = useState({});

  let users = [
    {"username": "pippi@mail.com", "password": "test1"},
    {"username": "tommy@mail.com", "password": "test2"}
  ];

  const onSubmit = (evt) => {
    evt.preventDefault();

    if ( (inputUserName.name !== '') && (inputPassword.password !== '') && (document.getElementById('terms-checkbox').checked === true)) {
      console.log("allt är ifyllt");
    } else {
      if (inputUserName.name === '') {
        console.log("Välj din email som ditt användarnamn.");
      }
      if (inputPassword.name === '') {
        console.log("Välj ett lösenord, max 8 tecken.");
      }
      if (document.getElementById('terms-checkbox').checked !== true) {
        console.log("För att skapa ett konto måste du först godkänna våra villkor.");
      }

    }

    // if (inputUserName !== '') {
    //   console.log("kolla om username finns");
    // } else {
    //   console.log("du måste fylla i både användarnamn");
    // };

    // if (inputPassword === '') {
    //   console.log("du måste fylla i både password:", inputPassword);

    // } else {
    //   console.log("fyllt i password", inputPassword);
    // };



    //check if terms are accepted
    // if (document.getElementById('terms-checkbox').checked === true) {
      
      // let userArr = [];
      // let newUser = {
      //     username: inputUserName,
      //     password: inputPassword
      // };

    //   //check if lS is empty ADD: && if userName exist
    //   if (JSON.parse(localStorage.getItem('users')) === null) {
    //     userArr.push(newUser);
    //     localStorage.setItem('users', JSON.stringify(userArr));
    //   } else {
    //     //get from lS
    //     let getUsers = JSON.parse(localStorage.getItem('users')); 

    //     //change
    //     getUsers.push(newUser);
    //     console.log("logga in:", getUsers);

    //     //save to lS
    //     localStorage.setItem('users', JSON.stringify(getUsers));
    //   };

    // } else {
    //   document.getElementById('register-error-wrapper').innerHTML = 'För att skapa ett konto måste du först godkänna våra villkor.';
    // };
  };

  const onChange = (evt) => {
    document.getElementById('register-error-wrapper').innerHTML = '';

    switch (evt.target.id) {
      case "input-username":
        setInputUserName({[evt.target.name]: evt.target.value})
      break;
      case "input-password":
        setInputPassword({[evt.target.name]: evt.target.value})
      break;
      default:
      break;
    };
      // setNewUser({[evt.target.id]: evt.target.value});    
  };

  //lägga till value i input
  return (
    <Styled.ColumnWrapperR id='column-wrapper-R'>
        <h3>Skapa gratiskonto</h3>
        <p>Första steget för att kunna skapa skräddarsydda kupongutskick är att skapa ett konto. Det är gratis!</p>
        <form onSubmit={onSubmit}> 
          <div id="inputWrapperMail">
            <label id='label-input-username'>Din email:</label> 
            <input 
              type='email' 
              id='input-username' 
              name='username' placeholder='example@mail.com'
              onChange={onChange}/>
          </div>
          <div id="inputWrapperPassword">
            <label id='label-input-password'>Välj lösenord:</label> 
            <input 
              type='text' 
              id='input-password' 
              name='password' 
              placeholder='Minst 8 tecken'
              onChange={onChange}/>
          </div>
            <Styled.TermsWrapper id="termsWrapper">
              <Styled.TermsCheckbox id='terms-checkbox' type='checkbox'></Styled.TermsCheckbox>
              <p>Jag godkänner villkoren Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </Styled.TermsWrapper>
            <RegisterBtn />
            <div id='register-error-wrapper'></div>
        </form>
        
        
    </Styled.ColumnWrapperR>
  )
};
