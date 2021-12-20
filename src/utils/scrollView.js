export const scrollIntoView = (el) => {
  const headerOffset = 80;
  const elementPosition = el.offsetTop;
  const offsetPosition = elementPosition - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  });
};
