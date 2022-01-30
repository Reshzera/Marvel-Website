import React, { useState } from 'react';
import { HeaderContainer, MobileMenuButton, PageLink } from './styles';
import { Link } from 'react-router-dom';

import Logo from '../../assets/logo.png'
import {MdOutlineMenuOpen as Menuicon, MdOutlineClose as CloseIcon, MdOutlineLogout} from 'react-icons/md'

function Header() {
  const [showMobile, setshowMobile] = useState(false)
  const HandleMobileMenu = () => {
      setshowMobile(!showMobile)
  }
  return (
      <HeaderContainer>
          <Link to='/'><img src={Logo} alt='Link'/></Link>
          <MobileMenuButton show={showMobile}>
                {showMobile ? <CloseIcon color='#b11100' size="35" onClick={HandleMobileMenu}/> : <Menuicon color='white' size="35" onClick={HandleMobileMenu}/>}
          </MobileMenuButton>
          <PageLink show={showMobile}>
              <li><Link to='/sobre' onClick={HandleMobileMenu}>Sobre</Link></li>
              <li><Link to='/carrinho' onClick={HandleMobileMenu}>Carrinho</Link></li>
              <li><Link to='/colecoes' onClick={HandleMobileMenu}>Coleções</Link></li>
              <li><Link to='/logout' onClick={HandleMobileMenu}>Logout <MdOutlineLogout/></Link></li>
          </PageLink>
      </HeaderContainer>
  );
}

export default Header;