import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import mascot from '@I/svg/mascot/mascot-basic.svg';
import sal from 'sal.js';
import * as S from './styles';

function Header() {
  const [menuIsOpened, setMenuIsOpened] = useState(false);
  const history = useHistory();

  const changeUrl = (route) => {
    history.push(route);
    setMenuIsOpened(!menuIsOpened);
  };

  const NaviButton = (page, url, delay) => (
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
  );

  useEffect(() => {
    sal(
    );
  }, [menuIsOpened]);

  const headerBar = (
    <S.StyledHeader>
      <S.Logo opened={menuIsOpened} onClick={() => history.push('/')}>
        <img src={mascot} alt="mascot" width={28} height={28} />
        SNU-FESTIVAL
      </S.Logo>
      <S.MenuButton onClick={() => setMenuIsOpened(!menuIsOpened)}>
        <S.MenuButtonBar opened={menuIsOpened} />
        <S.MenuButtonBar opened={menuIsOpened} />
        <S.MenuButtonBar opened={menuIsOpened} />
      </S.MenuButton>
    </S.StyledHeader>
  );

  const openedMenu = (
    <div
      data-sal="fade"
      data-sal-easing="ease-out-back"
      data-sal-duration="800"
    >
      <S.OpenedMenu onClick={() => setMenuIsOpened(!menuIsOpened)}>
        <S.StyledHeader>
          <S.Logo opened={menuIsOpened} onClick={() => changeUrl('/')}>
            <img src={mascot} alt="mascot" width={28} height={28} />
            <div
              data-sal="fade"
              data-sal-easing="ease-out-back"
              data-sal-duration="1000"
            >
              SNU-FESTIVAL
            </div>
          </S.Logo>
        </S.StyledHeader>
        {NaviButton('메인화면', '/', 250)}
        {NaviButton('행사', '/activity', 300)}
        {NaviButton('공연', '/performance', 350)}
        {NaviButton('이벤트', '/event', 400)}
        {NaviButton('굿즈', '/goods', 450)}
        {NaviButton('축제 소개', '/introduction', 500)}
      </S.OpenedMenu>
    </div>
  );

  return (
    <S.StyledHeader>
      { menuIsOpened ? openedMenu : headerBar }
    </S.StyledHeader>
  );
}
export default Header;

Header.propTypes = {

};
