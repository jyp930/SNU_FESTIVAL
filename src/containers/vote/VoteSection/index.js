import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import Carousel from '@F/carousel/Carousel';
import { PHONE_CERT_LIST as VARIABLE_PHONE_CERT_LIST, SING_STEALER_LIST as VARIABLE_SING_STEALER_LIST } from '@C/vote/VoteSection/variables';
import PopupModal from '@F/modal/PopupModal';
import FilledHeart from '@I/icon/filled-heart.svg';
import EmptyHeart from '@I/icon/empty-heart.svg';
import withUser from '@U/hoc/withUser';
import { toast } from 'react-toastify';
import useModal from '@U/hooks/useModal';
import SignInGuide from '@F/modal/content/SignInGuide';
import { votePhoneCertCollectionRef, voteSingStealerCollectionRef } from '@U/initializer/firebase';
import firebase from 'firebase/app';
import * as S from './styles';

const PHONE_CERT = 0;
const SING_STEALER = 1;

export function VoteSection({
  theme, isMobile, user, isAuthorized,
  phoneCertListIHaveVoted, singStealerListIHaveVoted,
  isPhoneCertLoaded, isSingStealerLoaded,
}) {
  // 로그인 모달
  const { modalComponent: signInModalComponent, setIsModalOpen: setSignInModalComponent } = useModal(SignInGuide);

  const PHONE_CERT_LIST = VARIABLE_PHONE_CERT_LIST;
  const SING_STEALER_LIST = VARIABLE_SING_STEALER_LIST;

  // 공연 정보
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPerformance, setCurrentPerformance] = useState(PHONE_CERT);
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentItemList = useMemo(() => (
    currentPerformance === PHONE_CERT ? PHONE_CERT_LIST : SING_STEALER_LIST
  ), [currentPerformance, PHONE_CERT_LIST, SING_STEALER_LIST]);
  const currentItem = useMemo(() => currentItemList[currentIndex] ?? {}, [currentItemList, currentIndex]);
  useEffect(() => {
    setCurrentIndex(0);
  }, [currentPerformance]);

  // 투표 정보
  const [haveVotedForPhoneCert, setHaveVotedForPhoneCert] = useState(false);
  const [haveVotedForSingStealer, setHaveVotedForSingStealer] = useState(false);
  useEffect(() => {
    if (phoneCertListIHaveVoted.length > 0) {
      setMyLikesForPhoneCert(phoneCertListIHaveVoted);
      setHaveVotedForPhoneCert(true);
    }
  }, [phoneCertListIHaveVoted]);
  useEffect(() => {
    if (singStealerListIHaveVoted.length > 0) {
      setMyLikesForSingStealer(singStealerListIHaveVoted);
      setHaveVotedForSingStealer(true);
    }
  }, [singStealerListIHaveVoted]);
  const isDisableToVote = useMemo(() => (
    currentPerformance === PHONE_CERT
      ? !isAuthorized || haveVotedForPhoneCert || !isPhoneCertLoaded
      : !isAuthorized || haveVotedForSingStealer || !isSingStealerLoaded
  ), [currentPerformance, haveVotedForPhoneCert, haveVotedForSingStealer, isAuthorized, isPhoneCertLoaded, isSingStealerLoaded]);

  const [myLikesForPhoneCert, setMyLikesForPhoneCert] = useState([]);
  const [myLikesForSingStealer, setMyLikesForSingStealer] = useState([]);
  const myLikesForCurrentPerformance = useMemo(() => {
    if (!isAuthorized) return [];
    return currentPerformance === PHONE_CERT ? myLikesForPhoneCert : myLikesForSingStealer;
  }, [isAuthorized, currentPerformance, myLikesForSingStealer, myLikesForPhoneCert]);
  const ILikeCurrentItem = useMemo(() => (
    myLikesForCurrentPerformance.includes(currentItem.performanceId)
  ), [myLikesForCurrentPerformance, currentItem]);

  // 하트 클릭
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
  const onClickLikeButton = () => {
    if (!isAuthorized) {
      setSignInModalComponent(true);
      return;
    }
    if ((currentPerformance === PHONE_CERT && haveVotedForPhoneCert)
        || (currentPerformance === SING_STEALER && haveVotedForSingStealer)) {
      toast('이미 투표에 참여했습니다.');
    } else if (ILikeCurrentItem) {
      cancelLike();
    } else {
      addLike();
    }
  };
  const submit = () => {
    const { uid, email } = user;
    if (!email.endsWith('@snu.ac.kr')) {
      toast('SNU 계정만 투표 가능합니다.');
      return;
    }

    if (myLikesForCurrentPerformance.length === 0) {
      toast('하트를 눌러 투표를 진행해 주세요.');
      return;
    }

    if (currentPerformance === PHONE_CERT) {
      votePhoneCertCollectionRef.doc('phone-cert-doc').update({
        ...(myLikesForPhoneCert[0] && { [myLikesForPhoneCert[0]]: firebase.firestore.FieldValue.arrayUnion(uid) }),
        ...(myLikesForPhoneCert[1] && { [myLikesForPhoneCert[1]]: firebase.firestore.FieldValue.arrayUnion(uid) }),
        ...(myLikesForPhoneCert[2] && { [myLikesForPhoneCert[2]]: firebase.firestore.FieldValue.arrayUnion(uid) }),
      }).then(() => {
        toast('폰서트 투표에 참여되었습니다.');
        setHaveVotedForPhoneCert(true);
      }).catch(() => {
        toast('인터넷이 불안정합니다. 다시 시도해주세요.');
      });
    } else if (currentPerformance === SING_STEALER) {
      voteSingStealerCollectionRef.doc('sing-stealer-doc').update({
        ...(myLikesForSingStealer[0] && { [myLikesForSingStealer[0]]: firebase.firestore.FieldValue.arrayUnion(uid) }),
        ...(myLikesForSingStealer[1] && { [myLikesForSingStealer[1]]: firebase.firestore.FieldValue.arrayUnion(uid) }),
        ...(myLikesForSingStealer[2] && { [myLikesForSingStealer[2]]: firebase.firestore.FieldValue.arrayUnion(uid) }),
      }).then(() => {
        toast('씽스틸러 투표에 참여되었습니다.');
        setHaveVotedForSingStealer(true);
      }).catch(() => {
        toast('인터넷이 불안정합니다. 다시 시도해주세요.');
      });
    }
  };

  // 공연 클릭 감지
  const [mouseDownItem, setMouseDownItem] = useState(null);

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
        <Carousel
          key={currentPerformance} // force rerender
          items={currentItemList.map(performance => (
            <S.Thumbnail
              onMouseDown={() => setMouseDownItem(performance.performanceId)}
              onMouseUp={() => (currentItem.performanceId === mouseDownItem ? setIsModalOpen(true) : null)}
            >
              <img src={isMobile ? performance.thumbnailSmall : performance.thumbnail} alt="" />
            </S.Thumbnail>
          ))}
          fullHeight={isMobile ? 240 : theme.windowWidth / 3}
          fullWidth={isMobile ? 340 : (theme.windowWidth / 2 > 820 ? 820 : theme.windowWidth / 2)}
          emitCurrentIndex={setCurrentIndex}
        />
      </S.CarouselSection>
      <S.TeamInfoSection>
        <p>{currentItem.name}</p>
        <p>{currentItem.songs}</p>
        <S.LikeButton onClick={onClickLikeButton}>
          <img src={ILikeCurrentItem ? FilledHeart : EmptyHeart} alt="like" />
        </S.LikeButton>
      </S.TeamInfoSection>
      <S.SubmitSection>
        <S.SubmitButton isDisabled={isDisableToVote} onClick={!isDisableToVote ? submit : null}>
          { !isAuthorized || (isPhoneCertLoaded && isSingStealerLoaded) ? '제출하기' : '로딩 중...' }
        </S.SubmitButton>
        <p>버튼을 누른 이후에는 수정이 불가합니다!</p>
      </S.SubmitSection>
      <PopupModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        closeOnDocumentClick
        width={`${isMobile ? theme.windowWidth : theme.windowWidth * (2 / 3)}px`}
      >
        <iframe
          width={isMobile ? theme.windowWidth : theme.windowWidth * (2 / 3)}
          height={isMobile ? theme.windowWidth / 1.77 : (theme.windowWidth * (2 / 3)) / 1.77}
          src={currentItem.youtubeUrl}
          title={currentItem.name}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </PopupModal>

      {signInModalComponent}
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
  phoneCertListIHaveVoted: PropTypes.arrayOf(PropTypes.number).isRequired,
  singStealerListIHaveVoted: PropTypes.arrayOf(PropTypes.number).isRequired,
  isPhoneCertLoaded: PropTypes.bool.isRequired,
  isSingStealerLoaded: PropTypes.bool.isRequired,
};

