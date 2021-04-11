import React from 'react';
import PropTypes from 'prop-types';
import Photo from '@I/introduction/group-photo.png';

import * as S from './styles';

function GroupPhoto() {
  return (
    <S.StyledGroupPhoto>
      <S.Image src={Photo} alt="축하사 단체사진" />
    </S.StyledGroupPhoto>
  );
}
export default GroupPhoto;

GroupPhoto.propTypes = {

};
