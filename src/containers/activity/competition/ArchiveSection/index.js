import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

function ArchiveSection({ field }) {
  return (
    <S.StyledArchiveSection>
      <S.Title>
        {field}
        부문 우수작 모아보기
      </S.Title>
    </S.StyledArchiveSection>
  );
}
export default ArchiveSection;

ArchiveSection.propTypes = {
  field: PropTypes.string,
};

ArchiveSection.defaultProps = {
  field: '영상',
};
