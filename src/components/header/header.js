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
        <nav id='side-nav' className={styles.sideNav}>
            <ul className={styles.menuWrapper}>
                <li id='header-menu-item1'>Hem</li>
                <li id='header-menu-item2'>Såhär funkar det</li>
                <li id='header-menu-item3'>Kontakt</li>
                <li id='header-menu-item4'>Om oss</li>
            </ul>
            {/* <button id='closeNav'>X</button> */}
        </nav>

        <div className={styles.btnWrapper}>
        
        {isUser ? 
          <>
            <button>Statistik</button>
            <button>Min profil</button> 
          </> 
          : 
          <>
            <button id="register-btn-shortcut" onClick={props.onClickRegister}>Gå till skapa konto</button>
            <button id="login-btn-shortcut" onClick={props.onClickLogin}>Gå till logga in</button>
          </>
        }
        </div>
    </>
  )
};


//add a href to li

//NOTE: add multiple classNames: className={`${styles.flex} ${styles.menuWrapper}`}>