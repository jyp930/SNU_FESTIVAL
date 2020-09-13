import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { MdClose } from 'react-icons/md';
import sal from 'sal.js';
import * as S from './styles';

function ContentsContainer({
  name, description, background, image, active, toggle,
}) {
  useEffect(() => {
    sal();
  }, [active]);

  return (
    <S.StyledContentsContainer
      background={background}
      active={active}
      onClick={!active ? toggle : null}
    >
      { active && (
        <S.Sal
          data-sal="fade"
          data-sal-duration="1000"
        >
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
        </S.Sal>
      )}
      { !active && (
        <S.Default>
          <S.Sal
            data-sal="slide-up"
            data-sal-duration="1000"
          >
            <S.Image src={image} alt="" />
            <div>{name}</div>
          </S.Sal>
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
