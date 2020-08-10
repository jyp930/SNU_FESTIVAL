import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as S from './styles';

function Header() {
  const [menuIsOpened, setMenuIsOpened] = useState(false);
  const history = useHistory();

  function handleClickChangeUrl(route) {
    history.push(route);
    setMenuIsOpened(!menuIsOpened);
  }

  return (
    <S.StyledHeader>
      <div>
        그냥 로고
      </div>
      <S.MenuButton onClick={() => setMenuIsOpened(!menuIsOpened)}>
        <S.MenuButtonBar opened={menuIsOpened} />
        <S.MenuButtonBar opened={menuIsOpened} />
        <S.MenuButtonBar opened={menuIsOpened} />
      </S.MenuButton>
      { menuIsOpened
        && (
        <S.OpenedMenu>
          <S.StyledHeader>
            <div>
              그냥 로고
            </div>
            <S.MenuButton onClick={() => setMenuIsOpened(!menuIsOpened)}>
              <S.MenuButtonBar opened={menuIsOpened} />
              <S.MenuButtonBar opened={menuIsOpened} />
              <S.MenuButtonBar opened={menuIsOpened} />
            </S.MenuButton>
          </S.StyledHeader>
          메뉴열림
          <button type="button" onClick={() => handleClickChangeUrl('/')}>
            Go Home
          </button>
          <button type="button" onClick={() => handleClickChangeUrl('/activity')}>
            Go Activity
          </button>
        </S.OpenedMenu>
        )}
    </S.StyledHeader>
  );
}
export default Header;

Header.propTypes = {

};
