import React from 'react';
import {ThemeProvider as MuiThemeProvider} from '@mui/material';

import {THEME} from '../theme';

const ThemeProvider = ({children}) => (
    <MuiThemeProvider theme={THEME}>{children}</MuiThemeProvider>
);

export {ThemeProvider};
