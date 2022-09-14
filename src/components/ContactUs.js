import React from 'react';
import { Grid, Paper, Container, Box, FormControl, InputLabel } from '@mui/material';
import { experimentalStyled as styled } from '@mui/material/styles';
import diamond from "../assets/diamond.svg";
import Typography from '../commonComponent/Typography';
import whatsappIcon from "../assets/whatsappIcon.svg";
import uPin from "../assets/uPin.svg";
import Footer from '../commonComponent/Footer';
import TextField from '../commonComponent/TextField';
import Button from '../commonComponent/Button';
import ContactMap from '../commonComponent/GoogleMap';
import InputWithLabel from '../commonComponent/InputWithLabel';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    background: 'transparent'
}));

const ContactUs = () => {
    return (
        <Box sx={{ backgroundImage: `url(${diamond})` }}>
            <Box mt={5}>
                <Container
                    maxWidth='xl'
                    sx={{
                        gap: '10px',
                        display: 'flex',
                        height: 'auto',
                    }}
                    className='flex-column'
                >
                    <Box mt={2} className='text-end'>
                        <Typography text="هل لديك اي استفسار ؟ "
                            sx={{
                                fontWeight: 900,
                                color: '#39281F',
                                fontSize: '25px'
                            }}
                        />
                    </Box>
                    <Box className='text-end'>
                        <Typography text="املأ النموذج وسيقوم فريقنا بالرد عليك في أقرب وقت  ممكن "
                            sx={{
                                fontWeight: 400,
                                color: '#39281F',
                                fontSize: '20px'
                            }}
                        />
                    </Box>
                    <Container
                        maxWidth={false}
                        sx={{
                            gap: '10px',
                            display: 'flex',
                            height: 'auto',
                        }}
                        className='flex-column'
                    >
                        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>
                            <Grid item xs={12} sm={6} md={6}>
                                <ContactMap />
                            </Grid>
                            <Grid className='gap-3 d-flex flex-column' item xs={12} sm={6} md={6}>
                                <InputWithLabel required label="الاسم بالكامل " />
                                <InputWithLabel required label="البريد الالكتروني  " />
                                <InputWithLabel required label="الموضوع" sx={{boxShadow: '0px 10px 15px 0px #0000001A'}} />
                                <Box className=' w-100 h-100'
                                    px={2} pt={1} sx={{
                                        maxHeight: '400px',
                                        borderBottomRightRadius: '45px', background: 'white',
                                        boxShadow: '0px 10px 15px 0px rgba(0, 0, 0, 0.1)',
                                    }}>
                                    <InputLabel sx={{ fontSize: '0.8rem', color: '#AE965A' }} className='text-end' htmlFor="component-simple">
                                        الرسالة
                                    </InputLabel>
                                    <FormControl className=' w-100' variant="standard">
                                        <img src={uPin} alt="" style={{ height: '18px', width: '10px' }} />
                                        <TextField
                                            multiline
                                            rows={4}
                                            px={0}
                                        />
                                    </FormControl>
                                </Box>
                                <Button sx={{ background: '#AE965A !important', mt: 3, color: 'white !important' }} rounded>ارسال </Button>
                            </Grid>
                        </Grid>
                    </Container>
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
                </Container>
            </Box>
            <Footer sx={{ mt: 5 }} />
        </Box>
    )
};
export default ContactUs;