import React from 'react';
import styles from './header.module.css';

export default function Header() {

  //add if userId exist -> hide register-btn + login-btn and show statistic+accountSetting

  return (
    <div id='header' className={styles.headerWrapper}>
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
          <button id="register-btn">Skapa konto</button>
          <button id="login-btn">Logga in</button>
        </div>
    </div>
  )
};

//note if want several classNames with styled components -> use props.. 
//add a href to li

//NOTE: add multiple classNames: className={`${styles.flex} ${styles.menuWrapper}`}>