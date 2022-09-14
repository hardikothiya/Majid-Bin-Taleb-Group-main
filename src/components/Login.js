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
const sampleText = `ليس لديك حساب؟ <span class='light-yellow fw-900'> سجل الآن</span> `;

const Login = () => {
    return (
        <>
            {!isMobile ?
                <Box sx={{ backgroundImage: `url(${diamond})` }}>
                    <Box mt={10}>
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
                                            fontSize: '22px',
                                            fontWeight: 400
                                        }}
                                        className="text-end"
                                        dangerouslySetInnerHTML={{ __html: sampleText }}
                                    />
                                    <InputWithLabel required label="رقم الهوية / الإقامة" />
                                </Box>
                                <Box className='d-flex flex-column align-items-end justify-content-between gap-2' mt={3}>
                                    <Typography
                                        sx={{
                                            color: '#39281F',
                                            fontWeight: 700,
                                            fontSize: '23px',
                                        }}
                                        className="text-end"
                                        text="اهلاً بعودتك حضرة المحامي أ. احمد المحمد"
                                    />
                                    <Typography
                                        sx={{
                                            color: '#979797',
                                            fontSize: '18px',
                                            fontWeight: 500,
                                        }}
                                        className="text-end"
                                        text="يرجى ادخال كلمة المرور  "
                                    />
                                    <InputWithLabel sx={{ mt: 2 }} type='password' required label='كلمة المرور' />
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
                                <Box className='d-flex align-items-center justify-content-end'>
                                    <Button className="w-100" sx={{ background: '#AE965A !important', mt: 3, color: 'white !important',fontWeight: 800, }} rounded>تسجيل الدخول </Button>
                                </Box>
                                <Typography
                                    sx={{
                                        color: '#AE965A',
                                        fontSize: '18px',
                                    }}
                                    className="text-end"
                                    text="هل نسيت كلمة المرور؟"
                                />
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
                        <Box className='h-100' py={1.5} sx={{ maxHeight: '500px', maxWidth: '400px', margin: '0 auto', backgroundColor: '#F5F1EE', borderRadius: '20px' }}>
                            <Container
                                sx={{
                                    gap: '10px',
                                    display: 'flex',
                                    height: 'auto',
                                }}
                                className='flex-column'
                            >
                                <Box className="d-flex flex-column">
                                    <Box className='d-flex flex-column align-items-end justify-content-between gap-4'>
                                        <Typography
                                            sx={{
                                                color: '#39281F',
                                                fontSize: '20px',
                                            }}
                                            className="text-end"
                                            dangerouslySetInnerHTML={{ __html: sampleText }}
                                        />
                                        <InputWithLabel required label="رقم الهوية / الإقامة" />
                                    </Box>
                                    <Box className='d-flex flex-column align-items-end justify-content-between gap-2' mt={3}>
                                        <Typography
                                            sx={{
                                                color: '#39281F',
                                                fontSize: '20px',
                                            }}
                                            className="text-end"
                                            text="اهلاً بعودتك حضرة المحامي أ. احمد المحمد"
                                        />
                                        <Typography
                                            sx={{
                                                color: '#979797',
                                                fontSize: '18px',
                                            }}
                                            className="text-end"
                                            text="يرجى ادخال كلمة المرور  "
                                        />
                                        <InputWithLabel type='password' required label='كلمة المرور' />
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
export default Login;