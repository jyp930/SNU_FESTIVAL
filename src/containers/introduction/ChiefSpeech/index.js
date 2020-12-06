import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';
import logo from '@I/png/logo.png';

function ChiefSpeech() {
  return (
    <S.WordsContainer>
      <S.Logo src={logo} alt="logo" />
      <S.Words>
        <h2>축하사장의 말</h2>
        <S.Content>
          안녕하세요, 21 봄축제의 축하사장을 맡은 생물교육과 권지현입니다.
          벌써 1년이라는 시간 동안 코로나로 인해 예전과 다른 오늘을 보내고 계실 여러분들께 심심한 위로를 먼저 전합니다.
          <br />
          코로나로 인해 대학 생활은 물론, 2020년 두번의 축제 또한 취소되며 우리 모두가 힘든 시간을 보내고 있습니다.
          이러한 시기에 맞서 축제하는 사람들은 새로운 시도를 하게 되었습니다.
          웹사이트를 개발하여 온라인 축체와 이벤트 등 다양한 변화를 추구하고 있습니다.
          <br />
          빠른 시일 내에 상황이 호전되기를 바라며, 지친 일상에 학우 여러분들께 작게나마 재미와 위로를 드리고자 노력하겠습니다.
          2021년 5월에 있을 봄축제에서 뵙기를 바라겠습니다.
        </S.Content>
      </S.Words>
    </S.WordsContainer>
  );
}
export default ChiefSpeech;

ChiefSpeech.propTypes = {

};
