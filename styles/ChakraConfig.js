import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const styles = {
  global: {
    // styles for the `body`
    body: {
      fontFamily: '"Lato", sans-serif'
    },
    '*': {
      margin: 0,
      padding: 0
    }
  }
};

const breakpoints = createBreakpoints({
  sm: '375px',
  semiMd: '480px',
  md: '754px',
  lg: '944px',
  xl: '1024px'
});

// 2. Extend the theme to include custom colors, fonts, etc
export const fonts = {
  playfairDisplay: 'Playfair Display',
  lora: 'Lora',
  lato: 'Lato',
  theCastleElizah: 'The Castle Elizah'
};

export const fontSizes = {
  heading: '36px',
  subheading1: '24px',
  subheading2: '18px',
  subheading3: '16px',
  paragraph: '14px',
  smallText: '10px'
};

export const colors = {
  primary: {
    batong: '#41321E',
    brown1: '#BF9A69',
    brown2: '#BFA27C',
    grayBorder: '#EBF0F5',
    lightTomatoScheme: {
      100: '#FECACA',
      800: '#7F1D1D'
    },
    limeScheme: {
      100: '#D9F99D',
      800: '#166534'
    },
    yellowScheme: {
      100: '#F0E68F',
      800: '#854D0E'
    }
  },
  secondary: {
    cream1: '#F6CFA1',
    cream2: '#F6DAB8'
  },
  notification: {
    green: '#3BCA5A',
    red: '#CA473B'
  },
  neutral: {
    black: '#3F3F3F',
    grey: '#878787',
    bg: '#F7F8F9',
    white: '#FFFFFF'
  }
};

const theme = extendTheme({
  breakpoints,
  styles,
  colors,
  fonts,
  fontSizes
});

export default theme;
