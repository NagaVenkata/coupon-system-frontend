import React from 'react';
import styles from './main-section2.module.scss'; 


export default function MainSection2() {
  return (
    <>
    <div id='ourProductWrapper' className={styles.ourProductWrapper}>
      <div>Blob bakgrund</div>
      <h3>Vår produkt</h3>
      <div>Mobile flow</div>
      <div>Card slider</div>
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
