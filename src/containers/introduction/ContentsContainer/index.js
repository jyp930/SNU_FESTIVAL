import React from 'react';
import Slug from '@/foundations/primitives/Slug';
import Fade from '@/foundations/primitives/Fade';
import 'antd/dist/antd.css';
import { CloseOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import * as S from './styles';

function ContentsContainer({
  toggle, name, description, css, active, image,
}) {
  return (
    <S.StyledContentsContainer
      id="AAACOntentCOntainer"
      css={css}
      active={active}
      onClick={!active ? toggle : undefined}
    >
      <Fade show={active} delay={active ? 500 : 0}>
        <S.DetailWrapper>
          <Slug delay={300}>
            <S.Circle
              css={css}
            />
            <S.Close>
              <CloseOutlined
                type="close"
                onClick={toggle}
              />
            </S.Close>
            <S.Name>{name}</S.Name>
            <S.Description>{description}</S.Description>
          </Slug>
        </S.DetailWrapper>
      </Fade>
      <Fade
        show={!active}
        from={{ opacity: 0, transform: 'translate3d(0,140px,0)' }}
        enter={{ opacity: 1, transform: 'translate3d(0,0px,0)' }}
        leave={{ opacity: 0, transform: 'translate3d(0,-50px,0)' }}
        delay={active ? 0 : 400}
      >
        <S.Default>
          <S.Image src={image} alt="" />
          <div>{name}</div>
        </S.Default>
      </Fade>
    </S.StyledContentsContainer>
  );
}
export default ContentsContainer;

ContentsContainer.propTypes = {
};
