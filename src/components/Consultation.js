import React from 'react';
import { Box, Container, TextField } from '@mui/material';

import InputWithLabel from '../commonComponent/InputWithLabel';
import diamond from "../assets/diamond.svg";
import Typography from '../commonComponent/Typography';
import CheckBoxWithLable from '../commonComponent/CheckBoxWithLable';
import DateCalanderPicker from '../commonComponent/DateCalanderPicker';
import Footer from '../commonComponent/Footer';
import whatsappIcon from "../assets/whatsappIcon.svg";
import Button from '../commonComponent/Button';
import { mobileAndTabletCheck } from '../utils';

const Consultation = () => {
    const isMobile = mobileAndTabletCheck();
    return (
        <Box sx={{
            backgroundImage: `url(${diamond})`,
        }}>
            <Box mt={10}>
                <Container
                    maxWidth="md"
                    sx={{
                        gap: '10px',
                        display: 'flex',
                        height: 'auto',
                    }}
                    className='flex-column'
                >
                    <Box className="gap-2 d-flex flex-column">
                        <Typography
                            text="احجز لاستشارة سريعة  "
                            sx={{
                                fontSize: '20px',
                                color: '#39281F',
                                fontWeight: 900,
                                textAlign: 'end'
                            }}
                        />
                        <Typography
                            text=" ادخل  استشاراتك وسيتم الرد عليك في أقرب وقت"
                            sx={{
                                fontSize: '18px',
                                color: '#39281F',
                                fontWeight: 400,
                                textAlign: 'end'
                            }}
                        />
                    </Box>
                    <Box className='d-flex flex-column gap-5' mt={6}>
                        <Box className='d-flex gap-3'>
                            <InputWithLabel inputSx={{ color: '#979797', fontSize: '14px' }} defaultValue="نايف سالم الزهراني " label="اسمك " />
                            <InputWithLabel inputSx={{ color: '#979797', fontSize: '14px' }} defaultValue="055 123 4567" label="رقم الهاتف" />
                        </Box>
                        <Box className='d-flex flex-column gap-3'>
                            <Typography
                                text="نوع الاستشارة"
                                sx={{
                                    fontSize: '18px',
                                    color: '#39281F',
                                    fontWeight: 600,
                                    textAlign: 'end'
                                }}
                            />
                            <Box className='d-flex align-items-center gap-3'>
                                <CheckBoxWithLable
                                    labelText="يُستخدم في صناعات المطابع ودور النشر"
                                    className="w-100"
                                    sx={{
                                        background: 'white',
                                        maxWidth: '418px',
                                        borderRadius: 10,
                                        boxShadow: '0px 10px 15px 0px #0000001A',
                                        fontWeight: 600,
                                        fontSize: '16px',
                                        p: 1,
                                    }}
                                />
                                <CheckBoxWithLable
                                    labelText="يُستخدم في صناعات المطابع ودور النشر"
                                    className="w-100"
                                    sx={{
                                        background: 'white',
                                        maxWidth: '418px',
                                        borderRadius: 10,
                                        boxShadow: '0px 10px 15px 0px #0000001A',
                                        fontWeight: 600,
                                        fontSize: '16px',
                                        p: 1,
                                    }}
                                />
                            </Box>
                        </Box>
                        <Box className='d-flex flex-column gap-3'>
                            <Typography
                                text="قم بتحديد تاريخ "
                                sx={{
                                    fontSize: '18px',
                                    color: '#39281F',
                                    fontWeight: 600,
                                    textAlign: 'end'
                                }}
                            />
                            <Box className='d-flex gap-3 flex-wrap' sx={{ justifyContent: isMobile ? 'center' : 'space-between' }}>
                                <Box p={1} sx={{ borderBottomRightRadius: '46px', maxWidth: '418px', background: 'white', boxShadow: '0px 10px 15px 0px #0000001A' }} className="w-100">
                                    <Typography
                                        text="تفاصيل الاستشارة القانونية "
                                        sx={{
                                            fontSize: '14px',
                                            color: '#AE965A',
                                            fontWeight: 300,
                                            textAlign: 'end'
                                        }}
                                    />
                                    <TextField
                                        id="outlined-multiline-static"
                                        multiline
                                        rows={8}
                                        variant="outlined"
                                        sx={{
                                            border: 0,
                                            background: 'white',
                                            width: '100%',
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
                                            '& .MuiInputBase-input ': {
                                                textAlign: 'end',
                                                color: '#AE965A',
                                            }
                                        }}
                                    />
                                </Box>
                                <DateCalanderPicker />
                            </Box>
                        </Box>
                        <Box mt={2} className="d-flex align-items-center justify-content-center">
                            <Button size='small' rounded sx={(theme) => ({
                                maxHeight: '40px',
                                height: '100%',
                                backgroundColor: theme.palette.secondary.main,
                                color: theme.palette.white[100],
                                lineHeight: '41px',
                                maxWidth: '190px',
                                fontWeight: 800
                            })}
                                className="w-100"
                            >
                                ارسال
                            </Button>
                        </Box>
                    </Box>
                </Container>
            </Box>
            <Box my={5} className='d-flex align-items-center justify-content-end gap-3 w-100'>
                <Box className='position-relative'
                    sx={(theme) => ({ backgroundColor: theme.palette.white[100], borderRadius: 30, boxShadow: '0px 4px 4px 0px #00000040' })} p={1}
                    px={2}>
                    <Box sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '100%',
                        marginTop: '-5px',
                        borderWidth: '5px',
                        borderStyle: 'solid',
                        borderColor: 'transparent transparent transparent white',
                    }} />
                    <Typography sx={(theme) => ({
                        color: theme.palette.primary.main,
                        fontSize: '14px',
                        fontWeight: 500
                    })} text='تواصل معنا الآن عبر الواتساب ' />
                </Box>
                <Box sx={{ maxWidth: '40px', maxHeight: '40px' }}>
                    <img src={whatsappIcon} alt='' className="h-100 w-100" />
                </Box>
            </Box>
            <Footer showSecondFooter sx={{ mt: 5 }} />
        </Box>
    )
};

export default Consultation;