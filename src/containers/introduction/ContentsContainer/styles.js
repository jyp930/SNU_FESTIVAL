import styled from 'styled-components';

export const StyledContentsContainer = styled.div`
  background-image: ${props => props.background};
  cursor: ${props => (!props.active ? 'pointer' : 'auto')}; 
  position: relative;
  background-size: cover;
  width: 100%;
  height: 100%;
  overflow: hidden;
  color: #777777;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 60px -10px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.5s;
  font-size: 10px;
  line-height: 10px;
  
  &:hover {
    box-shadow: 0 20px 60px -10px rgba(0, 0, 0, 0.3);
  }
}
`;

export const Default = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  z-index: 1;
  flex-direction: column;
`;

export const DetailWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background: #ffffffa0;
  color: white;
  padding: 20px;
`;

export const Text = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
`;

export const Name = styled.h1`
  color: #ca6a9a;
  font-size: 18px;
  line-height: 18px;
  font-weight: 600;
  margin: 0;
  padding: 0;
  max-width: 50px;
`;

export const Description = styled.p`
  color: #777777;
  font-size: 14px;
  line-height: 14px;
  margin: 0;
  padding-top: 6px;
`;

export const Circle = styled.div`
  position: absolute;
  top: calc(50% - 50px);
  left: calc(50% - 50px);
  width: 100px;
  height: 100px;
  border-radius: 50%;
  box-shadow: 0 20px 60px -10px rgba(0, 0, 0, 0.2);
  background: ${props => props.background};
`;

export const Close = styled.div`
  position: absolute;
  top: 60px;
  right: 30px;
  font-size: 30px;
  color: #777777;
  cursor: pointer;
`;

export const Image = styled.img`
  width: auto;
  height: 100%;
  object-fit: contain;
  padding: 20px;
`;
