import { TextField as MuiTextField } from '@mui/material';

const TextField = (props) => {
    return (
        <MuiTextField
            id="outlined-basic"
            label={false}
            variant="outlined"
            sx={{
                textAlign: 'end',
                border: 0,
                color: '#AE965A',
                '& legend': {
                    border: 0,
                    display: 'none',
                    borderWidth: '0px !important',
                },
                '& fieldset': {
                    border: 0,
                    top: 0,
                    borderWidth: '0px !important',
                },
                '& .Mui-focused & .MuiOutlinedInput-notchedOutline': {
                    borderWidth: '0px !important',
                    outline: 'none !important'
                },
                '& .MuiInputBase-root': {
                    border: 0,
                    borderWidth: '0px !important',
                    borderBottomRightRadius: '30px',
                    background: '#fff',
                },
                '& .MuiOutlinedInput-input': {
                    textAlign: 'end',
                    color: '#AE965A',
                }
            }}
            {...props}
        />
    )
};
export default TextField;