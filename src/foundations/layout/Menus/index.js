import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import SignIn from '@I/icon/sign-in.svg';
import SignOut from '@I/icon/sign-out.svg';
import useAuth, { useUser } from '@U/hooks/useAuth';
import * as S from './styles';

function Menus({ setMenuIsOpen }) {
  const history = useHistory();
  const { isAuthorized } = useUser();
  const { signIn, signOut } = useAuth();
  const [PerformanceIsOpen, setPerformanceIsOpen] = useState(false);
  const [ActivityIsOpen, setActivityIsOpen] = useState(false);

  const changeUrl = useCallback((route) => {
    history.push(route);
    setMenuIsOpen(false);
  }, [history, setMenuIsOpen]);

  const showSubMenu = (tab) => {
    if (tab === 'performance') {
      setActivityIsOpen(false);
      setPerformanceIsOpen(!PerformanceIsOpen);
    } else if (tab === 'activity') {
      setPerformanceIsOpen(false);
      setActivityIsOpen(!ActivityIsOpen);
    }
  };

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

  const DropDownButton = (page, tab, delay) => (
    <Fade
      bottom
      duration={500}
      delay={delay}
    >
      <S.NaviText
        onClick={() => showSubMenu(tab)}
      >
        {page}
      </S.NaviText>
    </Fade>
  );

  const smallNaviButton = (page, url, delay) => (
    <Fade
      bottom
      duration={500}
      delay={delay}
    >
      <S.SmallNaviText
        onclick={() => changeUrl(url)}
      >
        {page}
      </S.SmallNaviText>
    </Fade>
  );

  const openedMenu = (
    <div style={{ width: '100%' }}>
      <Fade duration={800}>
        <S.OpenedMenu>
          {DropDownButton('공연', 'performance', 300)}
          {PerformanceIsOpen && smallNaviButton('- 폰서트 LIVE', '/performance/phonecert', 310)}
          {PerformanceIsOpen && smallNaviButton('- 힛더스테이지', '/performance/hitthestage', 320)}
          {PerformanceIsOpen && smallNaviButton('- 씽스틸러', '/performance/singstealer', 330)}
          {PerformanceIsOpen && smallNaviButton('- 관악게임토너먼트', '/performance/gwangaeto', 340)}
          {DropDownButton('행사', 'activity', 350)}
          {ActivityIsOpen && smallNaviButton('- 미니게임', '/activity/minigame', 360)}
          {ActivityIsOpen && smallNaviButton('- 단체게임', '/activity/groupgame', 370)}
          {ActivityIsOpen && smallNaviButton('- 공모전', '/activity/gongmo', 380)}
          {ActivityIsOpen && smallNaviButton('- 고릴라디오', '/activity/radio', 390)}
          {NaviButton('굿즈', '/goods', 400)}
          {NaviButton('방명록', '/guestbook', 450)}
          {NaviButton('소개', '/introduction', 500)}
        </S.OpenedMenu>
      </Fade>
    </div>
  );

  return (
    <S.StyledMenus>
      { isAuthorized && (
        <S.SignButton onClick={signOut}>
          <S.Image src={SignOut} alt="signOut" />
          <p>로그아웃</p>
        </S.SignButton>
      )}
      { !isAuthorized && (
        <S.SignButton onClick={signIn}>
          <S.Image src={SignIn} alt="signIn" />
          <p>로그인</p>
        </S.SignButton>
      )}
      {openedMenu}
    </S.StyledMenus>
  );
}
export default Menus;

Menus.propTypes = {
  setMenuIsOpen: PropTypes.func.isRequired,
};
