import React, { useEffect, useRef } from 'react';
import TagCloud from 'TagCloud';
const technologies = [
  'HTML',
  'CSS',
  'Javascript',
  'SCSS',
  'lodash',
  'Node',
  'Git',
  'React',
  'Python',
  'Matlab',
  'Prettier',
  'Figma',
  'Typescript',
  'Eslint',
  'Webpack',
  'npm',
  'Pug',
  'Material UI',
  'React-springs',
  'Django',
  'Docker',
  'Firebase',
];

const tagCloudParams = {
  radius: 150,
  maxSpeed: 'normal',
  initSpeed: 'fast',
  direction: 135,
  keep: false,
  containerClass: 'tagcloud',
  itemClass: 'tagcloud--item',
  useContainerInlineStyles: true,
  useItemInlineStyles: true,
};

// let rootEl = document.querySelector('.content');
// rootEl.addEventListener('click', function clickEventHandler(e) {
//   if (e.target.className === 'tagcloud--item') {
//     window.open(
//       `https://www.google.com/search?q=${e.target.innerText}`,
//       '_blank'
//     );
//     // your code here
//   }
// });

const TextCloud = () => {
  const cloudRef = useRef(null);
  useEffect(() => {
    if (cloudRef) {
      const cloud = TagCloud(
        cloudRef.current,
        technologies,
        tagCloudParams
      );
    }
  }, [cloudRef]);

  return <div ref={cloudRef}></div>;
};

export default TextCloud;
