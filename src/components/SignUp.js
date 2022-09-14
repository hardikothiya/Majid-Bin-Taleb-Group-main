import React from 'react';
import { Grid, Paper, Container, Box, FormControl, InputLabel, Input } from '@mui/material';
import { experimentalStyled as styled } from '@mui/material/styles';
import diamond from "../assets/diamond.svg";
import Typography from '../commonComponent/Typography';
import whatsappIcon from "../assets/whatsappIcon.svg";
import Footer from '../commonComponent/Footer';
import HammerImg from '../assets/hammer2.jpg';
import Button from '../commonComponent/Button';
import { mobileAndTabletCheck } from '../utils';
import InputWithLabel from '../commonComponent/InputWithLabel';
import Checkbox from '@mui/material/Checkbox';
import { RadioButtonUnchecked, CheckCircle } from '@material-ui/icons';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    background: 'transparent'
}));

const isMobile = mobileAndTabletCheck();
const sampleText = `هل لديك حساب ؟ <span class='light-yellow fw-900'>تسجيل الدخول </spam>`;

const SignUp = () => {
    return (
        <>
            {!isMobile ?
                <Box sx={{ backgroundImage: `url(${diamond})` }}>
                    <Box mt={15}>
                        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>
                            <Grid item xs={12} sm={5} md={4.5}>
                                <img src={HammerImg} alt="" className='h-100 w-100' style={{ borderBottomRightRadius: '90px' }} />
                            </Grid>
                            <Grid item xs={0} sm={2} md={2} />
                            <Grid className='gap-3 d-flex flex-column' item xs={12} sm={5} md={4.5}>
                                <Box className='d-flex flex-column align-items-end justify-content-between gap-4'>
                                    <Typography
                                        sx={{
                                            color: '#39281F',
                                            fontSize: '19px',
                                            fontWeight: 400,
                                            mt: '-20px'
                                        }}
                                        className="text-end"
                                        dangerouslySetInnerHTML={{ __html: sampleText }}
                                    />
                                    <Typography
                                        sx={{
                                            color: '#39281F',
                                            fontSize: '24px',
                                            fontWeight: 700,
                                            mt: 4
                                        }}
                                        className="text-end"
                                        text="انشاء حساب جديد"
                                    />
                                </Box>
                                <Box className='d-flex flex-column align-items-end justify-content-between gap-2' mt={3}>
                                    <InputWithLabel sx={{ mt: 2 }} required label='الاسم الثلاثي ' />
                                    <InputWithLabel sx={{ mt: 2 }} required label='رقم الهاتف ' />
                                    <InputWithLabel sx={{ mt: 2 }} required label='البريد الإلكتروني ' />
                                    <InputWithLabel sx={{ mt: 2 }} required label='رقم الهوية / الإقامة ' />
                                    <InputWithLabel sx={{ mt: 2 }} required label='كلمة السر ' />
                                    <InputWithLabel sx={{ mt: 2 }} required label='إعادة كلمة السر  ' />
                                </Box>
                                <Box className='d-flex flex-column gap-4 align-items-end justify-content-end'>
                                    <Button className="w-100" sx={{ background: '#AE965A !important', mt: 3, color: 'white !important' }} rounded>التالي </Button>
                                    <Typography
                                        sx={{
                                            color: '#AE965A',
                                            fontSize: '18px',
                                            fontWeight: 600
                                        }}
                                        className="text-end"
                                        text="العودة"
                                    />
                                </Box>
                            </Grid>
                            <Grid item xs={0} sm={1} md={1} />
                        </Grid>
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
                                <Typography
                                    className="text-end"
                                    sx={(theme) => ({
                                        color: theme.palette.primary.main,
                                        fontSize: '14px',
                                        fontWeight: 500
                                    })} text='تواصل معنا الآن عبر الواتساب ' />
                            </Box>
                            <Box sx={{ maxWidth: '40px', maxHeight: '40px' }}>
                                <img src={whatsappIcon} alt='' className="h-100 w-100" />
                            </Box>
                        </Box>
                    </Box>
                    <Footer hideContent sx={{ mt: 5 }} >
                        <Typography
                            sx={{
                                color: '#39281F',
                                fontSize: '20px',
                                my: 10,
                                textAlign: 'end'
                            }}
                            text="جميع الحقوق محفوظة لمجموعة ماجد بن طالب     2022"
                        />
                    </Footer>
                </Box>
                :
                <>
                    <Box className='h-100 d-flex align-items-center justify-content-center' sx={{ backgroundImage: `url(${HammerImg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                        <Box className='h-100 w-100' py={1.5} sx={{ maxHeight: '700px', maxWidth: '500px', margin: '0 auto', backgroundColor: '#F5F1EE', borderRadius: '20px' }}>
                            <Container
                                sx={{
                                    gap: '5px',
                                    display: 'flex',
                                    height: 'auto',
                                }}
                                className='flex-column'
                            >
                                <Box className="d-flex flex-column">
                                    <Box className='d-flex flex-column align-items-end justify-content-between gap-1'>
                                        <Typography
                                            sx={{
                                                color: '#39281F',
                                                fontSize: '17px',
                                                fontWeight: 400,
                                            }}
                                            className="text-end"
                                            dangerouslySetInnerHTML={{ __html: sampleText }}
                                        />
                                        <Typography
                                            sx={{
                                                color: '#39281F',
                                                fontSize: '22px',
                                                fontWeight: 600,
                                                mt: 2
                                            }}
                                            className="text-end"
                                            text="انشاء حساب جديد"
                                        />
                                    </Box>
                                    <Box className='d-flex flex-column align-items-end justify-content-between gap-2' mt={3}>
                                        <InputWithLabel sx={{ mt: 1, pt: 0.5 }} required label='الاسم الثلاثي ' />
                                        <InputWithLabel sx={{ mt: 1, pt: 0.5 }} required label='رقم الهاتف ' />
                                        <InputWithLabel sx={{ mt: 1, pt: 0.5 }} required label='البريد الإلكتروني ' />
                                        <InputWithLabel sx={{ mt: 1, pt: 0.5 }} required label='رقم الهوية / الإقامة ' />
                                        <InputWithLabel sx={{ mt: 1, pt: 0.5 }} required label='كلمة السر ' />
                                        <InputWithLabel sx={{ mt: 1, pt: 0.5 }} required label='إعادة كلمة السر  ' />
                                    </Box>
                                    <Box className='d-flex align-items-center justify-content-end'>
                                        <Typography
                                            sx={{
                                                color: '#000000',
                                                fontSize: '18px',
                                            }}
                                            className="text-end"
                                            text="تذكرني "
                                        />
                                        <Checkbox
                                            {...label}
                                            defaultChecked
                                            icon={<RadioButtonUnchecked style={{ color: '#ae965abf', fill: '#ae965abf' }} />}
                                            checkedIcon={<CheckCircle style={{ color: '#ae965abf', fill: '#ae965abf' }} />}
                                        />
                                    </Box>
                                    <Button sx={{ background: '#AE965A !important', mt: 3, color: 'white' }} rounded>تسجيل الدخول  </Button>
                                    <Typography
                                        sx={{
                                            color: '#979797',
                                            fontSize: '18px',
                                        }}
                                        className="text-end"
                                        text="هل نسيت كلمة المرور؟"
                                    />
                                </Box>
                            </Container>
                        </Box>
                    </Box>
                    <Footer hideContent sx={{ mt: 5 }} >
                        <Typography
                            sx={{
                                color: '#39281F',
                                fontSize: '20px',
                                my: 5,
                                textAlign: 'end'
                            }}
                            text="جميع الحقوق محفوظة لمجموعة ماجد بن طالب     2022"
                        />
                    </Footer>
                </>
            }
        </>
    )
};
export default SignUp;