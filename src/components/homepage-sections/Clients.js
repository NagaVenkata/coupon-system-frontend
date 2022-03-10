import React from 'react';
import styles from './Clients.module.scss'; 
import clientLogo from '../../img/sj-logo.gif';

export default function Clients() {

  return (
    <div id='clientsSection2' className={styles.clientsSection2}>
      <h3 className={styles.h3}>Kunder</h3>

     <div id='clientLogosWrapper' className={styles.clientLogosWrapper}>
          <div id='logoRow1' className={styles.logoRow}>
            <img id='clientLogo1' className={styles.clientLogo} alt='client logo' src={clientLogo}></img>
            <img id='clientLogo2' className={styles.clientLogo} alt='client logo' src={clientLogo}></img>
            <img id='clientLogo3' className={styles.clientLogo} alt='client logo' src={clientLogo}></img>
            <img id='clientLogo4' className={styles.clientLogo} alt='client logo' src={clientLogo}></img>
            <img id='clientLogo5' className={styles.clientLogo} alt='client logo' src={clientLogo}></img>
          </div>

          <div id='logoRow2' className={styles.logoRow}>
            <img id='clientLogo6' className={styles.clientLogo} alt='client logo' src={clientLogo}></img>
            <img id='clientLogo7' className={styles.clientLogo} alt='client logo' src={clientLogo}></img>
            <img id='clientLogo8' className={styles.clientLogo} alt='client logo' src={clientLogo}></img>
            <img id='clientLogo9' className={styles.clientLogo} alt='client logo' src={clientLogo}></img>
            <img id='clientLogo10' className={styles.clientLogo} alt='client logo' src={clientLogo}></img>
          </div>
      </div>
  </div>
)};