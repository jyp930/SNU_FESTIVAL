import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import SignIn from '@I/icon/sign-in.svg';
import SignOut from '@I/icon/sign-out.svg';
import Stamp from '@I/icon/stamp.svg';
import useAuth, { useUser } from '@U/hooks/useAuth';
import * as S from './styles';

function Menus({ setMenuIsOpen }) {
  const history = useHistory();
  const { isAuthorized } = useUser();
  const { signIn, signOut } = useAuth();
  const [PerformanceIsOpen, setPerformanceIsOpen] = useState(false);
  const [ActivityIsOpen, setActivityIsOpen] = useState(false);

  // 현재는 TEST를 위해 임의로 값 배정, 이후에는 set 함수를 이용해서 값 변경 가능
  const [PhonecertStamp, setPhonecertStamp] = useState(true);
  const [HitthestageStamp, setHitthestageStamp] = useState(false);
  const [SingstealerStamp, setSingstealerStamp] = useState(true);
  const [GwangaetoStamp, setGwangaetoStamp] = useState(false);
  const [MinigameStamp, setMinigameStamp] = useState(true);
  const [GroupgameStamp, setGroupgameStamp] = useState(false);
  const [GongmoStamp, setGongmoStamp] = useState(true);
  const [RadioStamp, setRadioStamp] = useState(false);

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

  const DropDownButton = useCallback((page, tab, delay) => (
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
  ));

  const smallNaviButton = useCallback((page, url, delay) => (
    <Fade
      bottom
      duration={500}
      delay={delay}
    >
      <S.SmallNaviText
        onClick={() => changeUrl(url)}
      >
        {page}
        &nbsp;
      </S.SmallNaviText>
    </Fade>
  ), [changeUrl]);

  const inlineStamp = useCallback((delay) => (
    <Fade
      bottom
      duration={500}
      delay={delay}
    >
      <S.Image src={Stamp} alt="stamp" />
    </Fade>
  ));

  const openedMenu = (
    <div style={{ width: '100%' }}>
      <Fade duration={800}>
        <S.OpenedMenu>
          {DropDownButton('공연', 'performance', 300)}
          <S.InlineMenu>
            {PerformanceIsOpen && smallNaviButton('- 폰서트 LIVE', '/performance/phonecert', 200)}
            {PerformanceIsOpen && PhonecertStamp && inlineStamp(200)}
          </S.InlineMenu>
          <S.InlineMenu>
            {PerformanceIsOpen && smallNaviButton('- 힛더스테이지', '/performance/hitthestage', 300)}
            {PerformanceIsOpen && HitthestageStamp && inlineStamp(300)}
          </S.InlineMenu>
          <S.InlineMenu>
            {PerformanceIsOpen && smallNaviButton('- 씽스틸러', '/performance/singstealer', 400)}
            {PerformanceIsOpen && SingstealerStamp && inlineStamp(400)}
          </S.InlineMenu>
          <S.InlineMenu>
            {PerformanceIsOpen && smallNaviButton('- 관악게임토너먼트', '/performance/gwangaeto', 500)}
            {PerformanceIsOpen && GwangaetoStamp && inlineStamp(500)}
          </S.InlineMenu>
          {DropDownButton('행사', 'activity', 350)}
          <S.InlineMenu>
            {ActivityIsOpen && smallNaviButton('- 미니게임  ', '/activity/minigame', 200)}
            {ActivityIsOpen && MinigameStamp && inlineStamp(200)}
          </S.InlineMenu>
          <S.InlineMenu>
            {ActivityIsOpen && smallNaviButton('- 단체게임  ', '/activity/groupgame', 300)}
            {ActivityIsOpen && GroupgameStamp && inlineStamp(300)}
          </S.InlineMenu>
          <S.InlineMenu>
            {ActivityIsOpen && smallNaviButton('- 공모전  ', '/activity/gongmo', 400)}
            {ActivityIsOpen && GongmoStamp && inlineStamp(400)}
          </S.InlineMenu>
          <S.InlineMenu>
            {ActivityIsOpen && smallNaviButton('- 고릴라디오  ', '/activity/radio', 500)}
            {ActivityIsOpen && RadioStamp && inlineStamp(500)}
          </S.InlineMenu>
          {NaviButton('굿즈', '/goods', 400)}
          {NaviButton('방명록', '/guest-book', 450)}
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
