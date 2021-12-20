import React, { useState } from 'react';
import { animated, useSpring } from '@react-spring/web';
import Paragraph from './styles';

const AnimatedText = ({
  words = [
    'Desarrollador full-stack',
    'Ingeniero mecatrónico',
    'Amante de la tecnología',
  ],
}) => {
  const [index, setIndex] = useState(0);
  const size = words[index].length;
  const RenderAnimatedText = animated(Paragraph);
  const { backgroundPosition, x } = useSpring({
    from: { backgroundPosition: '-500%', x: 0 },
    to: { backgroundPosition: '500%', x: size },
    config: {
      mass: 120,
      friction: 150,
      tension: 40,
      frequency: 8,
      damping: 0.8,
    },

    reset: true,
    loop: () => {
      if (index >= words.length - 1) {
        return setIndex(0);
      } else {
        return setIndex(index + 1);
      }
    },
  });

  return (
    <RenderAnimatedText
      style={{
        backgroundPosition: backgroundPosition,
        transform: x.to((x) => `translateX(calc(70% - ${x}ch))`),
      }}
    >
      {words[index]}
    </RenderAnimatedText>
  );
};

export default AnimatedText;
