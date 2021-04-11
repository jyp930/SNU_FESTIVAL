import React, { useCallback } from 'react';
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

  const changeUrl = useCallback((route) => {
    history.push(route);
    setMenuIsOpen(false);
  }, [history, setMenuIsOpen]);

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

  const openedMenu = (
    <div style={{ width: '100%' }}>
      <Fade duration={800}>
        <S.OpenedMenu onClick={() => setMenuIsOpen(false)}>
          {NaviButton('공연', '/performance', 300)}
          {NaviButton('행사', '/activity', 350)}
          {NaviButton('굿즈', '/goods', 400)}
          {NaviButton('방명록', '/guestbook', 450)}
          {NaviButton('축제 소개', '/introduction', 500)}
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
