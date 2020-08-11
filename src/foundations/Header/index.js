import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import mascot from '@/static/image/svg/mascot-pink.svg';
import * as S from './styles';

function Header() {
  const [menuIsOpened, setMenuIsOpened] = useState(false);
  const history = useHistory();

  function handleClickChangeUrl(route) {
    history.push(route);
    setMenuIsOpened(!menuIsOpened);
  }

  const headerBar = (
    <S.StyledHeader>
      <S.Logo opened={menuIsOpened} onClick={() => history.push('/')}>
        <img src={mascot} alt="mascot" width={15} height={15} />
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
    <S.OpenedMenu>
      <S.StyledHeader>
        <S.Logo opened={menuIsOpened} onClick={() => handleClickChangeUrl('/')}>
          <img src={mascot} alt="mascot" width={15} height={15} />
          SNU-FESTIVAL
        </S.Logo>
        <S.MenuButton onClick={() => setMenuIsOpened(!menuIsOpened)}>
          <S.MenuButtonBar opened={menuIsOpened} />
          <S.MenuButtonBar opened={menuIsOpened} />
          <S.MenuButtonBar opened={menuIsOpened} />
        </S.MenuButton>
      </S.StyledHeader>
      <S.NaviButton onClick={() => handleClickChangeUrl('/')}>
        Home
      </S.NaviButton>
      <S.NaviButton onClick={() => handleClickChangeUrl('/activity')}>
        Activity
      </S.NaviButton>
      <S.NaviButton onClick={() => handleClickChangeUrl('/performance')}>
        Performance
      </S.NaviButton>
      <S.NaviButton onClick={() => handleClickChangeUrl('/event')}>
        Event
      </S.NaviButton>
      <S.NaviButton onClick={() => handleClickChangeUrl('/goods')}>
        Goods
      </S.NaviButton>
      <S.NaviButton onClick={() => handleClickChangeUrl('/introduction')}>
        Introduction
      </S.NaviButton>
    </S.OpenedMenu>
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
