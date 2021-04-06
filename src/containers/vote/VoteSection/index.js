import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import Carousel from '@F/carousel/Carousel';
import { PHONE_CERT_LIST as VARIABLE_PHONE_CERT_LIST, SING_STEALER_LIST as VARIABLE_SING_STEALER_LIST } from '@C/vote/VoteSection/variables';
import PopupModal from '@F/modal/PopupModal';
import FilledHeart from '@I/icon/filled-heart.svg';
import EmptyHeart from '@I/icon/empty-heart.svg';
import withUser from '@U/hoc/withUser';
import { toast } from 'react-toastify';
import * as S from './styles';

const PHONE_CERT = 0;
const SING_STEALER = 1;

export function VoteSection({
  theme, isMobile, user, isAuthorized, haveVotedForPhoneCert, haveVotedForSingStealer,
}) {
  const PHONE_CERT_LIST = VARIABLE_PHONE_CERT_LIST;
  const SING_STEALER_LIST = VARIABLE_SING_STEALER_LIST;

  // 공연 정보
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPerformance, setCurrentPerformance] = useState(PHONE_CERT);
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentItem = useMemo(() => (
    currentPerformance === PHONE_CERT ? PHONE_CERT_LIST[currentIndex] : SING_STEALER_LIST[currentIndex]
  ), [currentPerformance, currentIndex, PHONE_CERT_LIST, SING_STEALER_LIST]);
  useEffect(() => {
    setCurrentIndex(0);
  }, [currentPerformance]);

  // 투표 정보
  const isDisableToVote = useMemo(() => (
    currentPerformance === PHONE_CERT
      ? !isAuthorized || haveVotedForPhoneCert
      : !isAuthorized || haveVotedForSingStealer
  ), [currentPerformance, haveVotedForPhoneCert, haveVotedForSingStealer, isAuthorized]);
  const [myLikesForPhoneCert, setMyLikesForPhoneCert] = useState([]);
  const [myLikesForSingStealer, setMyLikesForSingStealer] = useState([]);
  const myLikesForCurrentPerformance = useMemo(() => (
    currentPerformance === PHONE_CERT ? myLikesForPhoneCert : myLikesForSingStealer
  ), [currentPerformance, myLikesForSingStealer, myLikesForPhoneCert]);
  const ILikeCurrentItem = useMemo(() => (
    myLikesForCurrentPerformance.includes(currentItem.performanceId)
  ), [myLikesForCurrentPerformance, currentItem]);

  const cancelLike = () => {
    if (currentPerformance === PHONE_CERT) {
      setMyLikesForPhoneCert(state => state.filter(item => item !== currentItem.performanceId));
    } else {
      setMyLikesForSingStealer(state => state.filter(item => item !== currentItem.performanceId));
    }
  };
  const addLike = () => {
    if (currentPerformance === PHONE_CERT) {
      if (myLikesForPhoneCert.length >= 3) {
        toast('투표는 최대 3팀까지 할 수 있습니다.');
      } else {
        setMyLikesForPhoneCert(state => [...state, currentItem.performanceId]);
      }
    } else if (myLikesForSingStealer.length >= 3) {
      toast('투표는 최대 3팀까지 할 수 있습니다.');
    } else {
      setMyLikesForSingStealer(state => [...state, currentItem.performanceId]);
    }
  };

  return (
    <S.StyledVoteSection>
      <S.Tab>
        <S.TabItem
          onClick={() => setCurrentPerformance(PHONE_CERT)}
          isSelected={currentPerformance === PHONE_CERT}
        >
          폰서트LIVE
        </S.TabItem>
        <p>|</p>
        <S.TabItem
          onClick={() => setCurrentPerformance(SING_STEALER)}
          isSelected={currentPerformance === SING_STEALER}
        >
          씽스틸러
        </S.TabItem>
      </S.Tab>
      <S.CarouselSection>
        { currentPerformance === PHONE_CERT && (
          <Carousel
            items={PHONE_CERT_LIST.map(performance => (
              <S.Thumbnail onClick={() => setIsModalOpen(true)}><img src={performance.thumbnail} alt="" /></S.Thumbnail>
            ))}
            fullHeight={isMobile ? 240 : theme.windowWidth / 3}
            fullWidth={isMobile ? 340 : theme.windowWidth / 2}
            emitCurrentIndex={setCurrentIndex}
          />
        )}
        { currentPerformance === SING_STEALER && (
          <Carousel
            items={SING_STEALER_LIST.map(performance => (
              <S.Thumbnail onClick={() => setIsModalOpen(true)}><img src={performance.thumbnail} alt="" /></S.Thumbnail>
            ))}
            fullHeight={isMobile ? 240 : theme.windowWidth / 3}
            fullWidth={isMobile ? 340 : theme.windowWidth / 2}
            emitCurrentIndex={setCurrentIndex}
          />
        )}
      </S.CarouselSection>
      <S.TeamInfoSection>
        <p>{currentItem.name}</p>
        <p>{currentItem.songs}</p>
        <S.LikeButton onClick={ILikeCurrentItem ? cancelLike : addLike}>
          <img src={ILikeCurrentItem ? FilledHeart : EmptyHeart} alt="like" />
        </S.LikeButton>
      </S.TeamInfoSection>
      <S.SubmitSection>
        <S.SubmitButton isDisabled={isDisableToVote}>제출하기</S.SubmitButton>
        <p>버튼을 누른 이후에는 수정이 불가합니다!</p>
      </S.SubmitSection>
      <PopupModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} closeOnDocumentClick width="90%">
        <iframe
          width={isMobile ? theme.windowWidth : theme.windowWidth * (2 / 3)}
          height={isMobile ? theme.windowWidth / 1.77 : (theme.windowWidth * (2 / 3)) / 1.77}
          src={currentItem.youtubeUrl}
          title={currentItem.name}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </PopupModal>
    </S.StyledVoteSection>
  );
}

VoteSection.propTypes = {
  theme: PropTypes.shape({
    windowWidth: PropTypes.number.isRequired,
  }).isRequired,
  isMobile: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    uid: PropTypes.string,
    isLoading: PropTypes.bool,
    email: PropTypes.string,
  }).isRequired,
  isAuthorized: PropTypes.bool.isRequired,
  haveVotedForPhoneCert: PropTypes.bool.isRequired,
  haveVotedForSingStealer: PropTypes.bool.isRequired,
};

const VoteSectionParent = withUser((props) => {
  const isAuthorized = useMemo(() => !!(props.user.uid && !props.user.isLoading), [props.user]);
  const haveVotedForPhoneCert = false;
  const haveVotedForSingStealer = true;

  return (
    <VoteSection
      {...props}
      isAuthorized={isAuthorized}
      haveVotedForPhoneCert={haveVotedForPhoneCert}
      haveVotedForSingStealer={haveVotedForSingStealer}
    />
  );
});
export default VoteSectionParent;
