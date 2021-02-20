import React from 'react';
import { StyledContainer } from '@F/Toast/styles';
import Comment from './index';

export default {
  title: 'containers/home/guestbook/comment/Comment',
};

const comments = [{
  id: '1111',
  username: 'test',
  password: 'test',
  content: 'test',
  created_at: { seconds: 1111111111 },
}];

export const Default = () => (
  <div>
    <StyledContainer
      position="top-center"
      autoClose={2000}
      pauseOnHover={false}
      pauseOnFocusLoss={false}
    />
    <Comment comments={comments} />
  </div>
);
