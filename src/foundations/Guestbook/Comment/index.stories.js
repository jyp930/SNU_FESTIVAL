import React from 'react';
import mascot1 from '@I/svg/mascot/1.svg';
import mascot2 from '@I/svg/mascot/2.svg';
import Comment from './index';

export default {
  title: 'foundations/Guestbook/Comment',
};

const items = [
  {
    id: '1번', content: '미인을 많이 길을 그러므로 아니한 천자만홍이 칼이다. 위하여 기쁘며, 사랑의 공자는 미인을 때까지 있음으로써 창공에 있으랴? 시들어 우리의 이것이야말로 교향악이다. 구하지 물방아 공자는 피고 피고, 커다란 이것이다. 싸인 인생에 것이다.보라, 부패뿐이다. 더운지라 따뜻한 현저하게 공자는 찾아다녀도, 목숨을 낙원을 풀밭에 듣는다. 싸인 가치를 황금시대의 약동하다. 품고 많이 우리는 꽃이 인간에 더운지라 위하여서. 위하여, 길지 불어 피는 이상의 얼마나 싶이 소리다.이것은 곳으로 위하여서. 심장의 뜨거운지라, 예수는 거선의 목숨을 꽃이 피가 보배를 피가 황금시대다.', time: '2020.10.30', img: mascot1,
  },
  {
    id: '2번', content: '아자차카타파하', time: '2020.10.31', img: mascot2,
  },
];

export const Default = () => <Comment items={items} />;
