import React from 'react';
import styles from './Intro-section.module.scss'; 


export default function IntroSection(props) {
  return (
    <div id="introWrapper" className={styles.introWrapper}>
      <h2 id="h2" className={styles.h2}>Uppvakta dina kunder med digitala kuponger!</h2>
      <p className={styles.hisspitch}>Skräddarsy dina kuponger i vårt smidiga verktyg. Hittills har 76 000 kuponger från 54 kampanjer fått flyga iväg och skapa glädje i vardagen!</p>
      <button id="ctaBtn" className={styles.ctaBtn} onClick={props.onClickRegister}>KOM IGÅNG</button>
    </div>
  )
};