import React, { useState ,useEffect } from 'react';
import gsap from 'gsap';
import styles from './header.module.scss';
import Hamburger from './hamburger2';
import Logo from '../../img/logo';

export default function Header(props) {
  const [isUser, setIsUser] = useState(false);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    setIsUser(props.isUser);
    // console.log("isUser från header:", isUser);
  }, []);


  const onClickHamburger = () => {
    //toogle between state showing nav
    setShowNav(!showNav);

    //animate hamburger
    if (showNav === false) {
      gsap.to('#line1', {
        rotate: 45,
        y: -8,
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
        y: 15,
        x: 0.21,
  
      });
      gsap.to('#line2', {
        rotate: 0,
        y: 22,
        x: 0.21,
      });
      gsap.to('#menuText', {
        fill: '#FFFFFF',
      });
    }
  };

  return (
    <>
        <Logo />
        {/* change to toggle or add/remove classList sideNavSliderShow and sideNavSliderHide */}
        {showNav ? 
          <nav id='sideNavSlider' className={[styles.sideNavSliderShow]}> 
            <ul id='menuWrapper' className={styles.menuWrapper}>
                <li id='menuItem1' className={styles.menuItem}><a href='http://adoveo.se/'>Så funkar det</a></li>
                <li id='menuItem2' className={styles.menuItem}><a href='http://adoveo.se/'>Case</a></li>
                <li id='menuItem3' className={styles.menuItem}><a href='http://adoveo.se/'>Om oss</a></li>
                <li id='menuItem4' className={styles.menuItem}><a href='http://adoveo.se/'>Karriär</a></li>
                <li id='menuItem5' className={styles.menuItem}><a href='http://adoveo.se/'>Kontakt</a></li>
            </ul>
          </nav> : ''}

          <nav id='navHeader' className={styles.navHeader}>
            <ul id='menuWrapper' className={styles.menuWrapper}>
                <li><a className={styles.menuItem}href='http://adoveo.se/'>Så funkar det</a></li>
                <li><a className={styles.menuItem}href='http://adoveo.se/'>Case</a></li>
                <li><a className={styles.menuItem} href='http://adoveo.se/'>Kontakt</a></li>
            </ul>
          </nav>


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
        <Hamburger onClickHamburger={onClickHamburger} />
    </>
  )
};

//TODO add a href to li