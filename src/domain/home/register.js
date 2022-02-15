import React from 'react';
import styles from './register.module.css';

export default function Register(props) {

  const onSubmit = () => {

  };

  const onChange = () => {

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
        <div id="pickedUserNameWrapper">
          <h4 id="pickedUserNameLabel">Din email</h4>
          <input 
            id='pickedUserNameInput' 
            type='email' 
            name='pickedUserNameInput' placeholder='example@mail.com' 
            // value={userName} 
            onChange={onChange}
          />
        </div><br></br>

        <div id="pickedPasswordWrapper">
          <h4 id="pickedPasswordlLabel">Välj lösenord</h4>
          <input 
            id='pickedPasswordInput' 
            type='text' 
            name='pickedPasswordInput' 
            placeholder='Minst 8 tecken' 
            // value={userPassword}
            onChange={onChange}
          />
        </div><br></br>

        <button type="submit">Skapa konto</button>
      </form><br></br>
      
      <h5>Har du redan ett konto? Logga in här</h5>
        
        
    </div>
  )
}
