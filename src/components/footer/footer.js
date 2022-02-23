import React from 'react';
import styles from './footer.module.scss';
import Logo from '../../img/logo';


export default function Footer() {
  return (
    <div id='backgroundImgFooter' className={styles.backgroundImgFooter}>
      <div id='logoIconFooterWrapper' className={styles.logoIconFooterWrapper}>
        <Logo />
        <div id='soMeWrapper' className={styles.soMeWrapper}>
          <div id='liIcon'>LinkedIn</div>
          <div id='fbIcon'>Facebook</div>
          <div id='igIcon'>Instagram</div>
        </div>
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
              <li className={styles.footerMenuItem}>c/o Epicenter</li>
              <li className={styles.footerMenuItem}>Mäster Samuelsgatan 36</li >
              <li className={styles.footerMenuItem}>111 57 Stockholm</li>
            </ul>
          </div>
        </div> 
      </div>
      <p id='copyrightText' className={styles.copyrightText}>Copyright © 2022 Adoveo AB. All rights reserved.</p>
    </div>
  )
};