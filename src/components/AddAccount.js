import React from "react";
import { Box, Container, Grid } from "@mui/material";
import { Business, LocationCity, PermIdentityOutlined } from '@material-ui/icons';
import Typography from "../commonComponent/Typography";
import diamond from "../assets/diamond.svg";
import Button from "../commonComponent/Button";
import Footer from "../commonComponent/Footer";
import whatsappIcon from "../assets/whatsappIcon.svg";
import LocalCityIcon from "../assets/bank-svgrepo-com.svg";
import userOutlineIcon from "../assets/person-svgrepo-com.svg";
import { SvgIcon } from "../commonComponent/SvgIcon";

const AddAccount = () => {

    const sampleText = `معنا الآن عبرتساب <span class='light-yellow fw-900'>تواصل </span> `;
    const sampleText2 = `اختر نوع الحساب <span class="color-red">*</span>`

    return (
        <Box sx={{ backgroundImage: `url(${diamond})` }}>
            <Container
                maxWidth='xl'
                sx={{
                    gap: '10px',
                    display: 'flex',
                    height: 'auto',
                }}
                className='flex-column'
            >
                <Container
                    maxWidth={false}
                    sx={{
                        gap: '10px',
                        display: 'flex',
                        height: 'auto',
                        maxWidth: '1000px'
                    }}
                    className='flex-column'
                >
                    <Box mt={5}>
                        <Typography
                            className='text-end'
                            sx={{
                                fontSize: '16px',
                                mt: 2
                            }}
                            dangerouslySetInnerHTML={{ __html: sampleText }}
                        />
                    </Box>
                    <Box mt={2}>
                        <Typography
                            className='text-end'
                            sx={{
                                fontSize: '24px',
                                mt: 4,
                                fontWeight: 700
                            }}
                            dangerouslySetInnerHTML={{ __html: sampleText2 }}
                        />
                    </Box>
                    <Box mt={4}>
                        <Grid className="justify-content-between" container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>
                            <Grid item xs={12} sm={4} md={3}>
                                <Box
                                    p={5}
                                    className="d-flex flex-column align-items-center gap-3"
                                    sx={{
                                        color: '#979797',
                                        border: '1px solid #AE965A',
                                        borderBottomRightRadius: '20px',
                                        '&:hover': {
                                            background: '#fff',
                                            boxShadow: '0px 35px 55px 0px #AE965A40',
                                            borderColor: '#fff !important',
                                            color: '#AE965A'
                                        },
                                    }}
                                >
                                    <Business style={{ width: "35px", height: "38px" }} />
                                    <Typography sx={{ fontSize: '20px', fontWeight: 500 }} text="شركة" />
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={4} md={3}>
                                <Box
                                    p={5}
                                    className="d-flex flex-column align-items-center gap-3"
                                    sx={{
                                        color: '#979797',
                                        border: '1px solid #AE965A',
                                        borderBottomRightRadius: '20px',
                                        '&:hover': {
                                            background: '#fff',
                                            boxShadow: '0px 35px 55px 0px #AE965A40',
                                            borderColor: '#fff !important',
                                            color: '#AE965A'
                                        },
                                    }}
                                >
                                    <SvgIcon icon="BANK" sx={{ width: "35px", height: "35px" }} viewBox="0 0 45 45" />
                                    <Typography sx={{ fontSize: '20px', fontWeight: 500 }} text="مؤسسة" />
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={4} md={3}>
                                <Box
                                    p={5}
                                    className="d-flex flex-column align-items-center gap-3"
                                    sx={{
                                        color: '#979797',
                                        border: '1px solid #AE965A',
                                        borderBottomRightRadius: '20px',
                                        '&:hover': {
                                            background: '#fff',
                                            boxShadow: '0px 35px 55px 0px #AE965A40',
                                            borderColor: '#fff !important',
                                            color: '#AE965A'
                                        },
                                    }}
                                >
                                    <SvgIcon icon="USER" sx={{ width: "35px", height: "35px" }} viewBox="0 0 45 45" />
                                    <Typography sx={{ fontSize: '20px', fontWeight: 500 }} text="فرد / مستقل  " />
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box mt={2}>
                        <Grid className="justify-content-center" container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>
                            <Grid item xs={12} sm={4} md={4} xl={4} lg={4}>
                                <Button size="medium" className="w-100" sx={{ maxHeight: '40px', background: '#AE965A !important', mt: 3, color: 'white !important', fontWeight: 800 }} rounded>ارسال </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
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
    )
};
export default AddAccount;