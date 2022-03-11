import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import styles from './login.module.scss';

export default function Login(props) {
  let navigate = useNavigate();

  const [userValueLogin, setUserValueLogin] = useState({
    userName: '',
    password: ''
  });
  const [loginErrorMsg, setLoginErrorMsg] = useState('');
  const [isUser, setIsUser] = useState(false);

  useEffect(() => {
    setIsUser(props.isUser);
    console.log("isUser login:", isUser);
    console.log("props.isUser login:", props.isUser);

  }, []);

  const onChange = (evt) => {
    setUserValueLogin({
      ...userValueLogin,
      [evt.target.name]: evt.target.value
    });
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    
    if ( (userValueLogin.userName !== '') && (userValueLogin.password !== '')) {
      // ========= send userValue to backend, output errorMsg or successMsg + needed userInfo
      // getData 
      let getMockUsers = JSON.parse(localStorage.getItem('users'));

      // check if userName is available
      let userExists = Object.values(getMockUsers).find(obj => obj.userName === userValueLogin.userName);

      if (userExists !== undefined) {
        // console.log("användarnamnet finns -> kolla lösen", userExists);

        if (userExists.password === userValueLogin.password) {
          // console.log("match -> visa userPage");
          let userLoggedIn = {
            userId: userExists.userId,
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

          // setIsUser(true);
          // console.log("isUser after login OK:", isUser);

          localStorage.setItem('isAuth', 'true'); //check if exists in userpage.js
          navigate(`/userpage/${userExists.userId}`, {state: userLoggedIn})

        } else {
          setLoginErrorMsg('Användarnamnet eller lösenordet matchar inte. Pröva igen eller välj glömt lösenord.');
        }

      } else {
        setLoginErrorMsg('För att logga in behöver du fylla i rätt användarnamn och lösenord. Pröva igen eller kontakta oss så hjälper vi dig!');
      };
      
    } else {
      setLoginErrorMsg('För att logga in behöver du fylla i både användarnamn och lösenord. Pröva igen!');
    }
  };

  return (
    <div id='loginWrapper' className={styles.loginWrapper}>
      <section id='loginColumn1' className={styles.loginColumn1}>

        <div id='textWrapper' className={styles.textWrapper}>
          <button className={styles.styleCloseBtn} onClick={props.onClickClose}>X</button>
          <h3 className={styles.h3}>Logga in</h3>
          <p className={styles.bodyCopy}>
            Visa uppskattning till kollegor och kunder! Logga in för att skicka ut dina kuponger.
          </p>
        </div>
    
        <form id='loginForm' className={styles.loginForm} onSubmit={onSubmit}>
          <section id='userNameLoginWrapper' className={styles.userNameLoginWrapper}>
            <h5 id='userNameLoginLabel' className={styles.inputLabel}>Användarnamn</h5>
            <input className={styles.input}
              id='userNameLoginInput' 
              type='email' 
              name='userName' placeholder='example@mail.com' 
              value={userValueLogin.username} 
              onChange={onChange}
            />
          </section>

          <section id='passwordLoginWrapper' className={styles.passwordLoginWrapper}>
            <h5 id='passwordLoginLabel' className={styles.inputLabel}>Lösenord</h5>
            <input className={styles.input}
              id='passwordLoginInput' 
              type='password' 
              name='password' 
              placeholder='Minst 8 tecken' 
              onChange={onChange}
            />
          </section>

          <button type='submit' className={styles.loginBtn}>LOGGA IN</button>
        </form>
        <div id='loginErrorMsgWrapper'>
          <p id='loginErrorMsg' className={styles.errorMsg}>{loginErrorMsg}</p>
        </div>
        <p className={styles.link}>Glömt lösenord?</p>
        
        <div className={styles.line}></div>
        <section id='loginLastSection' className={styles.loginLastSection}>
          <h6 className={styles.bodyCopy}>Har du inget konto?</h6>
          <button id='createAccountBtn' className={styles.createAccountBtn} onClick={props.onClickRegister}>SKAPA KONTO</button>
   
        </section>
      </section>
    </div>
  )
};

//show errorMsg if input fields + termsCheckbox are empty
//ev change showLogin state to check if isUserExist        