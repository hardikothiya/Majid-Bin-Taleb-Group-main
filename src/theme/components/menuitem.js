import { GREY, WHITE } from '../styles/color';
import { FONTS_FAMILIES } from '../styles/typography';

export const MENUITEM = {
  styleOverrides: {
    root: {
      backgroundColor: WHITE[100],
      fontFamily: [FONTS_FAMILIES.PRIMARY].join(','),
      '&.Mui-selected': {
        backgroundColor: GREY[500],
      },
    },
  },
};
