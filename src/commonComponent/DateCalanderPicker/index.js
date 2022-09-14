import * as React from 'react';
import dayjs from 'dayjs';
import { FormControl, MenuItem, Select, Box } from "@mui/material";
import isBetweenPlugin from 'dayjs/plugin/isBetween';
import { styled } from '@mui/material/styles';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { CalendarPicker } from '@mui/x-date-pickers/CalendarPicker';
import { PickersDay } from '@mui/x-date-pickers/PickersDay';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { arEG } from '@mui/material/locale';

dayjs.extend(isBetweenPlugin);

const CustomPickersDay = styled(PickersDay, {
    shouldForwardProp: (prop) =>
        prop !== 'dayIsBetween' && prop !== 'isFirstDay' && prop !== 'isLastDay',
})(({ theme, dayIsBetween, isFirstDay, isLastDay }) => ({
    ...(dayIsBetween && {
        borderRadius: 0,
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
        '&:hover, &:focus': {
            backgroundColor: theme.palette.primary.dark,
        },
    }),
    ...(isFirstDay && {
        borderTopLeftRadius: '50%',
        borderBottomLeftRadius: '50%',
    }),
    ...(isLastDay && {
        borderTopRightRadius: '50%',
        borderBottomRightRadius: '50%',
    }),
}));

function disableWeekends(date) {
    const d = new Date();
    let day = d.getDay()
    // need to get specific day for disabe it
    console.log("day is ------------------------>", d, "date--------------->", date);
    if (typeof date === 'object' && date !== null && 'getDay' in date) {
        const result = date.getDay();
        console.log(result); // 👉️ 4
    }
    // if (date?.getDay()) {
    //     return date.getDay() === 0 || date.getDay() === 6;
    // } else {
    //     // return false
    // }
}

function disableRandomDates() {
    return Math.random() > 0.7;
}

export default function DateCalanderPicker() {
    const [date, setDate] = React.useState(dayjs());

    // const renderWeekPickerDay = (date, selectedDates, pickersDayProps) => {
    //     if (!value) {
    //         return <PickersDay {...pickersDayProps} />;
    //     }

    //     const start = value.startOf('week');
    //     const end = value.endOf('week');

    //     const dayIsBetween = date.isBetween(start, end, null, '[]');
    //     const isFirstDay = date.isSame(start, 'day');
    //     const isLastDay = date.isSame(end, 'day');

    //     return (
    //         <CustomPickersDay
    //             {...pickersDayProps}
    //             disableMargin
    //             dayIsBetween={dayIsBetween}
    //             isFirstDay={isFirstDay}
    //             isLastDay={isLastDay}
    //         />
    //     );
    // };

    return (
        <Box sx={{ borderRadius: '20px', background: 'white', boxShadow: '0px 2px 12px 0px #0000001A' }} py={1}>
            <LocalizationProvider locale={arEG} dateAdapter={AdapterDayjs}>
                {/* <StaticDatePicker
                displayStaticWrapperAs="desktop"
                label="Week picker"
                value={value}
                onChange={(newValue) => {
                    setValue(newValue);
                }}
                renderDay={renderWeekPickerDay}
                renderInput={(params) => <TextField {...params} />}
                inputFormat="'Week of' MMM d"
                sx={{ borderRadius: 20 }}
            /> */}
                <CalendarPicker
                    shouldDisableDate={disableWeekends}
                    date={date}
                    locale={arEG}
                    onChange={(newDate) => setDate(newDate)}
                />
                <FormControl sx={{ m: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }} className="gap-3">
                    <Select
                        displayEmpty
                        defaultValue='am'
                        sx={{
                            fontSize: '15px',
                            borderRadius: '10px',
                            backgroundColor: '#fff',
                            color: '#AE965A',
                            '& legend': { display: 'none' }, '& fieldset': {
                                top: 0,
                                color: '#AE965A',
                            },
                            '& .MuiOutlinedInput-notchedOutline': {
                                color: '#AE965A !important',
                                borderColor: '#CAC7C7 !important'
                            },
                            '& .MuiSelect-select': {
                                paddingRight: '30px !important',
                                py: '10px'
                            },
                            '& .MuiSvgIcon-root': {
                                fill: '#AE965A'
                            }
                        }}
                    >
                        <MenuItem value='am'>AM</MenuItem>
                        <MenuItem value='pm'>PM</MenuItem>
                    </Select>
                    <Select
                        displayEmpty
                        defaultValue='2'
                        sx={{
                            fontSize: '15px',
                            // border: '1px solid #CAC7C7',
                            borderRadius: '10px',
                            backgroundColor: '#fff',
                            color: '#AE965A',
                            '& legend': { display: 'none' }, '& fieldset': {
                                top: 0,
                                color: '#AE965A',
                                // borderColor: '#CAC7C7'
                            },
                            '& .MuiOutlinedInput-notchedOutline': {
                                color: '#AE965A !important',
                                borderColor: '#CAC7C7 !important'
                            },
                            '& .MuiSelect-select': {
                                paddingRight: '30px !important',
                                py: '10px'
                            },
                            '& .MuiSvgIcon-root': {
                                fill: '#AE965A'
                            }
                        }}
                    >
                        {Array.from({ length: 60 }).map((item, index) => <MenuItem value={index + 1}>{index + 1}</MenuItem>)}
                    </Select>
                    <Select
                        displayEmpty
                        defaultValue='2'
                        sx={{
                            fontSize: '15px',
                            // border: '1px solid #CAC7C7',
                            borderRadius: '10px',
                            backgroundColor: '#fff',
                            color: '#AE965A',
                            '& legend': { display: 'none' }, '& fieldset': {
                                top: 0,
                                color: '#AE965A',
                                borderColor: '#CAC7C7'
                            },
                            '& .MuiOutlinedInput-notchedOutline': {
                                color: '#AE965A !important',
                                // borderColor: '#CAC7C7 !important'
                            },
                            '& .MuiSelect-select': {
                                paddingRight: '30px !important',
                                py: '10px'
                            },
                            '& .MuiSvgIcon-root': {
                                fill: '#AE965A'
                            }
                        }}
                    >
                        {Array.from({ length: 12 }).map((item, index) => <MenuItem value={index + 1}>{index + 1}</MenuItem>)}
                    </Select>
                    <AccessTimeIcon sx={{ fill: '#CAC7C7' }} />
                </FormControl>
            </LocalizationProvider>
        </Box>
    );
}