import React, { useEffect } from 'react';
import styles from './footer.module.scss';

import Logo from '../../img/logo';
import SoMeLogos from '../../img/some-logos';

export default function Footer() {

  return (
    <div id='footerWrapper' className={styles.footerWrapper}>
      <div id='logoIconFooterWrapper' className={styles.logoIconFooterWrapper}>
        {/* <Logo /> */}
        <h1 className={styles.logo}>Adoveo</h1> 

        <h5 className={styles.footerHisspitch}>Genvägen till ökad försäljning!</h5>

        {/* <SoMeLogos /> */}
        <ul className={styles.soMeWrapper}>
          <li><a className={styles.soMeLogo} href='https://www.linkedin.com/company/adoveo/?originalSubdomain=se' target='_blank' rel="noreferrer">LinkedIn</a></li>
          <li><a className={styles.soMeLogo} href='https://www.facebook.com/adoveoteam/' target='_blank' rel="noreferrer">Facebook</a></li>
          <li><a className={styles.soMeLogo} href='https://www.instagram.com/adoveo' target='_blank' rel="noreferrer">Instagram</a></li>
        </ul>
        
      </div>
      <div id='footerColumnWrapper' className={styles.footerColumnWrapper}>
        <div id='footerColumn1' className={styles.footerColumn1}>
          <div id='helpWrapper' className={styles.helpWrapper}>
            <h5 className={styles.h5}>Hjälp</h5>
            <ul id='helpItems' className={styles.helpItems}>
              <li className={styles.footerMenuItem}>FAQ</li>
              <li className={styles.footerMenuItem}>Allmänna villkor</li>
              <li className={styles.footerMenuItem}>support@adoveo.com</li>
            </ul>
          </div>
        </div>

        <div id='footerColumn2' className={styles.footerColumn2}>
          <div id='contactWrapper' className={styles.contactWrapper}>
            <h5 className={styles.h5}>Kontakt</h5>
            <ul id='contactItems' className={styles.contactItems}>
                <li>Lovisa Wachtmeister Bååth</li>
                <li>VD och Partner</li>
                <li className={styles.footerMenuItem}>+46 712 34 56 78</li>
                <li className={styles.footerMenuItem}>lovisa@adoveo.com</li>
            </ul>
          </div>
        </div>
        <div id='footerColumn3' className={styles.footerColumn3}>
          <div id='visitWrapper' className={styles.visitWrapper}>
            <h5 className={styles.h5}>Besöksadress</h5>
            <ul id='visitItems' className={styles.visitItems}>
              <a className={styles.footerMenuItem} href='https://www.google.com/maps/place/Epicenter+Stockholm/@59.3339921,18.0641561,17z/data=!3m1!4b1!4m12!1m5!8m4!1e2!2s101202609157798314298!3m1!1e1!3m5!1s0x465f9d5e84075eb9:0xa9de6dbd76819663!8m2!3d59.3339921!4d18.0663448!16s%2Fg%2F11byp6p1b2' target='_blank' rel="noreferrer">
                <li>c/o Epicenter</li>
                <li>Mäster Samuelsgatan 36</li>
                <li>111 57 Stockholm</li>
              </a>
            </ul>
          </div>
        </div> 
        
      </div>
      <div className={styles.wrapper}>
        <h5 className={styles.h5BgColor}>Om oss</h5>
        <h5 className={styles.h5BgColor}>Karriär</h5>
      </div>


      <p id='copyrightText' className={styles.copyrightText}>Copyright © 2022 Adoveo AB. All rights reserved.</p>
    </div>
  )
};