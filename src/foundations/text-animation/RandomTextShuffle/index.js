import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

function RandomTextShuffle({ text }) {
  useEffect(() => {
    WordShufflerTrigger();
  }, []);

  return (
    <S.StyledRandomTextShuffle>
      <S.Text id="RandomTextShuffle">{text}</S.Text>
    </S.StyledRandomTextShuffle>
  );
}
export default RandomTextShuffle;

RandomTextShuffle.propTypes = {
  text: PropTypes.string.isRequired,
};

function WordShufflerTrigger() {
  function WordShuffler(holderId) {
    let time = 0;
    let now;
    let then = Date.now();

    let delta;
    let currentTimeOffset = 0;

    let currentWord = null;
    let currentCharacter = 0;
    let currentWordLength = 0;

    const options = {
      fps: 20,
      timeOffset: 5,
      textColor: '#000',
      needUpdate: true,
      colors: [
        '#f44336', '#e91e63', '#9c27b0',
        '#673ab7', '#3f51b5', '#2196f3',
        '#03a9f4', '#00bcd4', '#009688',
        '#4caf50', '#8bc34a', '#cddc39',
        '#ffeb3b', '#ffc107', '#ff9800',
        '#ff5722', '#795548', '#9e9e9e',
        '#607d8b',
      ],
    };

    let needUpdate = true;
    const interval = 1000 / options.fps;

    const chars = [
      'ㄱ', 'ㄴ', 'ㄷ', 'ㄹ',
      'ㅁ', 'ㅂ', 'ㅅ', 'ㅇ',
      'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ',
      'ㅍ', 'ㅎ', '!', '§',
      '$', '%', '&', '/',
      '(', ')', '=', '?',
      '_', '<', '>', '^',
      '°', '*', '#', '-',
      ':', ';', '~',
    ];

    const getRandomColor = () => {
      const randNum = Math.floor(Math.random() * options.colors.length);
      return options.colors[randNum];
    };

    const holder = holderId;

    const getRandCharacter = (characterToReplace) => {
      if (characterToReplace === ' ') {
        return ' ';
      }
      const randNum = Math.floor(Math.random() * chars.length);
      const lowChoice = -0.5 + Math.random();
      const picketCharacter = chars[randNum];
      return lowChoice < 0 ? picketCharacter.toLowerCase() : picketCharacter;
    };

    const writeWord = (inputText) => {
      currentWord = inputText.split('');
      currentWordLength = currentWord.length;
    };

    const generateSingleCharacter = (color, character) => {
      const span = document.createElement('span');
      span.style.color = color;
      span.innerHTML = character;
      return span;
    };

    const updateCharacter = () => {
      now = Date.now();
      delta = now - then;

      if (delta > interval) {
        currentTimeOffset += 1;

        const words = [];

        if (currentTimeOffset === options.timeOffset
          && currentCharacter !== currentWordLength) {
          currentCharacter += 1;
          currentTimeOffset = 0;
        }
        for (let k = 0; k < currentCharacter; k += 1) {
          words.push(currentWord[k]);
        }

        for (let i = 0; i < currentWordLength - currentCharacter; i += 1) {
          words.push(getRandCharacter(currentWord[currentCharacter + i]));
        }

        if (currentCharacter === currentWordLength) {
          needUpdate = false;
        }
        holder.innerHTML = '';
        words.forEach((w, index) => {
          let color;
          if (index > currentCharacter) {
            color = getRandomColor();
          } else {
            color = options.textColor;
          }
          holder.appendChild(generateSingleCharacter(color, w));
        });

        then = now - (delta % interval);
      }
    };

    function update() {
      time += 1;
      if (needUpdate) {
        updateCharacter();
      }
      requestAnimationFrame(update);
    }
    writeWord(holder.innerHTML);
    update(time);
  }

  const text = document.getElementById('RandomTextShuffle');
  WordShuffler(text);
}
