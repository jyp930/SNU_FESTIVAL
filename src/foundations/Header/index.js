import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

function Header() {
  const [menuIsOpened, setMenuIsOpened] = useState(false);

  return (
    <S.StyledHeader>
      <div>
        그냥 로고
      </div>
      <S.MenuButton onClick={() => setMenuIsOpened(!menuIsOpened)}>
        <S.MenuButtonBar opened={menuIsOpened} />
        <S.MenuButtonBar opened={!menuIsOpened} />
        <S.MenuButtonBar opened={menuIsOpened} />
      </S.MenuButton>
      { menuIsOpened
        && (
        <S.OpenedMenu onClick={() => setMenuIsOpened(!menuIsOpened)}>
          메뉴열림
        </S.OpenedMenu>
        )}
    </S.StyledHeader>
  );
}
export default Header;

Header.propTypes = {

};
