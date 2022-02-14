import React from 'react';
import * as Styled from './create-account-style';

export default function CreateAccount() {
  return (
    <Styled.ColumnWrapperR id='column-wrapper-R'>
        <h3>Skapa gratiskonto</h3>
        <p>Första steget för att kunna skapa skräddarsydda kupongutskick är att skapa ett konto. Det är gratis!</p>
        <form> 
            <label id='label-user-email'>Din email:</label> 
            <input type='email' id='user-email' name='user-email' placeholder='example@mail.com'/>

            <label id='label-user-password'>Välj lösenord:</label> 
            <input type='text' id='user-password' name='user-password' placeholder='Minst 8 tecken'/>

            <Styled.TermsWrapper id="termsWrapper">
              <Styled.TermsCheckbox id='checkbox'></Styled.TermsCheckbox>
              <p>Jag godkänner villkoren Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </Styled.TermsWrapper>
            
        </form>
        
    </Styled.ColumnWrapperR>
  )
};
