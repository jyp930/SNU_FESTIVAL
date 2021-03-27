/**
 * 하나의 dom 요소에 active class 를 넣은 후 제거.
 */
export function startAnimation(element, cancelAnimation, time) {
  clearTimeout(cancelAnimation.listener);
  element.classList.remove('active');
  const triggerReflow = element.offsetWidth;
  element.classList.add('active');

  cancelAnimation.listener = setTimeout(() => {
    element.classList.remove('active');
  }, time || 350);
}

/**
 * 배열 각각의 dom 요소에 active class 를 넣은 후 제거.
 */
export function startAnimations(elements, cancelAnimation, time) {
  clearTimeout(cancelAnimation.listener);
  elements.forEach((element) => {
    element.classList.remove('active');
    // NOTE: 수십개의 dom 을 건드리는 과정에서 타이밍 이슈가 생김.
    // delay 를 줘서 dom 을 재구성하는 시간을 확보.
    setTimeout(() => {
      const triggerReflow = element.offsetWidth;
      element.classList.add('active');
    }, 10);
  });

  cancelAnimation.listener = setTimeout(() => {
    elements.forEach((element) => element.classList.remove('active'));
  }, time || 350);
}

export function getRandomElementFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}
