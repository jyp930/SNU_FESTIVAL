import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import mascot from '@I/svg/mascot-pink.svg';
import * as S from './styles';

function Header() {
  const [menuIsOpened, setMenuIsOpened] = useState(false);
  const history = useHistory();

  function changeUrl(route) {
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
        <S.Logo opened={menuIsOpened} onClick={() => changeUrl('/')}>
          <img src={mascot} alt="mascot" width={15} height={15} />
          SNU-FESTIVAL
        </S.Logo>
        <S.MenuButton onClick={() => setMenuIsOpened(!menuIsOpened)}>
          <S.MenuButtonBar opened={menuIsOpened} />
          <S.MenuButtonBar opened={menuIsOpened} />
          <S.MenuButtonBar opened={menuIsOpened} />
        </S.MenuButton>
      </S.StyledHeader>
      <S.NaviButton onClick={() => changeUrl('/')}>
        메인 화면
      </S.NaviButton>
      <S.NaviButton onClick={() => changeUrl('/activity')}>
        행사
      </S.NaviButton>
      <S.NaviButton onClick={() => changeUrl('/performance')}>
        공연
      </S.NaviButton>
      <S.NaviButton onClick={() => changeUrl('/event')}>
        이벤트
      </S.NaviButton>
      <S.NaviButton onClick={() => changeUrl('/goods')}>
        굿즈
      </S.NaviButton>
      <S.NaviButton onClick={() => changeUrl('/introduction')}>
        축제 소개
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
