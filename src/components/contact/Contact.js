import React from 'react';
import styles from './contact.module.scss'; 
import imgContactPerson from '../../img/lovisa.png';
export default function Contact() {
  return (
    <div id='contactWrapper' className={styles.contactWrapper}>
      <h3 className={styles.h3}>Vill du veta mer?</h3>
      <p className={styles.bodyCopy}>Prata med</p>
      <p className={styles.contactPerson}>Lovisa Wachtmeister</p>
      <p className={styles.bodyCopy}>lovisa@adoveo.com</p>
      <p className={styles.bodyCopy}>+46 (0) 712 34 56 78</p>

      <img className={styles.imgContactPerson}alt='Image of CEO Lovisa' src={imgContactPerson}></img>

    </div>
  )
};
