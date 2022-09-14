import { createTheme } from '@mui/material/styles';
import { arEG } from '@mui/material/locale';

import {
  APP_BAR, BUTTON, CHECKBOX, INPUT, MENUITEM
} from './components';
import {
  SIZE,
  FONT,
  BORDER,
  PALETTE,
  SPACING,
  TYPOGRAPHY,
  BOX_SHADOW,
} from './styles/index';

/**
 * MUI Theme with all custom variables and extra arguments
 * Extra arguments: font, border, spaces
 */
export const THEME = createTheme({
  palette: PALETTE,
  typography: TYPOGRAPHY,
  components: {
    MuiInput: INPUT,
    MuiButton: BUTTON,
    MuiAppBar: APP_BAR,
    MuiCheckbox: CHECKBOX,
    MuiMenuItem: MENUITEM,
  },
  font: FONT,
  size: SIZE,
  border: BORDER,
  spaces: SPACING,
  boxShadow: BOX_SHADOW,
}, arEG);
