import React from 'react';
import styles from './footer.module.scss';

export default function Footer() {
  return (
    <div id='backgroundImgFooter' className={styles.backgroundImgFooter}>
      <div id='logoIconFooterWrapper' className={styles.logoIconFooterWrapper}>
        <div id='logoFooter'>KaChing</div>
        <div id='soMeWrapper' className={styles.soMeWrapper}>
          <div id='liIcon'>Li</div>
          <div id='fbIcon'>Fb</div>
          <div id='igIcon'>Ig</div>
        </div>
      </div>
      <div id='footerColumnWrapper' className={styles.footerColumnWrapper}>
        <div id='footerColumn1' className={styles.footerColumn1}>
          <div id='helpWrapper' className={styles.helpWrapper}>
            <h6>Hjälp</h6>
            <ul id='helpItems' className={styles.helpItems}>
                <li>FAQ</li>
                <li>Allmänna villkor</li>
                <li>support@adoveo.com</li>
            </ul>
          </div>
        </div>

        <div id='footerColumn2' className={styles.footerColumn2}>
          <div id='contactWrapper' className={styles.contactWrapper}>
            <h6>Kontakt</h6>
            <ul id='contactItems' className={styles.contactItems}>
                <li>Lovisa Wachtmeister Bååth</li>
                <li>VD och Partner</li>
                <li>+46 712 34 56 78</li>
                <li>lovisa@adoveo.com</li>
            </ul>
          </div>
        </div>
        <div id='footerColumn3' className={styles.footerColumn3}>
          <div id='visitWrapper' className={styles.visitWrapper}>
            <h6>Besöksadress</h6>
            <ul id='visitItems' className={styles.visitItems}>
                <li>c/o Epicenter</li>
                <li>Mäster Samuelsgatan 36</li >
                <li>111 57 Stockholm</li>
            </ul>
          </div>
        </div> 
      </div>
      <p id='copyrightText' className={styles.copyrightText}>Copyright © 2022 Adoveo AB. All rights reserved.</p>
    </div>
  )
};