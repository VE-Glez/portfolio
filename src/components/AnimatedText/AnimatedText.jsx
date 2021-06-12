import React, { useState } from 'react';
import { animated, useSpring } from '@react-spring/web';
import Paragraph from './styles';

const AnimatedText = ({
  words = [
    'Ingeniero mecatrónico',
    'Desarrollador frontend',
    'Amante de la tecnología',
  ],
}) => {
  const [index, setIndex] = useState(0);
  // const classes = useStyles();
  const RenderAnimatedText = animated(Paragraph);
  const syles = useSpring({
    from: { backgroundPosition: '-500%' },
    to: { backgroundPosition: '500%' },
    config: {
      mass: 100,
      friction: 150,
      tension: 40,
      frequency: 6,
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

  return <RenderAnimatedText style={syles}>{words[index]}</RenderAnimatedText>;
};

export default AnimatedText;
