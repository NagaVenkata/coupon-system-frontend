import React, { useState ,useEffect } from 'react';
import styles from './header.module.scss';

export default function Header(props) {
  const [isUser, setIsUser] = useState(false);

  useEffect(() => {
    setIsUser(props.isUser);
    console.log("isUser från header:", isUser);
  }, []);

  return (
    <>
        <div id='logo' className={styles.logo}>KaChing</div>
        {/* <button id="hamburger">hamIcon</button> */}
        <nav id='sideNav' className={styles.sideNav}>
            <ul id='menuWrapper' className={styles.menuWrapper}>
                <li id='header-menu-item1'>Så funkar det</li>
                <li id='header-menu-item2'>Kontakt</li>
                <li id='header-menu-item3'>Om oss</li>
            </ul>
            {/* <button id='closeNav'>X</button> */}
        </nav>

        <div className={styles.btnWrapper}>
        
        {isUser ? 
          <>
            <button id='statisticIcon' className={styles.statisticIcon}>Statistik</button>
            <button id='settingsIcon' className={styles.settingsIcon}>Min profil</button> 
          </> 
          : 
          <>
            <button id='registerBtnShortcut' className={styles.registerBtnShortcut} onClick={props.onClickRegister}>Skapa konto</button>
            <button id='loginBtnShortcut' className={styles.loginBtnShortcut} onClick={props.onClickLogin}>Logga in</button>
          </>
        }
        </div>
    </>
  )
};

//TODO add a href to li