import React from 'react';
import Header from '@F/layout/Header';
import Background from '@F/layout/Background';
import styled from 'styled-components';
import { FlexCenterStyle, ResponsiveHeightStyleTwo, ResponsiveWidthStyleTwo } from '@S/responsive/display';

const Body = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  ${FlexCenterStyle};
  flex-direction: column;
  
  p {
    margin-top: 4rem;
    color: ${({ theme }) => theme.palette.PURPLE70};
    font-weight: 500;
    font-size: 1.5rem;
  }
`;

const VideoWrapper = styled.div`
  width: 100%;
  ${ResponsiveWidthStyleTwo};
  ${ResponsiveHeightStyleTwo};
`;

function NotFound() {
  return (
    <>
      <Header />
      <Background />
      <Body>
        <VideoWrapper
          widths={[850, 700, 300]}
          heights={[850 / 1.77, 700 / 1.77, 300 / 1.77]}
        >
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/lF-2qD5MyPM"
            title="축하사 홍보영상"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        </VideoWrapper>
        <p>축제는 5월 11일에 시작합니다.</p>
      </Body>
    </>
  );
}
export default NotFound;
