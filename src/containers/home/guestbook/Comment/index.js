import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import PropTypes from 'prop-types';
import * as S from './styles';
import mascot1 from '@I/svg/mascot/1.svg';
import DeletePopup from './DeletePopup';
import dayjs from 'dayjs';

function Comment({ comments }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [Password, setPassword] = useState('');
  const [commentNum, setCommentNum] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [items, setItems] = useState([]);

  const openPopup = (password) => {
    setPassword(password);
    setIsModalOpen(true);
  };

  const loadMore = () => {
    if (comments.length > 0) {
      if (commentNum > comments.length) {
        setHasMore(false);
      } else {
        setCommentNum(commentNum + 1);
        setItems(comments.slice(0, commentNum + 1));
      }
    }
  };

  const loader = (
    <div key={0}>Loading ...</div>
  );

  useEffect(() => {
    setItems([]);
    setHasMore(true);
  }, [comments]);

  return (
    <S.StyledComment>
      <InfiniteScroll
        pageStart={0}
        loadMore={loadMore}
        hasMore={hasMore}
        loader={loader}
        useWindow={false}
      >
        {items.map((comment) => (
          <S.CommentThread key={comment.id}>
            <S.MainBox>
              <S.ProfileImage src={mascot1} />
              <S.ContentsBox>
                <S.Id>{comment.username}</S.Id>
                <S.Content>
                  {comment.content.split('\n').map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </S.Content>
              </S.ContentsBox>
            </S.MainBox>
            <S.TaleBox>
              <S.Time>{dayjs.unix(comment.created_at.seconds).format('YYYY-MM-DD HH:mm:ss')}</S.Time>
              <S.Delete onClick={() => openPopup(comment.password)}>삭제</S.Delete>
            </S.TaleBox>
          </S.CommentThread>
        ))}
      </InfiniteScroll>
      <DeletePopup isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} Password={Password} />
    </S.StyledComment>
  );
}
export default Comment;

Comment.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    username: PropTypes.string,
    password: PropTypes.string,
    content: PropTypes.string,
    created_at: PropTypes.shape({
      nanoseconds: PropTypes.number,
      seconds: PropTypes.number, // unix time
    }),
  })).isRequired,
};
