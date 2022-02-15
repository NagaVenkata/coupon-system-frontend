import React, { useState, useEffect } from 'react';
import * as Styled from './create-account-style';

import RegisterBtn from '../button/register-btn';
// import UserPage from '../../domain/userpage/index';

export default function CreateAccount() {
  const [users, setUsers] = useState([]);

  // let navigate = useNavigate();
  const [inputUserName, setInputUserName] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  const [userId, setUserId] = useState({});


  useEffect( () => {
    //set data to lS
    let mockUsers = [
      {
        "userId": "1", "username": "pippi@mail.com", "password": "test1"
      }, {
        "userId": "2", "username": "tommy@mail.com", "password": "test2"
      }
    ];
    localStorage.setItem('users', JSON.stringify(mockUsers));
  }, []);
  

  const onSubmit = (evt) => {
    evt.preventDefault();

     // check if input fields aren't empty
    // check if terms are accepted
    // send newUser(username + password) to backend. Check if userName already exists. if not exist -> send back userId, else -> errorMsg 

    //userId from db
    let getUserId = '3';
    setUserId(getUserId);
    
    console.log("visa userpage");

    // document.getElementById('register-error-wrapper').innerHTML = '';

   

    //hämta från input
    

      
      
      
      

      // //check if lS is empty 
      // if (JSON.parse(localStorage.getItem('users')) === null) {
      //   userArr.push(newUser);
      //   localStorage.setItem('users', JSON.stringify(userArr));
      // } else {
      //   //get from lS
      //   let getUsers = JSON.parse(localStorage.getItem('users')); 

      //   //change
      //   getUsers.push(newUser);
      //   console.log("logga in:", getUsers);

      //   //save to lS
      //   localStorage.setItem('users', JSON.stringify(getUsers));

        //save userId to state 

        //navigate 
        // navigate('/userpage',{state: userId})
    
        
      // };

    // } else {
      // document.getElementById('register-error-wrapper').innerHTML = 'För att skapa ett konto måste du först godkänna våra villkor.';
    // };
  };

  const onChange = (evt) => {
    // document.getElementById('register-error-wrapper').innerHTML = '';

    

    switch (evt.target.id) {
      case "input-username":
        setInputUserName(evt.target.value); 
      break;
      case "input-password":
        setInputPassword(evt.target.value)
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
