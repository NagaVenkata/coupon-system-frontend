import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import styles from './register.module.scss';
import CloseBtn from './close-btn.js';

export default function Register(props) {
  let navigate = useNavigate();

  const [userValue, setUserValue] = useState({
    userName: '',
    password: ''
  });
  const [errorMsg, setErrorMsg] = useState('');

  const onChange = (evt) => {
    //save input value username + password in state
    setUserValue({
      ...userValue,
      [evt.target.name]: evt.target.value
    });
  };
  
  const onSubmit = (evt) => {
    evt.preventDefault();
  
    //check so input fields aren't empty
    if ( (userValue.userName !== '') && (userValue.password !== '')) {

      // ========= send userValue to backend, output errorMsg or successMsg + needed userInfo
      // getData
      let getMockUsers = JSON.parse(localStorage.getItem('users'));

      // check if userName is available
      let userExists = Object.values(getMockUsers).find(obj => obj.userName === userValue.userName);

      if (userExists !== undefined) {
        setErrorMsg('Denna mail är redan registrerad. Pröva att logga in istället eller försök med en annan mail.');
      } else {
        console.log("Jippie - kontot är skapat, nu kör vi!", userExists);
        
        let randomId = Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1); 

        //or maybe campaignArr instead of campaignArrId
        //TODO crypto
        let newUser = {
          userId: randomId,
          userName: userValue.userName,
          password: userValue.password,
        };

        //update getMockUsers
        let newMockUsers = [...Object.values(getMockUsers), newUser]

        //save in lS
        localStorage.setItem('users', JSON.stringify(newMockUsers));
        // =========

        // get successMsg + needed info from backend, save userInfo to state:  
        let userLoggedIn = {
          userId: newUser.userId,
          campaignArr: [
            {
              campaignId: '1', 
              campaignTitle: 'kampanjtitel1', 
              deliveryDate: '2022-02-02'
            }, {
              campaignId: '2', 
              campaignTitle: 'kampanjtitel2', 
              deliveryDate: '2022-03-02'
            }
          ]
        };

       //TODO: save state userInfo in redux  
       localStorage.setItem('userLoggedIn', JSON.stringify(userLoggedIn));

        //print userPage 
        navigate(`/userpage/${newUser.userId}`, {state: userLoggedIn});
      }

    } else {
      setErrorMsg('För att skapa konto behöver du fylla i användarnamn och lösenord. Testa igen!')
    }
  };

  return (
    <div id='registerWrapper' className={styles.registerWrapper}>
      <div id='textAndCloseWrapper' className={styles.textAndCloseWrapper}>
        <div id='textWrapper' className={styles.textWrapper}>
          <button className={styles.styleCloseBtn} onClick={props.onClickClose}>X</button>
          <h3 className={styles.h3}>Skapa konto</h3>
          <p className={styles.bodyCopy}>
            Första steget för att skicka ut skräddarsydda kuponger är att skapa ett konto.
          </p>
        </div>
        {/* <CloseBtn onClickClose={props.onClickClose}/> */}
        {/* <button className="closeBtn" onClick={props.onClickClose}>X</button> */}
      </div>
      

      <form onSubmit={onSubmit}>
        <div id="userNameRegisterWrapper">
          <h4 id="userNameRegisterLabel" className={styles.inputLabel}>Din email</h4>
          <input className={styles.input}
            id='usernameRegisterInput' 
            type='email' 
            name='userName' placeholder='example@mail.com' 
            value={userValue.username} 
            onChange={onChange}
          />
        </div><br></br>

        <div id="passwordRegisterWrapper">
          <h4 id="passwordRegisterLabel" className={styles.inputLabel}>Välj lösenord</h4>
          <input className={styles.input}
            id='passwordRegisterInput' 
            type='password' 
            name='password' 
            placeholder='Minst 8 tecken' 
            value={userValue.password} 
            onChange={onChange}
          />
        </div><br></br>

        <button type="submit" className={styles.createAccountBtn}>SKAPA KONTO</button>
      </form><br></br>
      
      <div id='errorMsgWrapper'>
        <p id='errorMsg' className={styles.errorMsg}>{errorMsg}</p>
      </div><br></br>

      <h6 className={styles.h6}>Har du redan ett konto?</h6>
      <button id='loginBtn' className={styles.loginBtn}>LOGGA IN</button>
        
    </div>
  )
};