import React, { useEffect, useState } from 'react';
import styles from '../components/home/main-section2.module.scss';
import { gsap } from "gsap";

export default function QuoteMark() {
  //TODO rotate only first quote, ATM rotating both
  useEffect( () => {
      gsap.to('#quoteMark',  {
        rotate: 180,
      });
  }, []);

  return (
    <>
      <svg id="quoteMark" className={styles.quoteMark}xmlns="http://www.w3.org/2000/svg" width="52" height="60" viewBox="0 0 52 60">
        <text id="_" data-name="”" transform="translate(0 114)" fill="#b1fea7" fontSize="120" fontFamily="HelveticaNeue, Helvetica Neue"><tspan x="0" y="0">”</tspan></text>
      </svg>
    </>
  )
}
