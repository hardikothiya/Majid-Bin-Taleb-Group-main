import {FONTS_FAMILIES, GREY, WHITE, YELLOW} from "../styles";

export const BUTTON = {
    styleOverrides: {
        root: {
            backgroundColor: `${YELLOW[100]}`,
            fontFamily: [FONTS_FAMILIES.PRIMARY].join(','),
            color: `${WHITE[100]}`,
        },
    },
};
