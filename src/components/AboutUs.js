import React from 'react';
import { Box, Container } from '@mui/material';
import { mobileAndTabletCheck } from '../utils';
import diamond from "../assets/diamond.svg";
import HammerImg from '../assets/law-justice-bg.jpg';
import Typography from '../commonComponent/Typography';
import Footer from "../commonComponent/Footer";
import whatsappIcon from "../assets/whatsappIcon.svg";

const AboutUs = () => {
    const isMobile = mobileAndTabletCheck();
    return (
        <>
            <Box sx={{
                backgroundImage: `url(${diamond})`,
            }}>
                <Box sx={{
                    backgroundImage: `url(${HammerImg})`,
                    backgroundSize: '100% 80%',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    my: 10
                }}>
                    <Container
                        maxWidth="md"
                        sx={{
                            gap: isMobile ? '10px' : '150px',
                            display: 'flex',
                            height: 'auto',
                        }}
                        className='flex-column'
                    >
                        <Box className='d-flex align-items-center justify-content-end'>
                            <Box sx={{ maxWidth: '400px', borderBottomRightRadius: 20 }} className="w-100 bg-white gap-3" p={2} pb={3}>
                                <Typography text='رسالتنا ' sx={{ color: '#39281F', fontSize: '22px', fontWeight: 600, textAlign: 'end' }} />
                                <Typography text='هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور
هو ببساطة نص شكلي (بمعنى أن هو ببساطة نص شكلي (بمعنى أن'
                                    sx={{
                                        color: '#39281F',
                                        fontSize: '16px',
                                        fontWeight: 400,
                                        textAlign: 'end'
                                    }}
                                />
                            </Box>
                        </Box>
                        <Box className='d-flex align-items-center justify-content-start'>
                            <Box sx={{ maxWidth: '400px', borderBottomRightRadius: 20 }} className="w-100 bg-white gap-3" p={2} pb={3}>
                                <Typography text='لماذا نحن ؟' sx={{ color: '#39281F', fontSize: '22px', fontWeight: 600, textAlign: 'end' }} />
                                <Typography text='هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور
هو ببساطة نص شكلي (بمعنى أن هو ببساطة نص شكلي (بمعنى أن'
                                    sx={{
                                        color: '#39281F',
                                        fontSize: '16px',
                                        fontWeight: 400,
                                        textAlign: 'end'
                                    }}
                                />
                            </Box>
                        </Box>
                        <Box className='d-flex align-items-center justify-content-end'>
                            <Box sx={{ maxWidth: '400px', borderBottomRightRadius: 20 }} className="w-100 bg-white gap-3" p={2} pb={3}>
                                <Typography text='رؤيتنا' sx={{ color: '#39281F', fontSize: '22px', fontWeight: 600, textAlign: 'end' }} />
                                <Typography text='هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور
هو ببساطة نص شكلي (بمعنى أن هو ببساطة نص شكلي (بمعنى أن'
                                    sx={{
                                        color: '#39281F',
                                        fontSize: '16px',
                                        fontWeight: 400,
                                        textAlign: 'end'
                                    }}
                                />
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
        </>
    )
};
export default AboutUs;