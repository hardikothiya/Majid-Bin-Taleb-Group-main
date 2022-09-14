import React from "react";
import { Box, FormControl, InputLabel, Input } from '@mui/material';
import { VisibilityOff, Visibility } from '@material-ui/icons';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';

const InputWithLabel = (props) => {
    const { label, required, type = 'text', sx, inputSx, defaultValue, value, name, ...restProps } = props;
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <Box className=' w-100' {...restProps} px={2} pt={1} sx={{
            borderBottomRightRadius: '46px', background: 'white',
            boxShadow: '0px 10px 15px 0px rgba(0, 0, 0, 0.1)', ...sx
        }}>
            <InputLabel sx={{ fontSize: '0.8rem', color: '#AE965A' }} className='text-end' htmlFor="component-simple">
                {required && <span className='color-red'>*</span>}
                {label}
            </InputLabel>
            <FormControl className=' w-100' variant="standard">
                <Input
                    defaultValue={defaultValue}
                    type={type === 'password' ? values.showPassword ? 'text' : 'password' : type}
                    name={name}
                    required={required}
                    id="component-simple"
                    disableUnderline={true}
                    sx={{ '& .MuiInputBase-input ': { textAlign: 'end', pr: 2 }, ...inputSx }}
                    onChange={handleChange('password')}
                    startAdornment={
                        <InputAdornment position="start">
                            {type === "password" ? <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="start"
                            >
                                {values.showPassword ?
                                    <VisibilityOff style={{ color: 'rgba(174, 150, 90, 0.6)', fill: 'rgba(174, 150, 90, 0.6)' }} /> :
                                    <Visibility style={{ color: 'rgba(174, 150, 90, 0.6)', fill: 'rgba(174, 150, 90, 0.6)' }} />
                                }

                            </IconButton>
                                :
                                <>
                                </>
                            }
                        </InputAdornment>
                    }
                />
            </FormControl>
        </Box>
    )
};
export default InputWithLabel;