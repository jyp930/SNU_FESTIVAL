import {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import { debounce } from '@U/functions/timer';

function useResize() {
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  const onResize = useCallback(() => {
    const documentClientHeight = document.documentElement.clientHeight;
    // TODO: 기획에 따라 height 정책 변경
    setWindowHeight(documentClientHeight > 768 ? documentClientHeight : window.innerHeight);
    const documentClientWidth = document.documentElement.clientWidth;
    setWindowWidth(documentClientWidth);
  }, []);
  const debouncedOnResize = useMemo(() => debounce(onResize, 50), [onResize]);

  useEffect(() => {
    window.addEventListener('resize', debouncedOnResize);
    debouncedOnResize();

    return () => window.removeEventListener('resize', debouncedOnResize);
  }, [debouncedOnResize]);

  return [windowWidth, windowHeight];
}
export default useResize;
