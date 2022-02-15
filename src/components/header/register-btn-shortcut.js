import React from 'react';

export default function RegisterBtnShortcut() {

  const onClick = () => {
    console.log("klick, visa registreringsdiv");
  };

  return (
    <button id="register-btn-shortcut" onClick={onClick}>Gå till skapa konto</button>
  )
};
