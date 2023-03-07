const transparent = 'transparent';
const white = '#FFFFFF';
const black = '#000000';
const gray = '#8D8C96';
const blue = '#0E76A8';
const green = '#60B38C';
const light = '#F4F5F7';
const dark = '#252525';
const orange = '#F34444';
const darkBlue = '#4268B3';
const circle = 'rgba(255, 255, 255, 0.05)';
const backgroundColor = '#F9F5F2';

export default {
  light: {
    transparent,
    white,
    black,
    gray,
    blue,
    green,
    light,
    dark,
    orange,
    darkBlue,
    circle,
    backgroundColor,
    fixedBlack: black,
    /**
     * Fixed white not changing on theme change.
     */
    fixedWhite: white,
    statusBar: 'dark-content',
  },
  dark: {
    transparent,
    white: black,
    black: white,
    gray,
    blue,
    green,
    light: dark,
    dark: light,
    orange,
    darkBlue,
    circle,
    backgroundColor,
    fixedBlack: black,
    /**
     * Fixed white not changing on theme change.
     */
    fixedWhite: white,
    statusBar: 'light-content',
  },
};
