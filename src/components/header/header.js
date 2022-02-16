import React, { useState ,useEffect } from 'react';
import styles from './header.module.css';

export default function Header(props) {
  
  return (
    <header id='header' className={styles.headerWrapper}>
        <div id='logo'>KaChing</div>
        <nav id='header-menu'>
            <ul className={styles.menuWrapper}>
                <li id='header-menu-item1'>Hem</li>
                <li id='header-menu-item2'>Såhär funkar det</li>
                <li id='header-menu-item3'>Kontakt</li>
                <li id='header-menu-item4'>Om oss</li>
            </ul>
        </nav>
        <div className='btnWrapper'>
        
          <button id="register-btn-shortcut" onClick={props.onClickRegister}>Gå till skapa konto</button>

          <button id="login-btn-shortcut" onClick={props.onClickLogin}>Gå till logga in</button>

        </div>
    </header>
  )
};


//add a href to li

//NOTE: add multiple classNames: className={`${styles.flex} ${styles.menuWrapper}`}>