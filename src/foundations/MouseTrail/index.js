import { useEffect } from 'react';
import Mascot1 from '@I/svg/mascot/1.svg';
import Mascot2 from '@I/svg/mascot/2.svg';
import Mascot3 from '@I/svg/mascot/3.svg';
import Mascot4 from '@I/svg/mascot/4.svg';
import Mascot5 from '@I/svg/mascot/5.svg';
import Mascot18 from '@I/svg/mascot/18.svg';
import Mascot19 from '@I/svg/mascot/19.svg';
import Mascot20 from '@I/svg/mascot/20.svg';
import Mascot9 from '@I/svg/mascot/9.svg';
import Mascot10 from '@I/svg/mascot/10.svg';
import Mascot11 from '@I/svg/mascot/11.svg';
import Mascot12 from '@I/svg/mascot/12.svg';
import Mascot13 from '@I/svg/mascot/13.svg';
import Mascot14 from '@I/svg/mascot/14.svg';
import Mascot15 from '@I/svg/mascot/15.svg';

const mascots = [
  Mascot1, Mascot2, Mascot3, Mascot4, Mascot5,
  Mascot18, Mascot19, Mascot20, Mascot9, Mascot10,
  Mascot11, Mascot12, Mascot13, Mascot14, Mascot15,
];

function MouseTrail() {
  useEffect(() => {
    triggerMouseTrail();

    return () => removeTrails();
  }, []);

  return null;
}
export default MouseTrail;

function removeTrails() {
  const removeElements = (elements) => elements.forEach(element => element.remove());
  removeElements(document.querySelectorAll('.mouseTrailElement'));
}

function triggerMouseTrail() {
  const dots = [];
  const mouse = { x: 0, y: 0 };

  const Dot = function Dot(i) {
    this.x = 0;
    this.y = 0;
    this.setX = newX => { this.x = newX; };
    this.setY = newY => { this.y = newY; };

    this.node = (function crateNode() {
      const n = document.createElement('img');
      n.src = mascots[i];
      n.className = 'mouseTrailElement';
      n.setAttribute('style', 'position: absolute; height: 36px; width: 36px; border-radius: 3px; pointer-events: none;');
      document.body.appendChild(n);
      return n;
    }());
  };

  Dot.prototype.draw = function drawDot() {
    this.node.style.left = `${this.x}px`;
    this.node.style.top = `${this.y}px`;
  };

  // Creates the Dot objects, populates the dots array
  for (let i = 0; i < 15; i += 1) {
    const d = new Dot(i);
    dots.push(d);
  }

  // This is the screen redraw function
  function draw() {
    let { x, y } = mouse;

    dots.forEach((dot, index) => {
      const nextDot = dots[index + 1] || dots[0];
      dot.setX(x);
      dot.setY(y);
      dot.draw();
      x += (nextDot.x - dot.x) * 0.85;
      y += (nextDot.y - dot.y) * 0.85;
    });
  }

  document.addEventListener('mousemove', (event) => {
    mouse.x = event.pageX;
    mouse.y = event.pageY;
  });

  // animate() calls draw() then recursively calls itself
  // everytime the screen repaints via requestAnimationFrame().
  function animate(timestamp) {
    // TODO: 성능 문제가 있을 시 timestamp 로 조절
    draw();
    requestAnimationFrame(animate);
  }

  // And get it started by calling animate().
  animate();
}
