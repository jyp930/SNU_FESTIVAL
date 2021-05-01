import { missionCollectionRef } from '@U/initializer/firebase';

export function fetchMissionsFromFirestore(user) {
  return missionCollectionRef.doc(user.uid).get().then((doc) => (doc.exists ? doc.data() : null));
}

export function setMissionInFirestore(user, mission, isCompleted) {
  return missionCollectionRef.doc(user.uid).set({
    [mission]: isCompleted,
  }, { merge: true });
}
