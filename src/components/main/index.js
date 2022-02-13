import React from 'react';
import * as Styled from './index-style';

import DemoBtn from '../button/demo-btn';
import CreateAccount from './create-account';

export default function Main() {
  return (
    <main id='main'>
      <Styled.ColumnWrapper id="column-wrapper">
        <Styled.ColumnWrapperL id='column-wrapper-L'>
          <h2>Skicka SMS-kuponger direkt till dina kunders mobiler! </h2>
          <p>Branda din kupong i vårt enkla verktyg, ladda upp din utskickslista och visa uppskattning till dina kunder, anställda eller ”prospects”.</p>
          <DemoBtn />
        </Styled.ColumnWrapperL>
        <CreateAccount />
      </Styled.ColumnWrapper>
    </main>
  )
};