const VoteSectionParent = withUser((props) => {
  const isAuthorized = useMemo(() => !!(props.user.uid && !props.user.isLoading), [props.user]);
  const [phoneCertListIHaveVoted, setPhoneCertListIHaveVoted] = useState([]);
  const [singStealerListIHaveVoted, setSingStealerListIHaveVoted] = useState([]);

  // firestore 정보 가져오기
  const [isPhoneCertLoaded, setIsPhoneCertLoaded] = useState(false);
  const [isSingStealerLoaded, setIsSingStealerLoaded] = useState(false);
  useEffect(() => {
    const { uid } = props.user;
    if (uid) {
      votePhoneCertCollectionRef.doc('phone-cert-doc').get().then((doc) => {
        const newListIHaveVoted = [];
        Object.entries(doc.data()).forEach(([key, likes]) => {
          if (likes.includes(uid)) {
            newListIHaveVoted.push(Number(key));
          }
        });
        setPhoneCertListIHaveVoted(newListIHaveVoted);
        setIsPhoneCertLoaded(true);
      });
      voteSingStealerCollectionRef.doc('sing-stealer-doc').get().then((doc) => {
        const newListIHaveVoted = [];
        Object.entries(doc.data()).forEach(([key, likes]) => {
          if (likes.includes(uid)) {
            newListIHaveVoted.push(Number(key));
          }
        });
        setSingStealerListIHaveVoted(newListIHaveVoted);
        setIsSingStealerLoaded(true);
      });
    }
  }, [props.user]);

  return (
    <VoteSection
      {...props}
      isAuthorized={isAuthorized}
      phoneCertListIHaveVoted={phoneCertListIHaveVoted}
      singStealerListIHaveVoted={singStealerListIHaveVoted}
      isPhoneCertLoaded={isPhoneCertLoaded}
      isSingStealerLoaded={isSingStealerLoaded}
    />
  );
});
export default VoteSectionParent;
