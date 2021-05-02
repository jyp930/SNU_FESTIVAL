import { miniGameCollectionRef } from '@U/initializer/firebase';

export function fetchMiniGameFromFirestore(user) {
  return miniGameCollectionRef.doc(user.uid).get().then((doc) => (doc.exists ? doc.data() : null));
}

export function setStageInFirestore(user, stage, isCompleted) {
  miniGameCollectionRef.doc(user.uid).set({
    [stage]: isCompleted,
  }, { merge: true }).then();
}
