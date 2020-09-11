import React from 'react';
import 'antd/dist/antd.css';
import { MdClose } from 'react-icons/md';
import PropTypes from 'prop-types';
import * as S from './styles';

function ContentsContainer({
  name, description, background, image, active, toggle,
}) {
  return (
    <S.StyledContentsContainer
      background={background}
      active={active}
      onClick={!active ? toggle : null}
    >
      { active && (
        <S.DetailWrapper>
          <S.Circle
            background={background}
          />
          <S.Close>
            <MdClose
              type="close"
              onClick={toggle}
            />
          </S.Close>
          <S.Text>
            <S.Name>{name}</S.Name>
            <S.Description>{description}</S.Description>
          </S.Text>
        </S.DetailWrapper>
      )}
      { !active && (
        <S.Default>
          <S.Image src={image} alt="" />
          <div>{name}</div>
        </S.Default>
      )}
    </S.StyledContentsContainer>
  );
}
export default ContentsContainer;

ContentsContainer.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  background: PropTypes.string,
  image: PropTypes.string,
  active: PropTypes.bool,
  toggle: PropTypes.func,
};

ContentsContainer.defaultProps = {
  name: null,
  description: null,
  background: null,
  image: null,
  active: false,
  toggle: () => {},
};
