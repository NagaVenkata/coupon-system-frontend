import React, { useState, useEffect } from 'react';
// import gsap from 'gsap';

import styles from './how-it-works.module.scss'; 
import StepIcon1 from '../home/step-icon1';
import StepIcon2 from '../home/step-icon2';
import StepIcon3 from '../home/step-icon3';

export default function MainSection3() {
  
  // useEffect( () => {
  
  //   gsap.to('#step1', {
  //     //viewBox="0 0 738 182.767"> //default
  //     attr: {viewBox:'0 0 500 -50', width:'220'}, 
  //   });
    
  // }, []);

  return (
    <>
      <div id='stepTextWrapper' className={styles.stepTextWrapper}>
        <h3 className={styles.h3}>Så funkar det</h3>
        <p className={styles.bodyCopy}>Tre enkla steg för att skapa din brandade kupong. Vårt fantastiska team guidar dig längs vägen!</p>
      </div>
      
      <div id='stepCardsWrapper'className={styles.stepCardsWrapper} >
        <div id='stepCard1' className={styles.stepCard}>
          <StepIcon1/>
          <div className={styles.stepText}>
            <h4 className={styles.h4}>1. Logga in</h4>
            <p className={styles.bodyCopy}>Logga in i vårt verktyg! Skicka ut obegränsat med kuponger för 599 kr/mån.</p>
          </div>
        </div>

        <div id='stepCard2' className={styles.stepCard}>
          <StepIcon2/>
          <div className={styles.stepText}>
            <h4 className={styles.h4}>2. Branda kupongen</h4>
            <p className={styles.bodyCopy}>Välj hur du vill att kupongutskicket ska se ut. Designa fritt eller få stöd från våra mallar. </p>
          </div>
        </div>
        <div id='stepCard3' className={styles.stepCard}>
          <StepIcon3/>
          <div className={styles.stepText}>
            <h4 className={styles.h4}>3. Fördjupa dina målgruppsinsikter</h4>
            <p className={styles.bodyCopy}>Följ statistik över vilka som använder kupongen. Skapa nya utskickslistor baserat på tidigare beteenden.</p>
          </div>
        </div>
        
      </div>
    </>
  )
};
