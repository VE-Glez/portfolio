import { ExpandMoreRounded } from '@material-ui/icons';
import React from 'react';
import { DownArrowContainer } from './DownArrow';

function AnimatedScrollDownIcon({ className }) {
  return (
    <DownArrowContainer className={className}>
      <ExpandMoreRounded style={{ transform: 'scale(1.25)' }} />
      <ExpandMoreRounded style={{ transform: 'scale(1.5)' }} />
      <ExpandMoreRounded style={{ transform: 'scale(1.75)' }} />
    </DownArrowContainer>
  );
}

export default AnimatedScrollDownIcon;
