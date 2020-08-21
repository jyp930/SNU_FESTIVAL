import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import mascot from '@I/svg/mascot-pink.svg';
import sal from 'sal.js';
import * as S from './styles';

function Header() {
  const [menuIsOpened, setMenuIsOpened] = useState(false);
  const history = useHistory();

  function changeUrl(route) {
    history.push(route);
    setMenuIsOpened(!menuIsOpened);
  }

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
      <S.NaviButton
        data-sal="slide-up"
        data-sal-easing="ease-out-back"
        data-sal-duration="1000"
        onClick={() => changeUrl('/')}
      >
        메인 화면
      </S.NaviButton>
      <S.NaviButton
        data-sal="slide-up"
        data-sal-easing="ease-out-back"
        data-sal-duration="1000"
        data-sal-delay="50"
        onClick={() => changeUrl('/activity')}
      >
        행사
      </S.NaviButton>
      <S.NaviButton
        data-sal="slide-up"
        data-sal-easing="ease-out-back"
        data-sal-duration="1000"
        data-sal-delay="100"
        onClick={() => changeUrl('/performance')}
      >
        공연
      </S.NaviButton>
      <S.NaviButton
        data-sal="slide-up"
        data-sal-easing="ease-out-back"
        data-sal-duration="1000"
        data-sal-delay="150"
        onClick={() => changeUrl('/event')}
      >
        이벤트
      </S.NaviButton>
      <S.NaviButton
        data-sal="slide-up"
        data-sal-easing="ease-out-back"
        data-sal-duration="1000"
        data-sal-delay="200"
        onClick={() => changeUrl('/goods')}
      >
        굿즈
      </S.NaviButton>
      <S.NaviButton
        data-sal="slide-up"
        data-sal-easing="ease-out-back"
        data-sal-duration="1000"
        data-sal-delay="250"
        onClick={() => changeUrl('/introduction')}
      >
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
