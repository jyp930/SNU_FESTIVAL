import React, {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

function Carousel({ fullWidth, fullHeight, items }) {
  const arrayLength = useMemo(() => items.length, [items]); // 아이템의 총 수
  const itemWidth = useMemo(() => fullWidth * 0.6, [fullWidth]); // 아이템의 너비
  const distance = useMemo(() => itemWidth / 4, [itemWidth]); // 아이템간의 거리
  const itemFullWidth = useMemo(() => arrayLength * distance, [arrayLength, distance]); // 캐러셀 아이템 전체 길이

  const [currentX, setCurrentX] = useState(0); // 현재 translateX 값
  const [offsetX, setOffsetX] = useState(0); // 이전 translateX 값
  const [xSpeed, setXSpeed] = useState(0); // 마우스 빠르기
  const [isDown, setIsDown] = useState(false); // 터치 상태인지
  const [currentIndex, setCurrentIndex] = useState(0); // 현재 아이템의 index

  // 마우스 이벤트
  useEffect(() => {
    setCurrentX(x => {
      let newX = x;
      while (newX > 0) {
        newX -= (itemFullWidth || 1);
      }
      return (newX + xSpeed) % (itemFullWidth || 1);
    });
  }, [xSpeed, itemFullWidth]);

  const onMouseDown = useCallback((e) => {
    const { clientX } = e.type === 'mousedown' ? e : e.touches[0];
    setXSpeed(0);
    setIsDown(true);
    setOffsetX(clientX);
  }, []);

  const onMouseUp = useCallback(() => {
    setIsDown(false);
  }, []);

  const onMouseMove = (e) => {
    const { clientX } = e.type === 'mousemove' ? e : e.touches[0];
    setXSpeed(clientX - offsetX);
    setOffsetX(clientX);
  };

  useEffect(() => {
    let newCurrentIndex = Math.round(-currentX / (distance || 1));
    while (newCurrentIndex < 0 || newCurrentIndex >= arrayLength) {
      if (newCurrentIndex < 0) newCurrentIndex += arrayLength;
      else newCurrentIndex -= arrayLength;
    }
    setCurrentIndex(Math.abs(newCurrentIndex));
  }, [currentX, distance, arrayLength]);

  const visibleRange = 3;

  return (
    <S.StyledCarousel
      fullWidth={fullWidth}
      fullHeight={fullHeight}
      itemWidth={itemWidth}
      onMouseDown={onMouseDown}
      onMouseMove={isDown ? onMouseMove : null}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
      onTouchStart={onMouseDown}
      onTouchMove={isDown ? onMouseMove : null}
      onTouchEnd={onMouseUp}
      onTouchCancel={onMouseUp}
    >
      {
        items.map((item, index) => {
          let indexFromCurrent = Math.abs(index - currentIndex);
          let distanceFromCurrent = distance * index;

          if ((currentIndex === 0 || currentIndex === 1)) {
            if ((index === arrayLength - 1 || index === arrayLength - 2)) {
              indexFromCurrent = Math.abs(arrayLength - indexFromCurrent);
              if (currentX > (itemWidth - itemFullWidth)) {
                distanceFromCurrent -= itemFullWidth;
              }
            } else if (currentX < (itemWidth - itemFullWidth)) {
              distanceFromCurrent += itemFullWidth;
            }
          }

          if ((currentIndex === arrayLength - 1 || currentIndex === arrayLength - 2)) {
            if ((index === 0 || index === 1)) {
              indexFromCurrent = Math.abs(arrayLength - indexFromCurrent);
              distanceFromCurrent += itemFullWidth;
            }
          }

          const isVisible = indexFromCurrent < visibleRange;
          return isVisible && (
            <div
              key={index}
              style={{
                transform: `perspective(100px) translateX(${currentX + distanceFromCurrent}px) scale(${1 - Math.min(1, Math.abs((currentX + distanceFromCurrent) / itemWidth))})`,
                zIndex: 10 - indexFromCurrent,
              }}
            >
              {item}
            </div>
          );
        })
      }
    </S.StyledCarousel>
  );
}
export default Carousel;

Carousel.propTypes = {
  fullWidth: PropTypes.number.isRequired,
  fullHeight: PropTypes.number.isRequired,
  items: PropTypes.arrayOf(PropTypes.element).isRequired,
};
