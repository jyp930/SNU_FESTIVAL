import React, { useCallback, useMemo } from 'react';
import useInput from '@U/hooks/useInput';
import { toast } from 'react-toastify';
import * as S from './styles';

const answers = ['삐딱하게', '봄날', '2002', '오랜날오랜밤', '라일락'];

function Answer() {
  const { value: first, onChange: onChangeFirst } = useInput('', answerConstraint);
  const { value: second, onChange: onChangeSecond } = useInput('', answerConstraint);
  const { value: third, onChange: onChangeThird } = useInput('', answerConstraint);

  const correctAnswers = useMemo(() => (
    new Set([first, second, third].filter(answer => answers.includes(answer)))
  ), [first, second, third]);

  const submit = useCallback(() => {
    const correctCount = correctAnswers.size;
    if (correctCount < 3) {
      toast(`오답입니다😅 (${correctCount}/3)`);
    } else {

    }
  }, [correctAnswers]);

  return (
    <S.StyledAnswer>
      <S.Inputs>
        <S.InputBox placeholder="뭐게요" value={first} onChange={onChangeFirst} />
        <S.InputBox placeholder="맞혀봐요" value={second} onChange={onChangeSecond} />
        <S.InputBox placeholder="응?" value={third} onChange={onChangeThird} />
      </S.Inputs>
      <S.Button onClick={submit}>정답!</S.Button>
    </S.StyledAnswer>
  );
}
export default Answer;

Answer.propTypes = {

};

function answerConstraint(value) {
  const regex = /^[ㄱ-ㅎ가-힣0-9]*$/;
  return value.length <= 6 && regex.test(value);
}
