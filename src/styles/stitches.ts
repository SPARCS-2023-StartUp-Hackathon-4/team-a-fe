import * as Stitches from '@stitches/react';

export type CSS = Stitches.CSS<typeof config>;

export const stitchesReset = () => {
  const styles = getCssText();
  reset();
  return styles;
};

export const {
  theme,
  config,
  reset,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  createTheme,
} = Stitches.createStitches({
  theme: {
    colors: {
      grey50: '#f9fafb',
      grey100: '#f2f4f6',
      grey200: '#e5e8eb',
      grey300: '#d1d6db',
      grey400: '#b0b8c1',
      grey500: '#8b95a1',
      grey600: '#6b7684',
      grey700: '#4e5968',
      grey800: '#333d4b',
      grey900: '#191f28',
      greyOpacity50: 'rgba(0,23,51,0.02)',
      greyOpacity100: 'rgba(2,32,71,0.05)',
      greyOpacity200: 'rgba(0,27,55,0.1)',
      greyOpacity300: 'rgba(0,29,58,0.18)',
      greyOpacity400: 'rgba(0,29,54,0.31)',
      greyOpacity500: 'rgba(3,24,50,0.46)',
      greyOpacity600: 'rgba(0,19,43,0.58)',
      greyOpacity700: 'rgba(3,18,40,0.7)',
      greyOpacity800: 'rgba(0,12,30,0.8)',
      greyOpacity900: 'rgba(2,9,19,0.91)',
      white: '#fff',
      black: '#000',
      blue50: '#e8f3ff',
      blue200: '#90c2ff',
      blue100: '#c9e2ff',
      blue300: '#64a8ff',
      blue400: '#4593fc',
      blue500: '#3182f6',
      blue600: '#2272eb',
      blue700: '#1b64da',
      blue800: '#1957c2',
      blue900: '#194aa6',
      red50: '#ffebee',
      red100: '#ffcdd2',
      red200: '#ef9a9a',
      red300: '#e57373',
      red400: '#ef5350',
      red500: '#f44336',
      red600: '#e53935',
      red700: '#d32f2f',
      red800: '#c62828',
      red900: '#b71c1c',
      orange50: '#fff3e0',
      orange100: '#ffe0b2',
      orange200: '#ffcc80',
      orange300: '#ffb74d',
      orange400: '#ffa726',
      orange500: '#ff9800',
      orange600: '#fb8c00',
      orange700: '#f57c00',
      orange800: '#ef6c00',
      orange900: '#e65100',
      yellow50: '#fffde7',
      yellow100: '#fff9c4',
      yellow200: '#fff59d',
      yellow300: '#fff176',
      yellow400: '#ffee58',
      yellow500: '#ffeb3b',
      yellow600: '#fdd835',
      yellow700: '#fbc02d',
      yellow800: '#f9a825',
      yellow900: '#f57f17',
      purple50: '#f3e5f5',
      purple100: '#e1bee7',
      purple200: '#ce93d8',
      purple300: '#ba68c8',
      purple400: '#ab47bc',
      purple500: '#9c27b0',
      purple600: '#8e24aa',
      purple700: '#7b1fa2',
      purple800: '#6a1b9a',
      purple900: '#4a148c',
      teal50: '#e1f0f2',
      teal100: '#b1dade',
      teal200: '#81c7cc',
      teal300: '#4caeb5',
      teal400: '#269da6',
      teal500: '#008c96',
      teal600: '#00818a',
      teal700: '#007278',
      teal800: '#006369',
      teal900: '#004d4d',
      green50: '#e5fff4',
      green100: '#abf2d4',
      green200: '#5ae9ad',
      green300: '#1cd98a',
      green400: '#05c072',
      green500: '#00a661',
      green600: '#009959',
      green700: '#008a50',
      green800: '#007544',
      green900: '#005c36',
      whiteOpacity50: 'rgba(209,209,253,0.05)',
      whiteOpacity100: 'rgba(217,217,255,0.11)',
      whiteOpacity200: 'rgba(222,222,255,0.19)',
      whiteOpacity300: 'rgba(224,224,255,0.27)',
      whiteOpacity400: 'rgba(232,232,253,0.36)',
      whiteOpacity500: 'rgba(242,242,255,0.47)',
      whiteOpacity600: 'rgba(248,248,255,0.6)',
      whiteOpacity700: 'rgba(253,253,255,0.75)',
      whiteOpacity800: 'rgba(253,253,254,0.89)',
      whiteOpacity900: '#fff',
      inverseGrey50: '#202027',
      inverseGrey100: '#2c2c35',
      inverseGrey200: '#3c3c47',
      inverseGrey300: '#4d4d59',
      inverseGrey400: '#62626d',
      inverseGrey500: '#7e7e87',
      inverseGrey600: '#9e9ea4',
      inverseGrey700: '#c3c3c6',
      inverseGrey800: '#e4e4e5',
      inverseGrey900: '#fff',
    },
    fontSizes: {
      1: '4px',
      2: '8px',
      3: '12px',
      4: '16px',
      5: '20px',
      6: '24px',
      7: '28px',
      8: '32px',
      9: '36px',
    },
    space: {
      1: '4px',
      2: '8px',
      3: '12px',
      4: '16px',
      5: '20px',
      6: '24px',
      7: '28px',
      8: '32px',
      9: '36px',
    },
    radii: {
      1: '4px',
      2: '6px',
      3: '8px',
      4: '12px',
      round: '50%',
      pill: '9999px',
    },
    media: {
      bp1: '(min-width: 520px)',
      bp2: '(min-width: 900px)',
      bp3: '(min-width: 1200px)',
      bp4: '(min-width: 1800px)',
    },
    fonts: {
      sans: 'Pretendard, sans-serif',
    },
  },
  utils: {
    p: (value: Stitches.PropertyValue<'padding'>) => ({
      padding: value,
    }),
    pt: (value: Stitches.PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
    }),
    pr: (value: Stitches.PropertyValue<'paddingRight'>) => ({
      paddingRight: value,
    }),
    pb: (value: Stitches.PropertyValue<'paddingBottom'>) => ({
      paddingBottom: value,
    }),
    pl: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
    }),
    px: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: Stitches.PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    m: (value: Stitches.PropertyValue<'margin'>) => ({
      margin: value,
    }),
    mt: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginTop: value,
    }),
    mr: (value: Stitches.PropertyValue<'marginRight'>) => ({
      marginRight: value,
    }),
    mb: (value: Stitches.PropertyValue<'marginBottom'>) => ({
      marginBottom: value,
    }),
    ml: (value: Stitches.PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
    }),
    mx: (value: Stitches.PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginTop: value,
      marginBottom: value,
    }),

    ta: (value: Stitches.PropertyValue<'textAlign'>) => ({ textAlign: value }),

    fd: (value: Stitches.PropertyValue<'flexDirection'>) => ({
      flexDirection: value,
    }),
    fw: (value: Stitches.PropertyValue<'flexWrap'>) => ({ flexWrap: value }),

    ai: (value: Stitches.PropertyValue<'alignItems'>) => ({
      alignItems: value,
    }),
    ac: (value: Stitches.PropertyValue<'alignContent'>) => ({
      alignContent: value,
    }),
    jc: (value: Stitches.PropertyValue<'justifyContent'>) => ({
      justifyContent: value,
    }),
    as: (value: Stitches.PropertyValue<'alignSelf'>) => ({ alignSelf: value }),
    fg: (value: Stitches.PropertyValue<'flexGrow'>) => ({ flexGrow: value }),
    fs: (value: Stitches.PropertyValue<'flexShrink'>) => ({
      flexShrink: value,
    }),
    fb: (value: Stitches.PropertyValue<'flexBasis'>) => ({ flexBasis: value }),

    bc: (value: Stitches.PropertyValue<'backgroundColor'>) => ({
      backgroundColor: value,
    }),

    br: (value: Stitches.PropertyValue<'borderRadius'>) => ({
      borderRadius: value,
    }),
    btrr: (value: Stitches.PropertyValue<'borderTopRightRadius'>) => ({
      borderTopRightRadius: value,
    }),
    bbrr: (value: Stitches.PropertyValue<'borderBottomRightRadius'>) => ({
      borderBottomRightRadius: value,
    }),
    bblr: (value: Stitches.PropertyValue<'borderBottomLeftRadius'>) => ({
      borderBottomLeftRadius: value,
    }),
    btlr: (value: Stitches.PropertyValue<'borderTopLeftRadius'>) => ({
      borderTopLeftRadius: value,
    }),

    bs: (value: Stitches.PropertyValue<'boxShadow'>) => ({ boxShadow: value }),

    lh: (value: Stitches.PropertyValue<'lineHeight'>) => ({
      lineHeight: value,
    }),

    ox: (value: Stitches.PropertyValue<'overflowX'>) => ({ overflowX: value }),
    oy: (value: Stitches.PropertyValue<'overflowY'>) => ({ overflowY: value }),

    pe: (value: Stitches.PropertyValue<'pointerEvents'>) => ({
      pointerEvents: value,
    }),
    us: (value: Stitches.PropertyValue<'userSelect'>) => ({
      WebkitUserSelect: value,
      userSelect: value,
    }),

    userSelect: (value: Stitches.PropertyValue<'userSelect'>) => ({
      WebkitUserSelect: value,
      userSelect: value,
    }),

    size: (value: Stitches.PropertyValue<'width'>) => ({
      width: value,
      height: value,
    }),

    hover: (styles: Stitches.CSS) => ({
      transition: 'background .2s ease, color .1s ease, box-shadow',
      '&:hover': {
        ...styles,
        transition: 'background .2s ease, color .1s ease, box-shadow .2s ease;',
      },
    }),

    appearance: (value: Stitches.PropertyValue<'appearance'>) => ({
      WebkitAppearance: value,
      appearance: value,
    }),
    backgroundClip: (value: Stitches.PropertyValue<'backgroundClip'>) => ({
      WebkitBackgroundClip: value,
      backgroundClip: value,
    }),
  },
});
