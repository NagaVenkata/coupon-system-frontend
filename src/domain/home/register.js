import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import styles from './register.module.css';
import { setUser } from '../../actions/set-user';
import { store } from '../../helpers/store';

export default function Register(props) {
  let navigate = useNavigate();

  const [userValue, setUserValue] = useState('');
  const [userValueTest, setUserValueTest] = useState({
    userName: '',
    password: ''
  });
  const [errorMsg, setErrorMsg] = useState('');

  
  const onChange = (evt) => {

    //save input value username + password in state
    const value = evt.target.value;
    setUserValueTest({
      ...userValueTest,
      [evt.target.name]: value
    });
    // console.log("userValueTest i onchange:", userValueTest);

    //redux
    setUserValue(evt.target.value);
  };
  const onSubmit = (evt) => {
    evt.preventDefault();
    // redux:
    store.dispatch(setUser(userValue));

    console.log("userValueTest i onSubmit", userValueTest);
    
    //send userValue to backend - check if userName exists -> false: add userId + save + send back userId. true: errorMsg. 

    //getData
    let getMockUsers = JSON.parse(localStorage.getItem('users'));

    //check if userName is available
    console.log("userValueTest", typeof userValueTest);
    let userExists = Object.values(getMockUsers).find(obj => obj.userName === userValueTest.userName);

    if (userExists !== undefined) {
      setErrorMsg('Denna mail är redan registrerad, pröva att logga in istället!');
    } else {
      console.log("Jippie - kontot är skapat, nu kör vi!", userExists);
      
      let randomId = Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1); 

      let newUser = {
        userId: randomId,
        userName: userValueTest.userName,
        password: userValueTest.password,
        campaignArrId: ''
      };

      //update getMockUsers
      let newMockUsers = [...Object.values(getMockUsers), newUser]

      //save in lS
      localStorage.setItem('users', JSON.stringify(newMockUsers));

      //print userPage + TODO: send in redux state userId
      navigate('/userpage'); 
    }
  };

  return (
    <div id='registerWrapper' className={styles.registerWrapper}>
      <div id='textAndCloseWrapper' className={styles.textAndCloseWrapper}>
        <div id='textWrapper' className={styles.textWrapper}>
          <h3>Skapa konto</h3>
          <p>
            Första steget för att kunna skapa skräddarsydda kupongutskick är att skapa ett konto. Det är gratis!
          </p>
        </div>
        <button className="closeBtn" onClick={props.onClickClose}>X</button>
      </div>
      

      <form onSubmit={onSubmit}>
        <div id="userNameWrapper">
          <h4 id="userNameInputLabel">Din email</h4>
          <input 
            id='usernameInput' 
            type='email' 
            name='userName' placeholder='example@mail.com' 
            value={userValueTest.username} 
            onChange={onChange}
          />
        </div><br></br>

        <div id="passwordWrapper">
          <h4 id="passwordInputLabel">Välj lösenord</h4>
          <input 
            id='passwordInput' 
            type='text' 
            name='password' 
            placeholder='Minst 8 tecken' 
            value={userValueTest.password} 
            onChange={onChange}
          />
        </div><br></br>

        <button type="submit">Skapa konto</button>
      </form><br></br>
      
      <div id='errorMsgWrapper'>
        <p id='errorMsg' className={styles.errorMsg}>{errorMsg}</p>
      </div><br></br>

      <h5>Har du redan ett konto? Logga in här</h5>
        
    </div>
  )
}
