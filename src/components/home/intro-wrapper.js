import React from 'react';

export default function IntroSection(props) {
  return (
    <div id="introWrapper">
      <h2>Uppvakta dina kunder med digitala kuponger!</h2>
      <p>Med vårt smidiga verktyg kan du skicka ut skräddarsydda kuponger direkt till mobilen som mottagaren sedan visar upp på närmaste Pressbyrån eller 7Eleven.</p>
      <button id="ctaBtn" onClick={props.onClickRegister}>Kom igång</button>
    </div>
  )
};