/**
 * Color Variables
 * Variables should use after `theme.palette`
 * Ex. `theme.palette.primary.main`, `theme.palette.grey[200]`
 */

import {red, orange} from '@mui/material/colors';

/**
 * BROWN Color (Primary Color)
 */
export const BROWN = {
    100: '#39281F',
    200: '#CAC7C7'
};
/**
 * RED Color (Secondary Color)
 */
export const RED = {
    100: '#BE1D3F',
    200: '#EF4060',
    300: '#EF4060',
};

/**
 * GREY Color (Body Color)
 */
export const GREY = {
    100: '#2B383E',
    200: '#4C575B',
    300: '#848484',
    400: '#B7B7B7',
    500: '#E1E1E1',
    600: '#F3F2EF',
    700: '#494949',
    800: '#C5CFD1',
    900: '#C0C0C0',
    A100: '#F4F4F4',
    A200: '#C5C5C5',
    A400: '#666666',
    A700: '#90A3A9',
};

/**
 * WHITE Color
 */
export const WHITE = {
    100: '#ffffff',
};

/**
 * BLACK Color
 */
export const BLACK = {
    100: '#000000',
    200: '#626262',
    300: '#2C3131',
};

/**
 * YELLOW Color
 */
export const YELLOW = {
    100: '#AE965A',
    200: '#D9C084',
    300: '#F5F1EE',
    400: '#FDFDFD',
};

/**
 * Theme Palette for MUI with all color variables
 */
export const PALETTE = {
    primary: {
        main: BROWN[100],
        dark: BROWN[100],
        light: BROWN[200],
        100: BROWN[100],
        200: BROWN[200],
    },
    secondary: {
        main: YELLOW[100],
        dark: YELLOW[100],
        light: YELLOW[200],
        100: YELLOW[100],
        200: YELLOW[200],
        300: YELLOW[300],
        400: YELLOW[400],
    },
    grey: GREY,
    action: {
        disabled: GREY[200],
    },
    error: {
        main: RED[100],
        light: RED[200],
        100: red.A400,
        200: red[300],
    },
    warning: {
        main: orange.A400,
    },
    text: {
        primary: GREY[700],
        disabled: GREY[200],
        secondary: BLACK[100],
    },
    white: WHITE,
    black: BLACK,
    yellow: YELLOW,
};
