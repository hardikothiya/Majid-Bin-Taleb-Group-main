import React from "react";
import {styled, Button as MuiButton} from '@mui/material';

const StyledButton = styled(MuiButton)(
    ({
         size, rounded, secondary, disabled, theme
     }) => ({
        textTransform: 'none',
        padding: `${theme.spaces.REGULAR} ${theme.spaces.XX_LARGE}`,
        fontSize: theme.font.size.REGULAR,
        fontWeight: theme.font.weight.REGULAR,
        borderRadius: theme.border.radius.X_SMALL,
        fontFamily: [theme.font.family.PRIMARY].join(','),
        '&:hover': {
            color: theme.palette.white[100],
            background: theme.palette.primary.main,
        },
        '&:focus': {
            color: theme.palette.white[100],
            background: theme.palette.primary.light,
        },
        ...(disabled
            ? {
                color: theme.palette.primary.main,
                background: theme.palette.white[100],
            }
            : {
                color: theme.palette.primary.main,
                background: theme.palette.white[100],
            }),
        ...(size === 'large' && {
            fontSize: theme.font.size.LARGE,
        }),
        ...(size === 'medium' && {
            fontSize: theme.font.size.REGULAR,
        }),
        ...(size === 'small' && {
            fontSize: theme.font.size.SMALL,
            fontWeight: theme.font.weight.SEMI_BOLD,
            padding: `${theme.spaces.X_SMALL} ${theme.spaces.XXX_LARGE}`,
        }),
        ...(rounded && {
            borderRadius: theme.border.radius.XXX_LARGE,
        }),
        ...(secondary && {
            color: `${theme.palette.white[100]} !important`,
            background: theme.palette.primary.light,
        }),
    }),
);


const Button = ({
                    children,
                    size = 'medium',
                    rounded = false,
                    secondary = false,
                    disabled = false,
                    ...restProps
                }) => (
    <StyledButton
        size={size}
        rounded={rounded}
        secondary={secondary}
        disabled={disabled}
        {...restProps}
    >
        {children}
    </StyledButton>
);
export default Button;
