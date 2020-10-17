import React from 'react';
import { action, observable, makeObservable } from 'mobx';
import { Observer } from 'mobx-react';

class CenterStore {
  @observable centerComponent = null;

  constructor() {
    makeObservable(this);
  }

  @action setCenterComponent(newCenterComponent) {
    this.centerComponent = newCenterComponent;
  }
}
export const centerStore = new CenterStore();

/** 컴포넌트 */
export const CenterComponent = () => <Observer>{() => centerStore.centerComponent}</Observer>;
