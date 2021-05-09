const themes = {
  Dark: {
    bg: 'hsl(230, 17%, 14%)',
    topBGPattern: 'hsl(232, 19%, 15%)',
    cardBG: 'hsl(228, 28%, 20%)',
    textPrimary: 'hsl(228, 34%, 66%)',
    textSecondary: 'hsl(0, 0%, 100%)',
    toggle: 'linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%))',
  },
  Light: {
    bg: 'hsl(0, 0%, 100%)',
    topBGPattern: 'hsl(225, 100%, 98%)',
    cardBG: 'hsl(227, 47%, 96%)',
    textPrimary: 'hsl(228, 12%, 44%)',
    textSecondary: 'hsl(230, 17%, 14%)',
    toggle: 'hsl(230, 22%, 74%)',
  },
  neutral: {
    limeGreen: 'hsl(163, 72%, 41%)',
    brightRed: 'hsl(356, 69%, 56%)',
    facebook: 'hsl(208, 92%, 53%)',
    twitter: 'hsl(203, 89%, 53%)',
    instagram: 'linear-gradient(hsl(37, 97%, 70%), hsl(329, 70%, 58%))',
    youTube: 'hsl(348, 97%, 39%)',
  },
};

export const initialState = {
  theme: { ...themes.Light },
  neutral: { ...themes.neutral },
  name: 'Light',
};

export const types = {
  light: 'light',
  dark: 'dark',
};

export const themeReducer = (state, action) => {
  switch (action.type) {
    case types.dark:
      return { ...state, theme: { ...themes.Dark }, name: 'Dark' };
    case types.light:
      return { ...state, theme: { ...themes.Light }, name: 'Light' };
    default:
      return { state };
  }
};
