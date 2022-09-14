import React, { useState } from "react";
import { Grid, Box, Container, TextField } from '@mui/material';
import diamond from "../assets/diamond.svg";
import Typography from '../commonComponent/Typography';
import HammerImg from '../assets/hammer2.jpg';
import Button from '../commonComponent/Button';
import Footer from '../commonComponent/Footer';
import { mobileAndTabletCheck } from '../utils';
import whatsappIcon from "../assets/whatsappIcon.svg";

const isMobile = mobileAndTabletCheck();
const sampleText = ` هل تتذكر كلمة المرور ؟ <span class='light-yellow fw-600'> تسجيل الدخول  </span>`;

const ResetPasswordSecond = () => {

    const [otp, setOtp] = useState({ value: '', otp1: "", otp2: "", otp3: "", otp4: "", otp5: "", disable: true });

    const handleChange = (value1, e) => {
        let { value } = e?.target;
        value = value?.replace(/[^0-9]/g, '');

        setOtp({ ...otp, [value1]: value });
    }

    const handleSubmit = (event) => {
        const data = new FormData(event.target);
        console.log(otp);
        event.preventDefault();
    }

    const inputfocus = (elmnt) => {
        if (elmnt.key === "Delete" || elmnt.key === "Backspace") {
            const next = elmnt.target.tabIndex - 2;
            if (next > -1) {

                elmnt.target.form.elements[next].focus()
            }
        } else {
            console.log("next");

            const next = elmnt.target.tabIndex;
            if (next < 5) {
                elmnt.target.form.elements[next].focus()
            }
        }

    }

    return (
        <>
            {isMobile ?
                <>
                    <Box className='h-100 d-flex align-items-center justify-content-center' sx={{ backgroundImage: `url(${HammerImg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                        <Box className='h-100 w-100' py={2} sx={{ maxHeight: '460px', maxWidth: '450px', margin: '0 auto', backgroundColor: '#F5F1EE', borderRadius: '20px' }}>
                            <Container
                                sx={{
                                    gap: '10px',
                                    display: 'flex',
                                    height: 'auto',
                                }}
                                className='flex-column'
                            >
                                <Box className="d-flex flex-column">
                                    <Box className='d-flex gap-5 flex-column align-items-end justify-content-between gap-4'>
                                        <Typography
                                            mt={3}
                                            sx={{
                                                color: '#39281F',
                                                fontSize: '22px',
                                                fontWeight: 600
                                            }}
                                            className="text-end"
                                            text="تم ارسال رمز التحقق الى رقم هاتفك المُسجل"
                                        />
                                        <Box mt={4} className="w-100 d-flex gap-2 flex-column justify-content-end">
                                            <Typography
                                                sx={{
                                                    color: '#979797',
                                                    fontSize: '18px',
                                                    fontWeight: 400
                                                }}
                                                className="text-end"
                                                text="ادخل رمز التحقق "
                                            />
                                            <form onSubmit={handleSubmit}>
                                                <div className="otpContainer d-flex align-items-center justify-content-between">
                                                    <Box className="w-100 h-100" py={4} px={2} display='flex' sx={{
                                                        width: 'fit-content',
                                                        background: otp?.value1 ? 'white' : '#CAC7C7',
                                                        borderRadius: '20px',
                                                        maxWidth: '84px',
                                                        maxHeight: '110px',
                                                        boxShadow: otp?.value1 ? '0px 2px 12px 0px #0000001A' : '0px 2px 12px 0px #0000001A inset',
                                                    }}>
                                                        <input
                                                            name="otp1"
                                                            type="text"
                                                            autoComplete="off"
                                                            className="otpInput"
                                                            value={otp.otp1}
                                                            onChange={e => handleChange("otp1", e)}
                                                            tabIndex="1" maxLength="1" onKeyUp={e => inputfocus(e)}
                                                            style={{
                                                                color: '#39281F',
                                                                fontWeight: 600,
                                                                fontSize: '18px',
                                                                height: '100%',
                                                                width: '100%',
                                                                background: otp?.value1 ? 'white' : '#CAC7C7',
                                                                border: 0,
                                                                outline: 'none',
                                                                textAlign: 'center',
                                                            }}
                                                        />
                                                    </Box>
                                                    <Box className="w-100 h-100" py={4} px={2} display='flex' sx={{
                                                        width: 'fit-content',
                                                        background: otp?.value2 ? 'white' : '#CAC7C7',
                                                        borderRadius: '20px',
                                                        maxWidth: '84px',
                                                        maxHeight: '110px',
                                                        boxShadow: otp?.value2 ? '0px 2px 12px 0px #0000001A' : '0px 2px 12px 0px #0000001A inset',
                                                    }}>
                                                        <input
                                                            name="otp2"
                                                            type="text"
                                                            autoComplete="off"
                                                            className="otpInput"
                                                            value={otp.otp2}
                                                            onChange={e => handleChange("otp2", e)}
                                                            tabIndex="2" maxLength="1" onKeyUp={e => inputfocus(e)}
                                                            style={{
                                                                color: '#39281F',
                                                                fontWeight: 600,
                                                                fontSize: '18px',
                                                                height: '100%',
                                                                width: '100%',
                                                                background: otp?.value2 ? 'white' : '#CAC7C7',
                                                                border: 0,
                                                                outline: 'none',
                                                                textAlign: 'center',
                                                            }}
                                                        />
                                                    </Box>
                                                    <Box className="w-100 h-100" py={4} px={2} display='flex' sx={{
                                                        width: 'fit-content',
                                                        background: otp?.value3 ? 'white' : '#CAC7C7',
                                                        borderRadius: '20px',
                                                        maxWidth: '84px',
                                                        maxHeight: '110px',
                                                        boxShadow: otp?.value3 ? '0px 2px 12px 0px #0000001A' : '0px 2px 12px 0px #0000001A inset',
                                                    }}>
                                                        <input
                                                            name="otp3"
                                                            type="text"
                                                            autoComplete="off"
                                                            className="otpInput"
                                                            value={otp.otp3}
                                                            onChange={e => handleChange("otp3", e)}
                                                            tabIndex="3" maxLength="1" onKeyUp={e => inputfocus(e)}
                                                            style={{
                                                                color: '#39281F',
                                                                fontWeight: 600,
                                                                fontSize: '18px',
                                                                height: '100%',
                                                                width: '100%',
                                                                background: otp?.value3 ? 'white' : '#CAC7C7',
                                                                border: 0,
                                                                outline: 'none',
                                                                textAlign: 'center',
                                                            }}
                                                        />
                                                    </Box>
                                                    <Box className="w-100 h-100" py={4} px={2} display='flex' sx={{
                                                        width: 'fit-content',
                                                        background: otp?.value4 ? 'white' : '#CAC7C7',
                                                        borderRadius: '20px',
                                                        maxWidth: '84px',
                                                        maxHeight: '110px',
                                                        boxShadow: otp?.value4 ? '0px 2px 12px 0px #0000001A' : '0px 2px 12px 0px #0000001A inset',
                                                    }}>
                                                        <input
                                                            name="otp4"
                                                            type="text"
                                                            autoComplete="off"
                                                            className="otpInput"
                                                            value={otp.otp4}
                                                            onChange={e => handleChange("otp4", e)}
                                                            tabIndex="4" maxLength="1" onKeyUp={e => inputfocus(e)}
                                                            style={{
                                                                color: '#39281F',
                                                                fontWeight: 600,
                                                                fontSize: '18px',
                                                                height: '100%',
                                                                width: '100%',
                                                                background: otp?.value4 ? 'white' : '#CAC7C7',
                                                                border: 0,
                                                                outline: 'none',
                                                                textAlign: 'center',
                                                            }}
                                                        />
                                                    </Box>
                                                </div>
                                            </form>
                                        </Box>
                                    </Box>
                                    <Box className="w-100 d-flex gap-2 flex-column justify-content-end">
                                        <Box className='d-flex align-items-center justify-content-end'>
                                            <Button className="w-100" sx={{ background: '#AE965A !important', mt: 3, color: 'white !important', fontWeight: 600 }} rounded>إعادة تعيين كلمة المرور</Button>
                                        </Box>
                                        <Typography
                                            sx={{
                                                color: '#39281F',
                                                fontSize: '18px',
                                                fontWeight: 400,
                                                mt: 3
                                            }}
                                            className="text-end"
                                            dangerouslySetInnerHTML={{ __html: sampleText }}
                                        />
                                    </Box>
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
                :
                <Box sx={{ backgroundImage: `url(${diamond})` }}>
                    <Box my={15}>
                        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>
                            <Grid item xs={12} sm={5} md={4.5}>
                                <img src={HammerImg} alt="" className='h-100 w-100' style={{ borderBottomRightRadius: '90px' }} />
                            </Grid>
                            <Grid item xs={0} sm={2} md={2} />
                            <Grid className='gap-4 d-flex flex-column' item xs={12} sm={5} md={4.5}>
                                <Box className='d-flex gap-5 flex-column align-items-end justify-content-between gap-4'>
                                    <Typography
                                        mt={3}
                                        sx={{
                                            color: '#39281F',
                                            fontSize: '22px',
                                            fontWeight: 600
                                        }}
                                        className="text-end"
                                        text="تم ارسال رمز التحقق الى رقم هاتفك المُسجل"
                                    />
                                    <Box mt={4} className="w-100 d-flex gap-2 flex-column justify-content-end">
                                        <Typography
                                            sx={{
                                                color: '#979797',
                                                fontSize: '18px',
                                                fontWeight: 400
                                            }}
                                            className="text-end"
                                            text="ادخل رمز التحقق "
                                        />
                                        <form onSubmit={handleSubmit}>
                                            <div className="otpContainer d-flex align-items-center justify-content-between">
                                                <Box className="w-100 h-100" py={4} px={2} display='flex' sx={{
                                                    width: 'fit-content',
                                                    background: otp?.value1 ? 'white' : '#CAC7C7',
                                                    borderRadius: '20px',
                                                    maxWidth: '84px',
                                                    maxHeight: '110px',
                                                    boxShadow: otp?.value1 ? '0px 2px 12px 0px #0000001A' : '0px 2px 12px 0px #0000001A inset',
                                                }}>
                                                    <input
                                                        name="otp1"
                                                        type="text"
                                                        autoComplete="off"
                                                        className="otpInput"
                                                        value={otp.otp1}
                                                        onChange={e => handleChange("otp1", e)}
                                                        tabIndex="1" maxLength="1" onKeyUp={e => inputfocus(e)}
                                                        style={{
                                                            color: '#39281F',
                                                            fontWeight: 600,
                                                            fontSize: '18px',
                                                            height: '100%',
                                                            width: '100%',
                                                            background: otp?.value1 ? 'white' : '#CAC7C7',
                                                            border: 0,
                                                            outline: 'none',
                                                            textAlign: 'center',
                                                        }}
                                                    />
                                                </Box>
                                                <Box className="w-100 h-100" py={4} px={2} display='flex' sx={{
                                                    width: 'fit-content',
                                                    background: otp?.value2 ? 'white' : '#CAC7C7',
                                                    borderRadius: '20px',
                                                    maxWidth: '84px',
                                                    maxHeight: '110px',
                                                    boxShadow: otp?.value2 ? '0px 2px 12px 0px #0000001A' : '0px 2px 12px 0px #0000001A inset',
                                                }}>
                                                    <input
                                                        name="otp2"
                                                        type="text"
                                                        autoComplete="off"
                                                        className="otpInput"
                                                        value={otp.otp2}
                                                        onChange={e => handleChange("otp2", e)}
                                                        tabIndex="2" maxLength="1" onKeyUp={e => inputfocus(e)}
                                                        style={{
                                                            color: '#39281F',
                                                            fontWeight: 600,
                                                            fontSize: '18px',
                                                            height: '100%',
                                                            width: '100%',
                                                            background: otp?.value2 ? 'white' : '#CAC7C7',
                                                            border: 0,
                                                            outline: 'none',
                                                            textAlign: 'center',
                                                        }}
                                                    />
                                                </Box>
                                                <Box className="w-100 h-100" py={4} px={2} display='flex' sx={{
                                                    width: 'fit-content',
                                                    background: otp?.value3 ? 'white' : '#CAC7C7',
                                                    borderRadius: '20px',
                                                    maxWidth: '84px',
                                                    maxHeight: '110px',
                                                    boxShadow: otp?.value3 ? '0px 2px 12px 0px #0000001A' : '0px 2px 12px 0px #0000001A inset',
                                                }}>
                                                    <input
                                                        name="otp3"
                                                        type="text"
                                                        autoComplete="off"
                                                        className="otpInput"
                                                        value={otp.otp3}
                                                        onChange={e => handleChange("otp3", e)}
                                                        tabIndex="3" maxLength="1" onKeyUp={e => inputfocus(e)}
                                                        style={{
                                                            color: '#39281F',
                                                            fontWeight: 600,
                                                            fontSize: '18px',
                                                            height: '100%',
                                                            width: '100%',
                                                            background: otp?.value3 ? 'white' : '#CAC7C7',
                                                            border: 0,
                                                            outline: 'none',
                                                            textAlign: 'center',
                                                        }}
                                                    />
                                                </Box>
                                                <Box className="w-100 h-100" py={4} px={2} display='flex' sx={{
                                                    width: 'fit-content',
                                                    background: otp?.value4 ? 'white' : '#CAC7C7',
                                                    borderRadius: '20px',
                                                    maxWidth: '84px',
                                                    maxHeight: '110px',
                                                    boxShadow: otp?.value4 ? '0px 2px 12px 0px #0000001A' : '0px 2px 12px 0px #0000001A inset',
                                                }}>
                                                    <input
                                                        name="otp4"
                                                        type="text"
                                                        autoComplete="off"
                                                        className="otpInput"
                                                        value={otp.otp4}
                                                        onChange={e => handleChange("otp4", e)}
                                                        tabIndex="4" maxLength="1" onKeyUp={e => inputfocus(e)}
                                                        style={{
                                                            color: '#39281F',
                                                            fontWeight: 600,
                                                            fontSize: '18px',
                                                            height: '100%',
                                                            width: '100%',
                                                            background: otp?.value4 ? 'white' : '#CAC7C7',
                                                            border: 0,
                                                            outline: 'none',
                                                            textAlign: 'center',
                                                        }}
                                                    />
                                                </Box>
                                            </div>
                                        </form>
                                    </Box>
                                </Box>
                                <Box className="w-100 d-flex gap-2 flex-column justify-content-end">
                                    <Box className='d-flex align-items-center justify-content-end'>
                                        <Button className="w-100" sx={{ background: '#AE965A !important', mt: 3, color: 'white !important', maxWidth: '575px', fontWeight: 600 }} rounded>إعادة تعيين كلمة المرور  </Button>
                                    </Box>
                                    <Typography
                                        sx={{
                                            color: '#39281F',
                                            fontSize: '18px',
                                            fontWeight: 400
                                        }}
                                        className="text-end"
                                        dangerouslySetInnerHTML={{ __html: sampleText }}
                                    />
                                </Box>
                            </Grid>
                            <Grid item xs={0} sm={1} md={1} />
                        </Grid>
                    </Box>
                    <Box className='d-flex align-items-center justify-content-end gap-3 w-100'>
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
                    <Footer hideContent sx={{ mt: 2 }} >
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
                </Box>}
        </>
    )
};
export default ResetPasswordSecond;