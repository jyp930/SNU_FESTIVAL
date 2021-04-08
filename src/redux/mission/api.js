import { missionCollectionRef } from '@U/initializer/firebase';

export function createNewMissionInFirestore(user) {
  missionCollectionRef.doc(user.uid).set({
    guestbook: false,
  }).then();
}
