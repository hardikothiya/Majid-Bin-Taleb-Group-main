import React from "react";
import { TextField } from '@mui/material'
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = (props) => {
    const { sx } = props;
    return (<TextField
        InputLabelProps={{ shrink: false }}
        variant="outlined"
        sx={{
            width: '290px',
            '& .MuiInputBase-root': {
                pl: 0,
            },
            borderRadius: 10,
            '& legend': { display: 'none' }, '& fieldset': { top: 0 },
            border: '1px solid #AE965A',
            '& .MuiOutlinedInput-notchedOutline': {
                border: '0px !important'
            },
            '& .MuiIconButton-root': {
                pr: 0
            },
            '& .MuiOutlinedInput-input': {
                padding: '7px 10px 7px 0',
                textAlign: 'end'
            },
            ...sx
        }}
        className='text-end'
        placeholder='نص العنصر النائب'
        InputProps={{
            startAdornment: (
                <InputAdornment>
                    <IconButton>
                        <SearchIcon sx={{ fill: '#AE965A' }} />
                    </IconButton>
                </InputAdornment>
            )
        }}
    />
    )
};
export default SearchBar;