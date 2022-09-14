import React from 'react';
import { SvgIcon as MuiSvgIcon } from '@mui/material';

import { ICONS } from './icon';

const SvgIcon = ({ icon, ...restProps }) => (
    <MuiSvgIcon {...restProps}>{ICONS[`${icon}`]}</MuiSvgIcon>
);

export { SvgIcon };
