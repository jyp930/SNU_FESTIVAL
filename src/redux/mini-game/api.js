import { miniGameCollectionRef } from '@U/initializer/firebase';

export function createNewMiniGameInFirestore(user) {
  miniGameCollectionRef.doc(user.uid).set({
    stage1: false, stage2: false, stage3: false, stage4: false,
  }).then();
}
