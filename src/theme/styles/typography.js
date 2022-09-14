/**
 * Fonts Family styling Variables
 */
export const FONTS_FAMILIES = {
  PRIMARY: 'Cairo',
};

/**
 * Fonts Size: Headings styling Variables
 */
export const HEADINGS = {
  H1: '5rem',
  H2: '3.5rem',
  H3: '2.75rem',
  H4: '2.25rem',
  H5: '2rem',
  H6: '1.75rem',
};

/**
 * Fonts Size: Display styling Variables
 */
export const DISPLAY = {
  D1: '3.5rem',
  D2: '2.75rem',
  D3: '2.25rem',
};

/**
 * Fonts Size: Body styling Variables
 */
export const BODY = {
  XX_SMALL: '0.56rem',
  X_SMALL: '0.75rem',
  SMALL: '0.875rem',
  REGULAR: '1rem',
  LARGE: '1.25rem',
  X_LARGE: '1.5rem',
};

/**
 * Fonts Size: Headings, Display and Body styling common variable
 */
export const FONT_SIZE = {
  ...BODY,
  ...DISPLAY,
  ...HEADINGS,
};

/**
 * Fonts Weight styling Variables
 */
export const FONT_WEIGHT = {
  LIGHTER: 'lighter',
  LIGHT: 300,
  REGULAR: 400,
  SEMI_BOLD: 500,
  BOLD: 600,
  BOLDER: 'bolder',
};

/**
 * Line Height styling Variables
 */
export const LINE_HEIGHT = {
  SMALL: 1.25,
  REGULAR: 1.5,
  LARGE: 2,
  X_LARGE: '2.2rem',
};

/**
 * Regular font size in PX
 */
const REGULAR_FONT_SIZE = 16;

/**
 * Typography styling for MUI Theme
 * Font Family, Headings
 */
export const TYPOGRAPHY = {
  fontFamily: [FONTS_FAMILIES.PRIMARY].join(','),
  fontSize: REGULAR_FONT_SIZE,
  htmlFontSize: REGULAR_FONT_SIZE,
  fontWeightLight: FONT_WEIGHT.LIGHT,
  fontWeightRegular: FONT_WEIGHT.REGULAR,
  fontWeightMedium: FONT_WEIGHT.BOLD,
  fontWeightBold: FONT_WEIGHT.BOLD,
  h1: {
    fontSize: FONT_SIZE.H1,
    fontWeight: FONT_WEIGHT.BOLDER,
  },
  h2: {
    fontSize: FONT_SIZE.H2,
    fontWeight: FONT_WEIGHT.BOLD,
  },
  h3: {
    fontSize: FONT_SIZE.H3,
    fontWeight: FONT_WEIGHT.SEMI_BOLD,
  },
  h4: {
    fontSize: FONT_SIZE.H4,
    fontWeight: FONT_WEIGHT.SEMI_BOLD,
  },
  h5: {
    fontSize: FONT_SIZE.H5,
  },
  h6: {
    fontSize: FONT_SIZE.H6,
  },
};

/**
 * Fonts styling for MUI Theme
 * Font, line-height, body text and more
 */
export const FONT = {
  size: FONT_SIZE,
  weight: FONT_WEIGHT,
  family: FONTS_FAMILIES,
  lineHeight: LINE_HEIGHT,
};
