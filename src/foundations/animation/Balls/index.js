// eslint-disable-next-line max-classes-per-file
import React, { useEffect } from 'react';

export default function BallsCanvas() {
  useEffect(() => {
    const balls = new App();
  }, []);

  return (
    <div
      id="CanvasWrapper"
      style={{ width: '100%', height: '100%' }}
    />
  );
}

const COLORS = [
  { r: 45, g: 74, b: 227 },
  { r: 250, g: 255, b: 89 },
  { r: 255, g: 104, b: 248 },
  { r: 44, g: 209, b: 252 },
  { r: 54, g: 233, b: 84 },
];

class App {
  constructor() {
    this.wrapper = document.getElementById('CanvasWrapper');
    this.canvas = document.createElement('canvas');
    this.wrapper.appendChild(this.canvas);
    this.ctx = this.canvas.getContext('2d');

    const isMobile = document.body.clientWidth < 768;

    this.totalParticles = isMobile ? 10 : 15;
    this.particles = [];
    this.maxRadius = 20;
    this.minRadius = 10;

    if (!isMobile) {
      window.addEventListener('resize', this.resize.bind(this), false);
    }
    this.resize();

    window.requestAnimationFrame(this.animate.bind(this));
  }

  resize() {
    this.stageWidth = this.wrapper.clientWidth;
    this.stageHeight = this.wrapper.clientHeight;

    this.canvas.width = this.stageWidth;
    this.canvas.height = this.stageHeight;
    this.ctx.scale(1, 1);

    // 그라데이션 효과
    // this.ctx.globalCompositeOperation = 'saturation';

    this.createParticles();
  }

  createParticles() {
    let curColor = 0;
    this.particles = [];

    for (let i = 0; i < this.totalParticles; i += 1) {
      this.particles[i] = new GlowParticle(
        Math.random() * this.stageWidth,
        Math.random() * this.stageHeight,
        Math.random() * (this.maxRadius - this.minRadius) + this.minRadius,
        COLORS[curColor],
      );

      curColor += 1;
      if (curColor >= COLORS.length) {
        curColor = 0;
      }
    }
  }

  animate() {
    window.requestAnimationFrame(this.animate.bind(this));

    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

    for (let i = 0; i < this.totalParticles; i++) {
      const item = this.particles[i];
      item.animate(this.ctx, this.stageWidth, this.stageHeight);
    }
  }
}

const PI2 = Math.PI * 2;
class GlowParticle {
  constructor(x, y, radius, rgb) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.rgb = rgb;

    this.vx = Math.random() * 4;
    this.vy = Math.random() * 4;

    this.sinValue = Math.random();
  }

  animate(ctx, stageWidth, stageHeight) {
    this.sinValue += 0.02;

    this.radius += Math.sin(this.sinValue);

    this.x += this.vx;
    this.y += this.vy;

    if (this.x < 0) {
      this.vx *= -1;
      this.x += 10;
    } else if (this.x > stageWidth) {
      this.vx *= -1;
      this.x -= 10;
    }

    if (this.y < 0) {
      this.vy *= -1;
      this.y += 10;
    } else if (this.y > stageHeight) {
      this.vy *= -1;
      this.y -= 10;
    }

    ctx.beginPath();

    // 그라데이션 효과
    // const g = ctx.createRadialGradient(
    //   this.x,
    //   this.y,
    //   this.radius * 0.01,
    //   this.x,
    //   this.y,
    //   this.radius
    // );
    // g.addColorStop(0, `rgba(${this.rgb.r}, ${this.rgb.g}, ${this.rgb.b}, 1)`);
    // g.addColorStop(1, `rgba(${this.rgb.r}, ${this.rgb.g}, ${this.rgb.b}, 0)`);
    // ctx.fillStyle = g;

    ctx.fillStyle = `rgba(${this.rgb.r}, ${this.rgb.g}, ${this.rgb.b}, 1)`;

    if (this.radius > 0) {
      ctx.arc(this.x, this.y, this.radius, 0, PI2, false);
    }
    ctx.fill();
  }
}
