import React from 'react';
import { Box, Container } from '@mui/material';
import { LinkedIn, LocalPostOffice } from '@mui/icons-material';
import Twitter from '@mui/icons-material/Twitter';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useNavigate } from "react-router-dom";
import Typography from '../Typography';
import { footerList } from '../../utils';

const Footer = (props) => {
    let navigate = useNavigate();
    const { sx, hideContent, showSecondFooter, children } = props;
    return (
        <Box mt={25} className="footer-sub" sx={{ borderTop: 2, borderColor: '#AE965A', ...sx }}>
            {!hideContent ?
                <Container
                    maxWidth='md'
                    sx={{
                        gap: '10px',
                        display: 'flex',
                        height: 'auto',
                    }}
                    className='flex-column'
                >
                    <Box pt={3} pb={4} mb={3}>
                        <Box mt={3} className='d-flex align-items-start justify-content-between'>
                            <Box className='d-flex align-items-end flex-column gap-4'>
                                <Typography text='القائمة ' sx={{ color: '#39281F', fontSize: '23px', fontWeight: 700 }} />
                                {footerList?.map((item, index) =>
                                    <Box onClick={() => navigate(item?.pathName)}>
                                        <Typography text={item?.navName} sx={{ color: window?.location?.pathname.includes(item?.pathName) ? '#AE965A' : '#000000', fontWeight: 400 }} />
                                    </Box>
                                )}
                            </Box>
                            <Box className='d-flex align-items-center flex-column gap-4'>
                                <Typography text='تابعنا على ' sx={{ color: '#39281F', fontSize: '23px', fontWeight: 700 }} />
                                <Box className='d-flex gap-2'>
                                    <Twitter sx={{ fill: '#AE965A' }} />
                                    <LinkedIn sx={{ fill: '#AE965A' }} />
                                    <LocalPostOffice sx={{ fill: '#AE965A' }} />
                                </Box>
                            </Box>
                            <Box className='d-flex align-items-end flex-column gap-4'>
                                <Typography text='العنوان ' sx={{ color: '#39281F', fontSize: '23px', fontWeight: 700 }} />
                                <Typography text='جدة - الرياض - الدمام  ' sx={{ color: '#000000', fontWeight: 400 }} />
                            </Box>
                            <Box className='d-flex align-items-end flex-column gap-4'>
                                <Typography text='ساعات العمل  ' sx={{ color: '#39281F', fontSize: '23px', fontWeight: 700 }} />
                                <Typography text='من الاحد الى الخميس  ' sx={{ color: '#000000', fontWeight: 400 }} />
                                <Typography text='9:00 ص - 4:00 م' sx={{ color: '#000000', fontWeight: 400 }} />
                            </Box>
                        </Box>
                        <Box className='d-flex align-items-center flex-column gap-2 justify-content-center' mt={1}>
                            <Typography
                                mt={3}
                                text='جميع الحقوق محفوظة لمجموعة ماجد بن طالب     2022'
                                sx={{ color: '#000000', fontWeight: 400 }}
                                className='text-end'
                            />
                            <Box sx={(theme) => ({
                                backgroundColor: theme.palette.secondary.main,
                                borderRadius: 5,
                                cursor: 'pointer'
                            })} px={0.5}
                                pb={2.5} pt={0.5}
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            >
                                <KeyboardArrowUpIcon sx={{ fill: 'white' }} />
                            </Box>
                        </Box>
                    </Box>
                </Container>
                :
                <Container
                    maxWidth={false}
                    sx={{
                        gap: '10px',
                        display: 'flex',
                        height: 'auto',
                    }}
                    className='flex-column'
                >
                    {children}
                </Container>
            }
        </Box>
    )
}
export default Footer;