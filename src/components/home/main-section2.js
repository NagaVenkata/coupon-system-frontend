import React, { useState } from 'react';
import styles from './main-section2.module.scss'; 
import QuoteMark from '../../img/quote-mark.js';
import clientLogo from '../../img/sj-logo.gif';
import RightArrow from '../../img/right-arrow';


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
        {/* <div id='ourProductContentWrapper' className={styles.ourProductContentWrapper}> */}
          <h3 className={styles.h3}>Vår produkt</h3>
          <p className={styles.bodyCopy}>Klicka runt på mobilen för att testa vårt flöde!</p>
          <div id='mobileWrapper' className={styles.mobileWrapper}>
            <div id='mobileFlow' className={styles.mobileFlow1} onClick={onClick}></div>
            <div id='mobileFrame' className={styles.mobileFrame}></div>
          </div>
        {/* </div> */}
      </div>

      {/* <div id='ourClientsWrapper' className={styles.ourClientsWrapper}>  */}
        {/* <div id='clientsSection1' className={styles.clientsSection1}> */}

          <div id="testimonialWrapper" className={styles.testimonialWrapper} >
            <QuoteMark />
            <p className={styles.quote} >30 minuter senare hade vi skickat ut 480 kuponger till alla våra anställda! Ett fint sätt att i vardagen ge pepp och visa uppskattning!</p>
            {/* <QuoteMark /> */}
            <p className={styles.bodyCopyLight}>Pär Nyberg, HR-chef Göteborgs Kex</p>
          </div>
        {/* </div> */}
        
      {/* </div> */}
    </>
  )
};