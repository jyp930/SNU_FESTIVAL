import React from 'react';
import * as S from '@C/home/Home/styles';
import Comment from './index';

export default {
  title: 'containers/home/guestbook/comment/Comment',
};

const comments = [{
  id: 1,
  username: 'test',
  password: 'test',
  content: 'test',
  created_at: { seconds: 1111111111 },
}];

export const Default = () => (
  <div>
    <S.StyledContainer
      position="top-center"
      autoClose={2000}
      pauseOnHover={false}
      pauseOnFocusLoss={false}
    />
    <Comment comments={comments} />
  </div>
);
