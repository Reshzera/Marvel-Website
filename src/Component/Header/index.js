import React, { useState } from 'react';
import { CounterProduct, HeaderContainer, MobileMenuButton, PageLink } from './styles';
import { Link } from 'react-router-dom';

import Logo from '../../assets/logo.png'
import {MdOutlineMenuOpen as Menuicon, MdOutlineClose as CloseIcon, MdOutlineLogout} from 'react-icons/md'
import { useSelector } from 'react-redux';

function Header() {
  const Carrinho = useSelector(state => state.cart)
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
              <li><Link to='/colecoes' onClick={HandleMobileMenu}>Coleções</Link></li>
              <li><Link to='/carrinho' onClick={HandleMobileMenu}>Carrinho <CounterProduct display={Carrinho.length}>{Carrinho.length}</CounterProduct></Link></li>
              <li><a href='/' onClick={HandleMobileMenu}>Logout <MdOutlineLogout/></a></li>
          </PageLink>
      </HeaderContainer>
  );
}

export default Header;