import React from 'react';
import * as Styled from './index-style';

export default function Footer() {
  return (
    <Styled.Footer id='footer'>
        <div>
          <h4>Hjälp</h4>
          <ul>
              <li>Vanliga frågor och svar</li>
              <li>Allmänna villkor</li>
              <li>support@adoveo.com</li>
          </ul>
        </div>

        <div>
          <h4>Besöksadress</h4>
          <ul>
              <li>c/o Epicenter</li>
              <li>Mäster Samuelsgatan 36</li>
              <li>111 57 Stockholm</li>
          </ul>
        </div>

        <div>
          <h4>Kontakt</h4>
          <ul>
              <li>Lovisa Wachtmeister Bååth</li>
              <li>VD och Partner</li>
              <li>+46 712 34 56 78</li>
              <li>lovisa@adoveo.com</li>
          </ul>
        </div>
        <Styled.SomeIconWrapper id="some-icon-wrapper">
          <p>li</p>
          <p>fb</p>
          <p>ig</p>
        </Styled.SomeIconWrapper>

    </Styled.Footer>
  )
};