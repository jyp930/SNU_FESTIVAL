import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import Treasure from '@I/activity/treasure-hunt/treasure.png';
import { useHistory } from 'react-router';
import * as S from './styles';

function TreasureGuide({ password, url }) {
  const history = useHistory();
  const goToPage = useCallback(() => {
    history.push(url);
  }, [history, url]);

  return (
    <S.StyledTreasureGuide>
      <img src={Treasure} alt="보물" />
      <p>{password}</p>
      <S.Button onClick={goToPage}>다음 장소로 가기</S.Button>
    </S.StyledTreasureGuide>
  );
}
export default TreasureGuide;

TreasureGuide.propTypes = {
  password: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
