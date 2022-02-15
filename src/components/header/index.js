import React from 'react';
import * as Styled from './index-style';

import RegisterBtn from '../../components/button/register-btn';
import LoginBtn from '../../components/button/login-btn';

export default function Header() {

  //add if userId exist -> hide register-btn + login-btn and show statistic+accountSetting

  return (
    <Styled.Header id='header'>
    {/* <Style /> */}
        <Styled.Logo id='logo'>KaChing</Styled.Logo>
        <Styled.Nav id='header-menu'>
            <Styled.Ul>
                <li id='header-menu-item1'><Styled.A href='www.adoveo.com'>Såhär funkar det</Styled.A></li>
                <li id='header-menu-item2'><Styled.A href=''>Våra kunder</Styled.A></li>
                <li id='header-menu-item3'><Styled.A href=''>Om oss</Styled.A></li>
            </Styled.Ul>
        </Styled.Nav>
        <div className='btnWrapper'>
          <button id="register-btn">Skapa konto</button>
          <button id="login-btn">Logga in</button>
        </div>
    </Styled.Header>
  )
};

//note if want several classNames with styled components -> use props.. 