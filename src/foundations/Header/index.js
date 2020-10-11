import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import mascot from '@I/svg/mascot/mascot-basic.svg';
import sal from 'sal.js';
import * as S from './styles';

function Header() {
  const [menuIsOpened, setMenuIsOpened] = useState(false);
  const history = useHistory();

  const changeUrl = useCallback((route) => {
    history.push(route);
    setMenuIsOpened(false);
  }, [history]);

  const NaviButton = useCallback((page, url, delay) => (
    <S.NaviButton
      data-sal="slide-up"
      data-sal-easing="ease-out-back"
      data-sal-duration="1000"
      data-sal-delay={delay}
      onClick={() => changeUrl(url)}
    >
      <S.NaviText>
        {page}
      </S.NaviText>
    </S.NaviButton>
  ), [changeUrl]);

  const Logo = (
    <S.Logo onClick={() => changeUrl('/')}>
      <S.LogoImage
        src={mascot}
        alt="mascot"
      />
      <div
        data-sal="fade"
        data-sal-easing="ease-out-back"
        data-sal-duration="1000"
      >
        <S.LogoText
          opened={menuIsOpened}
        >
          SNU-FESTIVAL
        </S.LogoText>
      </div>
    </S.Logo>
  );

  const MenuHamburger = (
    <S.MenuButton onClick={() => setMenuIsOpened(true)}>
      <S.MenuButtonBar />
      <S.MenuButtonBar />
      <S.MenuButtonBar />
    </S.MenuButton>
  );

  const HeaderBar = (
    <S.HeaderBarContainer>
      <S.HeaderBar>
        {Logo}
        {!menuIsOpened && MenuHamburger}
      </S.HeaderBar>
    </S.HeaderBarContainer>
  );

  const openedMenu = (
    <div
      data-sal="fade"
      data-sal-easing="ease-out-back"
      data-sal-duration="800"
    >
      <S.OpenedMenu onClick={() => setMenuIsOpened(false)}>
        {HeaderBar}
        {NaviButton('메인화면', '/', 250)}
        {NaviButton('행사', '/activity', 300)}
        {NaviButton('공연', '/performance', 350)}
        {NaviButton('이벤트', '/event', 400)}
        {NaviButton('축하사 지원', '/apply', 450)}
        {/* {NaviButton('굿즈', '/goods', 450)} */}
        {NaviButton('축제 소개', '/introduction', 500)}
      </S.OpenedMenu>
    </div>
  );

  useEffect(() => {
    sal();
  }, [menuIsOpened]);

  return (
    <S.StyledHeader id="Header">
      { menuIsOpened ? openedMenu : HeaderBar }
    </S.StyledHeader>
  );
}
export default Header;
