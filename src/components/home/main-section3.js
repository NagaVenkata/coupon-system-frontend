import React from 'react';
import styles from './main-section3.module.scss'; 

export default function MainSection3() {
  return (
    <>
      <div id='stepTextWrapper' className={styles.stepTextWrapper}>
        <h4>Så funkar det</h4>
        <p>Lorem ipsum......</p>
      </div>
      
      <div id='stepCardsWrapper'className={styles.stepCardsWrapper} >
        <div id='stepCard1' className={styles.stepCard}>
          <div className='stepIconsWrapper'>
            <div className='stepNumber'>Stepnumber</div>
            <div className='stepIcon'>Stepicon</div>
          </div>
          <h5>Steg 1-rubrik</h5>
          <p>Steg 1-text</p>
        </div>
        <div id='stepCard2' className={styles.stepCard}>
          <div className='stepIconsWrapper'>
            <div className='stepNumber'>Stepnumber</div>
            <div className='stepIcon'>Stepicon</div>
          </div>
          <h5>Steg 2-rubrik</h5>
          <p>Steg 2-text</p>
        </div>
        <div id='stepCard3' className={styles.stepCard}>
          <div className='stepIconsWrapper'>
            <div className='stepNumber'>Stepnumber</div>
            <div className='stepIcon'>Stepicon</div>
          </div>
          <h5>Steg 3-rubrik</h5>
          <p>Steg 3-text</p>
        </div>
        
      </div>
    </>
  )
};
