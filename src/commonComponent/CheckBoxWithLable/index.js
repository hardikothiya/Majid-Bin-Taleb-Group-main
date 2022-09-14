import React from "react";
import { Box, Checkbox } from "@mui/material";
import { RadioButtonUnchecked, CheckCircle } from '@material-ui/icons';

import Typography from "../Typography";

const CheckBoxWithLable = (props) => {
    const { labelText, sx = {}, className, restProps } = props;
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    return (
        <Box sx={{ ...sx }} className={`${className} d-flex align-items-center justify-content-end`} {...restProps}>
            {labelText && <Typography
                sx={{
                    color: '#000000',
                    fontSize: '16px',
                }}
                className="text-end"
                text={labelText}
            />}
            <Checkbox
                {...label}
                defaultChecked
                icon={<RadioButtonUnchecked style={{ color: '#ae965abf', fill: '#ae965abf' }} />}
                checkedIcon={<CheckCircle style={{ color: '#ae965abf', fill: '#ae965abf' }} />}
            />
        </Box>
    )
};
export default CheckBoxWithLable;