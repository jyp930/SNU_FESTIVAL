import React, { useEffect, useMemo, useState } from 'react';
import { votePhoneCertCollectionRef, voteSingStealerCollectionRef } from '@U/initializer/firebase';
import { PHONE_CERT_LIST, SING_STEALER_LIST } from '@C/vote/VoteSection/variables';

function HiSangmin() {
  const [phoneCertAll, setPhoneCertAll] = useState({});
  const phoneCertCount = useMemo(() => {
    const uids = new Set();
    Object.entries(phoneCertAll).forEach(performance => {
      performance[1][1].forEach(uid => uids.add(uid));
    });
    return uids.size;
  }, [phoneCertAll]);
  const [singStealerAll, setSingStealerAll] = useState({});
  const singStealerCount = useMemo(() => {
    const uids = new Set();
    Object.entries(singStealerAll).forEach(performance => {
      performance[1][1].forEach(uid => uids.add(uid));
    });
    return uids.size;
  }, [singStealerAll]);

  useEffect(() => {
    votePhoneCertCollectionRef.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        setPhoneCertAll(Object.entries(doc.data()));
      });
    });
    voteSingStealerCollectionRef.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        setSingStealerAll(Object.entries(doc.data()));
      });
    });
  }, []);

  return (
    <div>
      <h3>폰서트</h3>
      <h4>
        참여인원:
        {' '}
        {phoneCertCount}
      </h4>
      {phoneCertAll && (
        Object.entries(phoneCertAll).map(performance => (
          <p key={performance[1][0]}>
            {performance[1][0]}
            {' '}
            {PHONE_CERT_LIST.find(element => Number(performance[1][0]) === element.performanceId).name}
            :
            {' '}
            {performance[1][1].length}
          </p>
        ))
      )}
      <br />
      <h3>씽스틸러</h3>
      <h4>
        참여인원:
        {' '}
        {singStealerCount}
      </h4>
      {singStealerAll && (
        Object.entries(singStealerAll).map(performance => (
          <p key={performance[1][0]}>
            {performance[1][0]}
            {' '}
            {SING_STEALER_LIST.find(element => Number(performance[1][0]) === element.performanceId).name}
            :
            {' '}
            {performance[1][1].length}
          </p>
        ))
      )}
    </div>
  );
}
export default HiSangmin;
