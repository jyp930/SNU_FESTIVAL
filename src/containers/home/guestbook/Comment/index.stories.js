import React from 'react';
import mascot1 from '@I/svg/mascot/1.svg';
import mascot2 from '@I/svg/mascot/2.svg';
import * as S from '@C/home/Home/styles';
import Comment from './index';

export default {
  title: 'containers/home/guestbook/Comment',
};

const comments =[
  {},
  {}
];
export const Default = () => (
  <div>
    <S.StyledContainer
      position="top-right"
      autoClose={2000}
      pauseOnHover={false}
      pauseOnFocusLoss={false}
    />
    <Comment comments={comments}/>
  </div>
);
