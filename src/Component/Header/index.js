import React, { useState } from 'react';
import { HeaderContainer, MobileMenuButton, PageLink } from './styles';

import Logo from '../../assets/logo.png'
import {MdOutlineMenuOpen as Menuicon, MdOutlineClose as CloseIcon, MdOutlineLogout} from 'react-icons/md'

function Header() {
  const [showMobile, setshowMobile] = useState(false)
  const HandleMobileMenu = () => {
      setshowMobile(!showMobile)
  }
  return (
      <HeaderContainer>
          <a href='/'><img src={Logo} alt='a'/></a>
          <MobileMenuButton show={showMobile}>
                {showMobile ? <CloseIcon color='#b11100' size="35" onClick={HandleMobileMenu}/> : <Menuicon color='white' size="35" onClick={HandleMobileMenu}/>}
          </MobileMenuButton>
          <PageLink show={showMobile}>
              <li><a href='/sobre'>Sobre</a></li>
              <li><a href='/carrinho'>Carrinho</a></li>
              <li><a href='/colecoes'>Coleções</a></li>
              <li><a href='/logout'>Logout <MdOutlineLogout/></a></li>
          </PageLink>
      </HeaderContainer>
  );
}

export default Header;