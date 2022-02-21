import React from 'react';
import styles from './main-section2.module.scss'; 
// import { gsap } from "gsap";
import BlobBackground from '../../img/blob-svg';

// import BlobSvg from './blob-svg';
export default function MainSection2() {
  return (
    <>
      <div id='ourProductWrapper' className={styles.ourProductWrapper}>
        <h3>Vår produkt</h3>
        <div>Mobile flow</div>
        <div id='mobileFrame' className={styles.mobileFrame}></div>
          {/* <img alt='iphone 11 frame' src='../../img/iphone11-frame-pinterest-vhv.png'></img> */}
          {/* <BlobBackground /> */}
      </div>

      <div id='ourClientsWrapper' className={styles.ourClientsWrapper}> 
        <div id="testimonialWrapper">
          <q>Testimonials lorem ipsum  lorem ipsum lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsum!</q>
          <p>Ivar Folkesson, Pågen</p>
        </div>
        <div id='clientLogosWrapper' className={styles.clientLogosWrapper}>
          <p>clientLogo</p>
          <p>clientLogo</p>
          <p>clientLogo</p>
        </div>
      </div>
      
    </>
  )
};
