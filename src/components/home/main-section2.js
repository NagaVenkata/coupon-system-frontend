import React from 'react';
import styles from './main-section2.module.scss'; 
import quoteMarks from '../../img/quote-marks.svg';
import clientLogo from '../../img/sj-logo.gif';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faCoffee } from '@fortawesome/free-solid-svg-icons'
// import { gsap } from "gsap";
// import BlobBackground from '../../img/blob-svg';
// import BlobSvg from './blob-svg';

export default function MainSection2() {

  const onClick = () => {
    document.getElementById('mobileFlow').classList.toggle(`${styles.mobileFlow2}`);
  };

  return (
    <>
      <div id='ourProductWrapper' className={styles.ourProductWrapper}>
        <h3 className={styles.h3}>Vår produkt</h3>
        <p className={styles.mobilePreviewText}>Klicka runt på mobilen för att testa vårt flöde!</p>
        <div id='mobileFlow' className={styles.mobileFlow1} onClick={onClick}></div>
        <div id='mobileFrame' className={styles.mobileFrame}></div>
          {/* <BlobBackground /> */}
      </div>

      <div id='ourClientsWrapper' className={styles.ourClientsWrapper}> 
        <div id='clientsSection1' className={styles.clientsSection1}>
          <img id='quoteMarks' className={styles.quoteMarks} alt='quotation marks' src={quoteMarks}></img>
          <div id="testimonialWrapper" className={styles.testimonialWrapper} >
            <q className={styles.quote} >30 minuter senare hade vi skickat ut 480 kuponger till alla våra anställda! Ett fint sätt att i vardagen ge pepp och visa uppskattning!</q>
            <p>Pär Nyberg, HR-chef Göteborgs Kex</p>
          </div>
        </div>
        <div id='clientsSection2' className={styles.clientsSection2}>
          <h4 className={styles.h4}>Några av våra kunder</h4>
          <div id='clientLogosWrapper' className={styles.clientLogosWrapper}>
            <img id='clientLogo1' className={styles.clientLogo} alt='client logo' src={clientLogo}></img>
            <img id='clientLogo2' className={styles.clientLogo} alt='client logo' src={clientLogo}></img>
            <img id='clientLogo3' className={styles.clientLogo} alt='client logo' src={clientLogo}></img>
            <img id='clientLogo4' className={styles.clientLogo} alt='client logo' src={clientLogo}></img>
            <img id='clientLogo5' className={styles.clientLogo} alt='client logo' src={clientLogo}></img>
            <img id='clientLogo6' className={styles.clientLogo} alt='client logo' src={clientLogo}></img>
            <img id='clientLogo7' className={styles.clientLogo} alt='client logo' src={clientLogo}></img>
            <img id='clientLogo8' className={styles.clientLogo} alt='client logo' src={clientLogo}></img>
            <img id='clientLogo9' className={styles.clientLogo} alt='client logo' src={clientLogo}></img>
            <img id='clientLogo10' className={styles.clientLogo} alt='client logo' src={clientLogo}></img>
          </div>
        </div>
      </div>
    </>
  )
};