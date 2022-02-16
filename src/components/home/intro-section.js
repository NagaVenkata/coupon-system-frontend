import React from 'react';

// import DemoBtn from '../../components/button/demo-btn';
// import CreateAccount from '../../components/main/create-account';

export default function IntroSection(props) {
  return (
    <div id="welcome-wrapper">
      <h2>Skicka SMS-kuponger direkt till dina kunders mobiler! </h2>
      <p>Branda din kupong i vårt enkla verktyg, ladda upp din utskickslista och visa uppskattning till dina kunder, anställda eller ”prospects”.</p>
      <button id="cta-btn" onClick={props.onClickRegister}>Kom igång</button>
    </div>
  )
};