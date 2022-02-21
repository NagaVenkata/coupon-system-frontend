import React from 'react';
import styles from './main-section3.module.scss'; 

export default function MainSection3() {
  return (
    <>
      <div id='stepTextWrapper' className={styles.stepTextWrapper}>
        <h3 className={styles.h3}>Så funkar det</h3>
        <p>Följ dessa tre steg för att komma igång. Tveka inte att höra av dig till oss om du får frågor längs vägen - vi stöttar dig i hamn!</p>
      </div>
      
      <div id='stepCardsWrapper'className={styles.stepCardsWrapper} >
        <div id='stepCard1' className={styles.stepCard}>
          <div className='stepIconsWrapper'>
            <div className='stepNumber'>Stepnumber</div>
            <div className='stepIcon'>Stepicon</div>
          </div>
          <h5>Logga in</h5>
          <p>Logga in i vårt verktyg! Skicka ut obegränsat med kuponger för 599 kr/mån.</p>
        </div>
        <div id='stepCard2' className={styles.stepCard}>
          <div className='stepIconsWrapper'>
            <div className='stepNumber'>Stepnumber</div>
            <div className='stepIcon'>Stepicon</div>
          </div>
          <h5>Branda kupongen</h5>
          <p>Välj hur du vill att kupongutskicket ska se ut. Designa fritt eller få stöd från våra mallar. </p>
        </div>
        <div id='stepCard3' className={styles.stepCard}>
          <div className='stepIconsWrapper'>
            <div className='stepNumber'>Stepnumber</div>
            <div className='stepIcon'>Stepicon</div>
          </div>
          <h5>Fördjupa dina insikter om din målgrupp</h5>
          <p>Följ statistik över vilka som använder kupongen. Skapa nya utskickslistor baserat på tidigare beteenden.</p>
        </div>
        
      </div>
    </>
  )
};
