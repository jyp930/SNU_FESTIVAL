import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import MascotInFolder from '@I/svg/mascot/mascot-in-folder.svg';
import Fade from 'react-reveal/Fade';
import { preloadImage } from '@U/functions/preload';
import LogoImage from '@I/png/logo.png';
import ClosingFestival from '@I/jpg/closing-festival.jpg';
import * as S from './styles';

function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (menuIsOpen) {
      [LogoImage, ClosingFestival].forEach(preloadImage);
    }
  }, [menuIsOpen]);

  const changeUrl = useCallback((route) => {
    history.push(route);
    setMenuIsOpen(false);
  }, [history]);

  const NaviButton = useCallback((page, url, delay) => (
    <Fade
      bottom
      duration={500}
      delay={delay}
    >
      <S.NaviText
        onClick={() => changeUrl(url)}
      >
        {page}
      </S.NaviText>
    </Fade>
  ), [changeUrl]);

  const Logo = (
    <S.Logo onClick={() => changeUrl('/')}>
      <S.LogoImage
        src={MascotInFolder}
        alt="mascot"
      />
    </S.Logo>
  );

  const MenuHamburger = (
    <S.MenuButton onClick={() => setMenuIsOpen(true)}>
      <S.MenuButtonBar width="100%" />
      <S.MenuButtonBar width="66%" />
      <S.MenuButtonBar width="33%" />
    </S.MenuButton>
  );

  const HeaderBar = (
    <S.HeaderBarContainer isOpen={menuIsOpen}>
      <S.HeaderBar>
        {Logo}
        {!menuIsOpen && MenuHamburger}
      </S.HeaderBar>
    </S.HeaderBarContainer>
  );

  const openedMenu = (
    <Fade duration={800}>
      <S.OpenedMenu onClick={() => setMenuIsOpen(false)}>
        {NaviButton('메인화면', '/', 250)}
        {NaviButton('행사', '/activity', 300)}
        {NaviButton('공연', '/performance', 350)}
        {NaviButton('이벤트', '/event', 400)}
        {NaviButton('축하사 지원', '/apply', 450)}
        {NaviButton('축제 소개', '/introduction', 500)}
      </S.OpenedMenu>
    </Fade>
  );

  return (
    <S.StyledHeader id="Header">
      {HeaderBar}
      {menuIsOpen && openedMenu}
    </S.StyledHeader>
  );
}
export default Header;
