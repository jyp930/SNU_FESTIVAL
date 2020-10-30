import React from 'react';
import Comment from './index';

export default {
  title: 'foundations/Guestbook/Comment',
};

const items = [
  { id: '1번', content: '가나다라마바사', time: '2020.10.30' },
  { id: '2번', content: '아자차카타파하', time: '2020.10.31' },
];

export const Default = () => <Comment items={items} />;
