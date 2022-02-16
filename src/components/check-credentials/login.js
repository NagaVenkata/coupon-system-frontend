import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import styles from './login.module.css';

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
      // getData TODO: can 

      let getMockUsers = JSON.parse(localStorage.getItem('users'));

      // check if userName is available
      let userExists = Object.values(getMockUsers).find(obj => obj.userName === userValueLogin.userName);

      if (userExists !== undefined) {
        console.log("användarnamnet finns -> kolla lösen", userExists);

        if (userExists.password === userValueLogin.password) {
          console.log("match -> visa userPage");
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

          setIsUser(true); //remove?

          //what happens with isUser state in userpage when using navigate?
          navigate(`/userpage/${userExists.userId}`, {state: userLoggedIn})

        } else {
          setLoginErrorMsg('Användarnamnet eller lösenordet matchar inte. Pröva igen eller välj glömt lösenord.');
        }

      } else {
        setLoginErrorMsg('Vi kan inte hitta något konto med denna mail. Försök med en annan mail eller skapa ett nytt konto.');
      };
      
    } else {
      setLoginErrorMsg('För att logga in behöver du fylla i användarnamn och lösenord. Testa igen eller kontakta oss så hjälper vi gärna till!');
    }
  };

  return (
    <div id='loginWrapper' className={styles.loginWrapper}>
      <div id='textAndCloseWrapper' className={styles.textAndCloseWrapper}>
        <div id='textWrapper' className={styles.textWrapper}>
          <h3>Logga in</h3>
          <p>
            Visa uppskattning till kollegor och kunder - Logga in för att skicka ut dina kuponger!
          </p>
        </div>
        <button className="closeBtn" onClick={props.onClickClose}>X</button>
      </div>
    
        <form onSubmit={onSubmit}>
          <div id="userNameLoginWrapper">
            <h4 id="userNameLoginLabel">Användarnamn</h4>
            <input 
              id='userNameLoginInput' 
              type='email' 
              name='userName' placeholder='example@mail.com' 
              value={userValueLogin.username} 
              onChange={onChange}
            />
          </div><br></br>

          <div id="passwordLoginWrapper">
            <h4 id="passwordLoginLabel">Lösenord</h4>
            <input 
              id='passwordLoginInput' 
              type='password' 
              name='password' 
              placeholder='Minst 8 tecken' 
              // value={userPassword}
              onChange={onChange}
            />
          </div><br></br>

          <button type="submit">Logga in</button>
        </form><br></br>

        <div id='loginErrorMsgWrapper'>
        <p id='loginErrorMsg' className={styles.errorMsg}>{loginErrorMsg}</p>
      </div><br></br>
        
        <h5>Har du inget konto? Skapa konto här</h5>

        <p>Glömt lösenord?</p>
        
    </div>
  )
};

// check with db if userExist + if match with password
// if login ok -> backend send: getUserId + getCampaignArr
//set state isUserExist or userId 
//navigate to /userpage
//show correct in header
// else show errorMsg

//show errorMsg if input fields + termsCheckbox are empty


//ev byta från showLogin state till kolla if isUserExist





        