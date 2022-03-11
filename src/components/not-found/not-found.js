import React from 'react';
import styles from './not-found.module.scss';
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  const onClick = () => {
    navigate('/');
  }

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.h2}>Oops! Det verkar som att den här sidan inte finns.</h2>
      <button className={styles.ctaBtn} onClick={onClick}>GÅ TILL START</button>
    </div>
  )
};