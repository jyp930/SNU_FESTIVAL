import React, {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import PropTypes from 'prop-types';
import { groupRankingCollectionRef } from '@U/initializer/firebase';
import * as S from './styles';

function RankingSection() {
  const [ranking, setRanking] = useState(null);
  const rankingList = useMemo(() => ranking?.split(','), [ranking]);
  const subscribeComments = useCallback(() => groupRankingCollectionRef
    .onSnapshot(docs => {
      const firestoreRanking = [];
      docs.forEach(doc => (
        firestoreRanking.push(doc.data())));
      setRanking(firestoreRanking[0].ranking);
    }), []);
  useEffect(() => {
    const unsubscribe = subscribeComments();
    return () => unsubscribe();
  }, [subscribeComments]);

  return (
    <S.StyledRankingSection>
      <S.Title>실시간 점수</S.Title>
      {!ranking && <p>단체게임 진행 전입니다.</p>}
      {ranking && (
        <S.Table>
          <thead>
            <tr>
              <th colSpan="1">번호</th>
              <th colSpan="1">이름</th>
              <th colSpan="1">점수</th>
            </tr>
          </thead>
          <tbody>
            {rankingList.map((row, index) => {
              const splitRow = row.trim().split(':');
              return (
                <tr key={index}>
                  <td colSpan="1">{index + 1}</td>
                  <td colSpan="1">{splitRow[0].trim()}</td>
                  <td colSpan="1">{splitRow[1].trim()}</td>
                </tr>
              );
            })}
          </tbody>
        </S.Table>
      )}
    </S.StyledRankingSection>
  );
}
export default RankingSection;

RankingSection.propTypes = {

};
