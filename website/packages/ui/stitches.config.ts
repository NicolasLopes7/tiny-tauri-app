import type * as Stitches from '@stitches/react';
import { createStitches, CSS as StitchesCSS } from '@stitches/react';

export const { styled, theme, keyframes } = createStitches({
  theme: {
    colors: {
      gray50: 'hsl(230, 5%, 5%)',
      gray100: 'hsl(230, 5%, 10%)',
      gray200: 'hsl(230, 5%, 15%)',
      gray300: 'hsl(230, 5%, 20%)',
      gray400: 'hsl(230, 5%, 25%)',
      gray500: 'hsl(230, 5%, 30%)',
      gray600: 'hsl(230, 5%, 50%)',
      gray700: 'hsl(230, 5%, 70%)',
      gray800: 'hsl(230, 5%, 90%)',
      gray900: 'hsl(230, 5%, 100%)',

      red100: 'hsl(0, 100%, 10%)',
      red200: 'hsl(0, 100%, 20%)',
      red300: 'hsl(0, 100%, 30%)',
      red400: 'hsl(0, 100%, 40%)',
      red500: 'hsl(0, 100%, 50%)',
      red600: 'hsl(0, 100%, 60%)',
      red700: 'hsl(0, 100%, 70%)',
      red800: 'hsl(0, 100%, 80%)',
      red900: 'hsl(0, 100%, 90%)',

      yellow100: 'hsl(60, 100%, 10%)',
      yellow200: 'hsl(60, 100%, 20%)',
      yellow300: 'hsl(60, 100%, 30%)',
      yellow400: 'hsl(60, 100%, 40%)',
      yellow500: 'hsl(60, 100%, 50%)',
      yellow600: 'hsl(60, 100%, 60%)',
      yellow700: 'hsl(60, 100%, 70%)',
      yellow800: 'hsl(60, 100%, 80%)',
      yellow900: 'hsl(60, 100%, 90%)',

      green100: 'hsl(120, 100%, 10%)',
      green200: 'hsl(120, 100%, 20%)',
      green300: 'hsl(120, 100%, 30%)',
      green400: 'hsl(120, 100%, 40%)',
      green500: 'hsl(120, 100%, 50%)',
      green600: 'hsl(120, 100%, 60%)',
      green700: 'hsl(120, 100%, 70%)',
      green800: 'hsl(120, 100%, 80%)',
      green900: 'hsl(120, 100%, 90%)',

      blue100: 'hsl(210, 100%, 10%)',
      blue200: 'hsl(210, 100%, 20%)',
      blue300: 'hsl(210, 100%, 30%)',
      blue400: 'hsl(210, 100%, 40%)',
      blue500: 'hsl(210, 100%, 50%)',
      blue600: 'hsl(210, 100%, 60%)',
      blue700: 'hsl(210, 100%, 70%)',
      blue800: 'hsl(210, 100%, 80%)',
      blue900: 'hsl(210, 100%, 90%)'
    },
    fonts: {
      sans: 'Roboto, sans-serif'
    },
    fontSizes: {
      xs: '12px',
      sm: '14px',
      md: '16px',
      lg: '18px',
      xl: '20px',
      '2xl': '24px',
      '3xl': '30px',
      '4xl': '36px',
      '5xl': '48px',
      '6xl': '60px',
      '7xl': '72px'
    },
    space: {
      1: '4px',
      2: '8px',
      3: '12px',
      4: '16px',
      5: '24px',
      6: '32px',
      7: '48px',
      8: '64px',
      9: '96px',
      10: '128px',
      11: '192px',
      12: '256px',
      13: '384px',
      14: '512px',
      15: '640px',
      16: '768px'
    },
    sizes: {
      1: '4px',
      2: '8px',
      3: '12px',
      4: '16px',
      5: '24px',
      6: '32px',
      7: '48px',
      8: '64px',
      9: '96px',
      10: '128px',
      11: '192px',
      12: '256px',
      13: '384px',
      14: '512px',
      15: '640px',
      16: '768px'
    },
    radii: {
      xs: '2px',
      sm: '4px',
      md: '8px',
      lg: '12px',
      xl: '16px',
      round: '9999px'
    },
    fontWeights: {},
    lineHeights: {},
    letterSpacings: {},
    borderWidths: {},
    borderStyles: {},
    shadows: {},
    zIndices: {},
    transitions: {}
  },
  utils: {
    p: (value: Stitches.PropertyValue<'padding'>) => ({ padding: value }),
    pt: (value: Stitches.PropertyValue<'padding'>) => ({ paddingTop: value }),
    pr: (value: Stitches.PropertyValue<'padding'>) => ({ paddingRight: value }),
    pb: (value: Stitches.PropertyValue<'padding'>) => ({ paddingBottom: value }),
    pl: (value: Stitches.PropertyValue<'padding'>) => ({ paddingLeft: value }),
    py: (value: Stitches.PropertyValue<'padding'>) => ({ paddingTop: value, paddingBottom: value }),
    px: (value: Stitches.PropertyValue<'padding'>) => ({ paddingLeft: value, paddingRight: value }),

    m: (value: Stitches.PropertyValue<'margin'>) => ({ margin: value }),
    mt: (value: Stitches.PropertyValue<'margin'>) => ({ marginTop: value }),
    mr: (value: Stitches.PropertyValue<'margin'>) => ({ marginRight: value }),
    mb: (value: Stitches.PropertyValue<'margin'>) => ({ marginBottom: value }),
    ml: (value: Stitches.PropertyValue<'margin'>) => ({ marginLeft: value }),
    my: (value: Stitches.PropertyValue<'margin'>) => ({ marginTop: value, marginBottom: value }),
    mx: (value: Stitches.PropertyValue<'margin'>) => ({ marginLeft: value, marginRight: value }),

    sq: (value: Stitches.PropertyValue<'width'>) => ({ width: value, height: value })
  }
});

export type CSS = StitchesCSS<{ theme: typeof theme }>;
