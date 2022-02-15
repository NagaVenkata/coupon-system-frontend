import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import styles from './login.module.css';

export default function Login(props) {
  let navigate = useNavigate();

  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userId, setUserId] = useState('');
  const [userInfo, setUserInfo] = useState('');

  const onSubmit = (evt) => {
    evt.preventDefault();
    // check with db if userExist + if match with password
    // if login ok -> backend send: getUserId + getCampaignArr
 
    let getUserId = "userid-1a";

    let existingUser = {
      "userId": getUserId,
      // "campaignArr": getCampaignArr
    };
    console.log("existingUser", existingUser);

    //set state userId and/or userInfo (fix async)
    // setUserInfo(existingUser)

    //navigate to /userpage
    navigate('/userpage');
    // navigate('/userpage', {"existingUser": existingUser});
  };

  const onChange = (evt) => {
    switch (evt.target.id) {
      case 'userNameInput':
        setUserName(evt.target.value);
        break;
      case 'passwordInput':
        setUserPassword(evt.target.value);
        break;
      default: 
      break;
    };
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
          <div id="userNameWrapper">
            <h4 id="userNameLabel">Användarnamn</h4>
            <input 
              id='userNameInput' 
              type='email' 
              name='userNameInput' placeholder='example@mail.com' 
              // value={userName} 
              onChange={onChange}
            />
          </div><br></br>

          <div id="passwordWrapper">
            <h4 id="passwordlLabel">Lösenord</h4>
            <input 
              id='passwordInput' 
              type='text' 
              name='passwordInput' 
              placeholder='Minst 8 tecken' 
              // value={userPassword}
              onChange={onChange}
            />
          </div><br></br>

          <button type="submit">Logga in</button>
        </form><br></br>
        
        <h5>Har du inget konto? Skapa konto här</h5>
        
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





        