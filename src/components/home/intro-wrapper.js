import React from 'react';
import styles from './intro-wrapper.module.scss'; 


export default function IntroSection(props) {
  return (
    <div id="introWrapper" className={styles.introWrapper}>
      <h2 id="h2" className={styles.h2}>Uppvakta dina kunder med digitala kuponger!</h2>
      <p className={styles.hisspitch}>Med vårt smidiga verktyg kan du skicka ut skräddarsydda kuponger direkt till mobilen som mottagaren sedan visar upp på närmaste Pressbyrån eller 7Eleven. Hittills har 76 000 kuponger från 54 kampanjer fått flyga iväg och skapa glädje i vardagen!</p>
      <button id="ctaBtn" className={styles.ctaBtn} onClick={props.onClickRegister}>Kom igång</button>
    </div>
  )
};