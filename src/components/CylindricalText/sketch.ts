import p5 from 'p5';
// import font from '@assets/cc.ttf';

const words = [
  'Soy un Dios\n',
  'Tengo certeza\n',
  'Es hora de demostrarlo\n',
];

const increment = 360 / words.length;

const sketch = (sk: p5, wrapper: HTMLElement) => {
  let font: p5.Font;
  let angle: number = 0;
  let deltaX: number = 0;
  let deltaY: number = 0;
  sk.preload = () => {
    font = sk.loadFont('cc.ttf');
  };

  sk.setup = () => {
    sk.createCanvas(wrapper.offsetWidth, wrapper.offsetHeight, 'webgl');
    sk.background(153);
    sk.textFont(font);
    sk.textSize(20);
    sk.textAlign('center', undefined);
    sk.angleMode('degrees');
  };

  sk.draw = () => {
    sk.background(0);
    sk.textLeading(64);
    words.map((w, i, a) => {
      // sk.push();
      sk.rotateX(angle);
      sk.translate(0, wrapper.offsetHeight * sk.sin(increment * i));
      sk.text(w, 0, 0);
      // sk.pop();
    });
  };

  sk.mouseWheel = (e: WheelEvent) => {
    angle += increment;
    if (angle >= 360) {
      angle = 0;
    }
    console.log(e);
    // deltaY = sk.sin(angle);
    // console.log(sk.sin(240));
    // console.log(angle, deltaY);

    //90 grados entre incremento
  };
};

export default sketch;
