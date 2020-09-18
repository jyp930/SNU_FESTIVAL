import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

function RandomTextShuffle() {
  useEffect(() => {
    WordShufflerTrigger();
  }, []);

  return (
    <S.StyledRandomTextShuffle>
      <S.HeadLine id="headline">RandomTextShuffle</S.HeadLine>
      <S.Article id="text">aa;lskdjf;aoijsrna;f kjfh;asjnfal;snfz;lxkn zl/dkf</S.Article>
      <S.Shuffler id="shuffler">Shuffle</S.Shuffler>
    </S.StyledRandomTextShuffle>
  );
}
export default RandomTextShuffle;

RandomTextShuffle.propTypes = {

};

function WordShufflerTrigger() {
  function WordShuffler(holder, opt) {
    const that = this;
    let time = 0;
    let now;
    let then = Date.now();

    let delta;
    let currentTimeOffset = 0;

    this.word = null;
    let currentWord = null;
    this.currentCharacter = 0;
    let currentWordLength = 0;

    const options = {
      fps: 20,
      timeOffset: 5,
      textColor: '#eee',
      fontSize: '50px',
      useCanvas: false,
      mixCapital: false,
      mixSpecialCharacters: false,
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

    if (typeof opt !== 'undefined') {
      for (const key in opt) {
        if (options.hasOwnProperty.call(key)) {
          options[key] = opt[key];
        }
      }
    }

    this.needUpdate = true;
    this.fps = options.fps;
    this.interval = 1000 / this.fps;
    this.timeOffset = options.timeOffset;
    this.textColor = options.textColor;
    this.fontSize = options.fontSize;
    this.mixCapital = options.mixCapital;
    this.mixSpecialCharacters = options.mixSpecialCharacters;
    this.colors = options.colors;

    this.useCanvas = options.useCanvas;

    this.chars = [
      'A', 'B', 'C', 'D',
      'E', 'F', 'G', 'H',
      'I', 'J', 'K', 'L',
      'M', 'N', 'O', 'P',
      'Q', 'R', 'S', 'T',
      'U', 'V', 'W', 'X',
      'Y', 'Z',
    ];
    this.specialCharacters = [
      '!', '§', '$', '%',
      '&', '/', '(', ')',
      '=', '?', '_', '<',
      '>', '^', '°', '*',
      '#', '-', ':', ';', '~',
    ];

    if (this.mixSpecialCharacters) {
      this.chars = this.chars.concat(this.specialCharacters);
    }

    this.getRandomColor = function () {
      const randNum = Math.floor(Math.random() * this.colors.length);
      return this.colors[randNum];
    };

    // if Canvas

    this.position = {
      x: 0,
      y: 50,
    };

    // if DOM
    if (typeof holder !== 'undefined') {
      this.holder = holder;
    }

    if (!this.useCanvas && typeof this.holder === 'undefined') {
      console.warn('Holder must be defined in DOM Mode. Use Canvas or define Holder');
    }

    this.getRandCharacter = function (characterToReplace) {
      if (characterToReplace === ' ') {
        return ' ';
      }
      const randNum = Math.floor(Math.random() * this.chars.length);
      const lowChoice = -0.5 + Math.random();
      const picketCharacter = this.chars[randNum];
      let chosen = picketCharacter.toLowerCase();
      if (this.mixCapital) {
        chosen = lowChoice < 0 ? picketCharacter.toLowerCase() : picketCharacter;
      }
      return chosen;
    };

    this.writeWord = function (Word) {
      this.word = Word;
      currentWord = Word.split('');
      currentWordLength = currentWord.length;
    };

    this.generateSingleCharacter = function (color, character) {
      const span = document.createElement('span');
      span.style.color = color;
      span.innerHTML = character;
      return span;
    };

    this.updateCharacter = function () {
      now = Date.now();
      delta = now - then;

      if (delta > this.interval) {
        currentTimeOffset += 1;

        const word = [];

        if (currentTimeOffset === this.timeOffset
          && this.currentCharacter !== currentWordLength) {
          this.currentCharacter += 1;
          currentTimeOffset = 0;
        }
        for (let k = 0; k < this.currentCharacter; k += 1) {
          word.push(currentWord[k]);
        }

        for (let i = 0; i < currentWordLength - this.currentCharacter; i++) {
          word.push(this.getRandCharacter(currentWord[this.currentCharacter + i]));
        }

        if (that.currentCharacter === that.currentWordLength) {
          that.needUpdate = false;
        }
        this.holder.innerHTML = '';
        word.forEach((w, index) => {
          let color = null;
          if (index > that.currentCharacter) {
            color = that.getRandomColor();
          } else {
            color = that.textColor;
          }
          that.holder.appendChild(that.generateSingleCharacter(color, w));
        });

        then = now - (delta % this.interval);
      }
    };

    this.restart = function () {
      this.currentCharacter = 0;
      this.needUpdate = true;
    };

    function update() {
      time += 1;
      if (that.needUpdate) {
        that.updateCharacter();
      }
      requestAnimationFrame(update);
    }
    console.log(this.holder.innerHTML);
    this.writeWord(this.holder.innerHTML);

    console.log(currentWord);
    update(time);
  }

  const headline = document.getElementById('headline');
  const text = document.getElementById('text');
  const shuffler = document.getElementById('shuffler');

  const headText = new WordShuffler(headline, {
    textColor: '#fff',
    timeOffset: 18,
    mixCapital: true,
    mixSpecialCharacters: true,
  });

  const pText = new WordShuffler(text, {
    textColor: '#fff',
    timeOffset: 2,
  });

  const buttonText = new WordShuffler(shuffler, {
    textColor: 'tomato',
    timeOffset: 10,
  });

  shuffler.addEventListener('click', () => {
    headText.restart();
    pText.restart();
    buttonText.restart();
  });
}
