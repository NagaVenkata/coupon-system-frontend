import React, { useState ,useEffect } from 'react';
import gsap from 'gsap';
import styles from './header.module.scss';
import Hamburger from './hamburger';
import Logo from '../../img/logo';

export default function Header(props) {
  const [isUser, setIsUser] = useState(false);
  const [showNav, setShowNav] = useState(false);
  // const [btnText, setBtnText] = useState('');


  // const line1 = document.getElementById('line1');

  useEffect(() => {
    setIsUser(props.isUser);
    // setBtnText(props.btnText);
    console.log("isUser från header:", isUser);

  }, []);


  const onClickHamburger = () => {
    //toogle between state showing nav
    setShowNav(!showNav);

    //animate hamburger
    if (showNav === false) {
      gsap.to('#line1', {
        rotate: 45,
        y: -64,
        x: -10,
  
      });
      gsap.to('#line2', {
        rotate: -45,
        // y: 36,
        x: -10,
      });
      gsap.to('#menuText', {
        // y: 36,
        // x: -26,
        fill: 'none',
      });
    } else {
      gsap.to('#line1', {
        rotate: 0,
        y: -42.5,
        x: -16,
  
      });
      gsap.to('#line2', {
        rotate: 0,
        y: -42.5,
        x: -16,
      });
      gsap.to('#menuText', {
        fill: '#FFFFFF',
      });
    }
  };

  return (
    <>
        {/* <div id='logo' className={styles.logo}>ADOVEO</div> */}
        <Logo />
        {showNav ? 
          <nav id='sideNav' className={styles.sideNav}>
            <ul id='menuWrapper' className={styles.menuWrapper}>
                <li id='headerMenuItem1' className={styles.menuItem}><a href='http://adoveo.se/'>Så funkar det</a></li>
                <li id='headerMenuItem2' className={styles.menuItem}><a href='http://adoveo.se/'>Case</a></li>
                <li id='headerMenuItem3' className={styles.menuItem}><a href='http://adoveo.se/'>Om oss</a></li>
                <li id='headerMenuItem4' className={styles.menuItem}><a href='http://adoveo.se/'>Karriär</a></li>
                <li id='headerMenuItem5' className={styles.menuItem}><a href='http://adoveo.se/'>Kontakt</a></li>
            </ul>
          </nav> : ''}


        <div className={styles.btnWrapper}>
        
        {isUser ? 
          <>
            <button id='statisticIcon' className={styles.statisticIcon}>Statistik</button>
            <button id='settingsIcon' className={styles.settingsIcon}>Min profil</button> 
          </> 
          : 
          <>
            {/* <button id='registerBtnShortcut' className={styles.registerBtnShortcut} onClick={props.onClickRegister}>Skapa konto</button> */}
            <button id='loginBtnShortcut' className={styles.loginBtnShortcut} onClick={props.onClickLogin}>{props.btnText}</button>
          </>
        }
        </div>
        <Hamburger onClickHamburger={onClickHamburger}/>
    </>
  )
};

//TODO add a href to li