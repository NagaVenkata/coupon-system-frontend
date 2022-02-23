import React from 'react';
import styles from './header.module.scss';

export default function Hamburger(props) {

  return (
    <>
        <svg id='hamburger' className={styles.hamburger} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="72" height="74" viewBox="0 0 72 74" onClick={props.onClickHamburger}>
            <defs>
                <filter id="Rectangle_56" x="7.055" y="36.5" width="57.063" height="20" filterUnits="userSpaceOnUse">
                <feOffset dy="3" input="SourceAlpha"/>
                <feGaussianBlur stdDeviation="3" result="blur"/>
                <feFlood floodOpacity="0.302"/>
                <feComposite operator="in" in2="blur"/>
                <feComposite in="SourceGraphic"/>
                </filter>

                <filter id="Rectangle_130" x="7" y="43.606" width="57.063" height="20" filterUnits="userSpaceOnUse">
                <feOffset dy="3" input="SourceAlpha"/>
                <feGaussianBlur stdDeviation="3" result="blur-2"/>
                <feFlood floodOpacity="0.302"/>
                <feComposite operator="in" in2="blur-2"/>
                <feComposite in="SourceGraphic"/>
                </filter>
            </defs>

            <g id="circle" data-name="Ellipse 38" fill="#0b0b09" stroke="#0b0b09" strokeWidth="1">
                <ellipse cx="36" cy="37" rx="36" ry="37" stroke="none"/>
                <ellipse cx="36" cy="37" rx="35.5" ry="36.5" fill="none"/>
            </g>

            <g id="Group_41" data-name="Group 41" transform="translate(-363.44 -224.394)">
                <g id="Component_35_4" data-name="Component 35 – 4" transform="translate(379.44 266.894)">

                <g id="line1" transform="matrix(1, 0, 0, 1, -16, -42.5)" filter="url(#Rectangle_56)">
                    <rect id="Rectangle_56-2" data-name="Rectangle 56" width="39.063" height="2" rx="1" transform="translate(16.06 42.5)" fill="#fff"/>
                </g>

                <g id="line2" transform="matrix(1, 0, 0, 1, -16, -42.5)" filter="url(#Rectangle_130)">
                    <rect id="Rectangle_130-2" data-name="Rectangle 130" width="39.063" height="2" rx="1" transform="translate(16 49.61)" fill="#fff"/>
                </g>
                </g>
                <text id="menuText" transform="translate(381.44 261.394)" fill="#fff" fontSize="14" fontFamily="Mulish-Regular, Mulish"><tspan x="0" y="0">Meny</tspan></text>
            </g>
        </svg>
    </>
  )
}
