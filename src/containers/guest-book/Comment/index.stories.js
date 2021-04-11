import React from 'react';
import { StyledContainer } from '@F/Toast/styles';
import { Comment } from './index';

export default {
  title: 'containers/guest-book/Comment',
};

const comments = [{
  id: '1111',
  username: 'test',
  content: 'test',
  created_at: { seconds: 1111111111 },
  likes: ['1111', '2222'],
  isBest: true,
}, {
  id: '2222',
  username: 'test2',
  content: 'test2',
  created_at: { seconds: 1111111111 },
  likes: ['1111'],
}];

export const Default = () => (
  <div>
    <StyledContainer
      position="top-center"
      autoClose={2000}
      pauseOnHover={false}
      pauseOnFocusLoss={false}
    />
    <Comment comments={comments} user={{ uid: 'test', isLoading: false }} mission={{ isLoaded: true, guestBook: false }} />
  </div>
);
