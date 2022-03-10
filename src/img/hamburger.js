import React from 'react';
import styles from '../components/header/Header.module.scss';

export default function Hamburger(props) {

  return (
    <>
        <svg id='hamburger' className={styles.hamburger} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="117" height="80" viewBox="0 0 117 80" onClick={props.onClickHamburger}>
        <defs>
          <filter id="Path_83" x="0" y="0" width="117" height="80" filterUnits="userSpaceOnUse">
            <feOffset dy="3" input="SourceAlpha"/>
            <feGaussianBlur stdDeviation="3" result="blur"/>
            <feFlood floodOpacity="0.702"/>
            <feComposite operator="in" in2="blur"/>
            <feComposite in="SourceGraphic"/>
          </filter>
        </defs>
        <g id="Component_67_9" data-name="Component 67 – 9" transform="translate(9 6)">
          <g transform="matrix(1, 0, 0, 1, -9, -6)" filter="url(#Path_83)">
            <g id="menuBackground" className={styles.menuBackground} data-name="Path 83" transform="translate(9 6)" fill="#31354b">
              <path d="M 98 61 L 1 61 L 1 1 L 98 1 L 98 61 Z" stroke="none"/>
              <path d="M 2 2 L 2 60 L 97 60 L 97 2 L 2 2 M 0 0 L 99 0 L 99 62 L 0 62 L 0 0 Z" stroke="none" fill="#31354b"/>
            </g>
          </g>
          <g id="Group_71" data-name="Group 71" transform="translate(19.211 19)">
            <rect id="line2" data-name="Rectangle 213" width="42" height="2" transform="translate(-0.211 22)" fill="#fff"/>
            <rect id="line1" data-name="Rectangle 214" width="42" height="2" transform="translate(-0.21 15)" fill="#fff"/>
            <text id="menuText" transform="translate(-0.21 10)" fill="#fff" fontSize="16" fontFamily="Inter-Regular, Inter"><tspan x="0" y="0">Meny</tspan></text>
          </g>
        </g>
      </svg>
      
    </>
  )
}
