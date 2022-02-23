import React from 'react';
import styles from './close-btn.module.scss'; 


export default function CloseBtn(props) {
  return (
    <div>
        <svg id='closeIcon' className={styles.closeIcon} onClick={props.onClickClose} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="47.036" height="47.054" viewBox="0 0 47.036 47.054">
  <defs>
    <filter id="Rectangle_131" x="0" y="0.018" width="47.036" height="47.036" filterUnits="userSpaceOnUse">
      <feOffset dy="3" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="3" result="blur"/>
      <feFlood floodOpacity="0.302"/>
      <feComposite operator="in" in2="blur"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <filter id="Rectangle_132" x="0" y="0" width="47.036" height="47.036" filterUnits="userSpaceOnUse">
      <feOffset dy="3" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="3" result="blur-2"/>
      <feFlood floodOpacity="0.302"/>
      <feComposite operator="in" in2="blur-2"/>
      <feComposite in="SourceGraphic"/>
    </filter>
  </defs>
  <g id="closeIcon" transform="translate(-374.069 -250.964)">
    <g transform="matrix(1, 0, 0, 1, 374.07, 250.96)" filter="url(#Rectangle_131)">
      <rect id="Rectangle_131-2" data-name="Rectangle 131" width="39.063" height="2" rx="1" transform="translate(10.41 6.02) rotate(45)" fill="#0b0b09"/>
    </g>
    <g transform="matrix(1, 0, 0, 1, 374.07, 250.96)" filter="url(#Rectangle_132)">
      <rect id="Rectangle_132-2" data-name="Rectangle 132" width="39.063" height="2" rx="1" transform="translate(9 33.62) rotate(-45)" fill="#0b0b09"/>
    </g>
  </g>
</svg>

    </div>
  )
}
