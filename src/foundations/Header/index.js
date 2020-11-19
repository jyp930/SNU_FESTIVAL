import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import mascot from '@I/svg/mascot/mascot-basic.svg';
import Fade from 'react-reveal/Fade';
import * as S from './styles';
import { preloadImage } from '@/utils/functions/preload';
import ClosingFestival from '@I/jpg/closing-festival.jpg';

function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (menuIsOpen) {
      preloadImage(ClosingFestival);
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
        src={mascot}
        alt="mascot"
      />
      <S.LogoText
        isOpen={menuIsOpen}
      >
        SNU FESTIVAL
      </S.LogoText>
    </S.Logo>
  );

  const MenuHamburger = (
    <S.MenuButton onClick={() => setMenuIsOpen(true)}>
      <S.MenuButtonBar />
      <S.MenuButtonBar />
      <S.MenuButtonBar />
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
        {/* {NaviButton('굿즈', '/goods', 450)} */}
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
