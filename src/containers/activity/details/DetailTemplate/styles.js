import styled from 'styled-components';
import media from 'styled-media-query';

export const StyledDetailTemplate = styled.div`
  display: flex;
  justify-content: center;
  padding: 3rem 2rem;
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 400px;
  
  ${media.lessThan('medium')`
    height: 200px;
  `};
`;

export const Title = styled.div`
  width: 100%;
  height: 50%;
  margin: 0;
  user-select: none;
`;

export const Description = styled.div`
  align-self: flex-end;
  font-size: 1.5rem;
`;
