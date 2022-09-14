import React from "react";
import { Box, Container, Grid } from "@mui/material";
import WestIcon from '@mui/icons-material/West';

import Footer from "../commonComponent/Footer";
import Button from "../commonComponent/Button";
import Typography from "../commonComponent/Typography";
import diamond from "../assets/diamond.svg";
import userIcon from "../assets/userIcon.svg";
import articalImg from "../assets/articalImg.svg";
import whatsappIcon from "../assets/whatsappIcon.svg";
import { mobileAndTabletCheck } from "../utils";

const Blog = () => {
    const isMobile = mobileAndTabletCheck();
    return (
        <Box sx={{
            backgroundImage: `url(${diamond})`,
        }}>
            <Box mt={10}>
                <Container
                    maxWidth={false}
                    sx={{
                        gap: '10px',
                        display: 'flex',
                        height: 'auto',
                    }}
                    className='flex-column'
                >
                    <Box className="d-flex align-items-start justify-content-between">
                        <Button size='small' rounded sx={(theme) => ({
                            // maxHeight: '40px',
                            height: '100%',
                            backgroundColor: theme.palette.secondary.main,
                            color: theme.palette.white[100],
                            lineHeight: '40px',
                            minWidth: '125px',
                            px: isMobile ? '1px' : 'auto',
                            fontWeight: 600,
                            fontSize: '18px'
                        })}>
                            جميع المقالات
                        </Button>
                        <Box className="d-flex flex-column gap-2">
                            <Typography
                                text="ماهي القيمة المضافة باندماج الشركات ؟"
                                sx={{
                                    fontSize: '22px',
                                    color: '#39281F',
                                    fontWeight: 600
                                }}
                            />
                            <Box className="d-flex align-items-center gap-2 justify-content-end">
                                <Typography
                                    text="يناير 10 , 2022 "
                                    sx={{
                                        fontSize: '17px',
                                        color: '#CAC7C7',
                                        fontWeight: 400
                                    }}
                                />
                                <img src={userIcon} style={{ height: '30px', width: '30px' }} alt="" />
                            </Box>
                        </Box>
                    </Box>
                    <Box mt={6}>
                        <Grid container className="justify-content-between" spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>
                            <Grid item xs={0} sm={6} md={6} sx={{
                                display: isMobile ? 'none' : 'auto'
                            }}>
                                <Box className="h-100" sx={{ maxHeight: '575px', borderBottomRightRadius: 20 }}>
                                    <img src={articalImg} className="w-100" style={{ borderBottomRightRadius: 20 }} alt="" />
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={5} md={5} className="gap-5 d-flex flex-column">
                                <Box className="gap-3 d-flex flex-column">
                                    <Typography
                                        text="ماهي القيمة المضافة باندماج الشركات الشكلي عندما "
                                        sx={{
                                            fontSize: '20px',
                                            color: '#39281F',
                                            fontWeight: 700,
                                            textAlign: 'end'
                                        }}
                                    />
                                    <Typography
                                        text="قامت مطبعة  ماهي القيمة المضافة باندماج الشركات الشكلي عندما قامت مطبعة قامت مطبعة  ماهي القيمة المضافة باندماج الشركات الشكلي عندما قامت مطبعة قامت مطبعة  ماهي القيمة المضافة باندماج الشركات الشكلي عندما قامت مطبعة قامت مطبعة  ماهي القيمة المضافة باندماج الشركات الشكلي عندما قامت مطبعة قامت مطبعة  ماهي القيمة المضافة باندماج الشركات الشكلي عندما قامت مطبعة "
                                        sx={{
                                            fontSize: '17px',
                                            color: '#39281F',
                                            fontWeight: 400,
                                            textAlign: 'end'
                                        }}
                                    />
                                </Box>
                                <Box className="gap-3 d-flex flex-column">
                                    <Typography
                                        text="ماهي القيمة المضافة باندماج الشركات الشكلي عندما "
                                        sx={{
                                            fontSize: '20px',
                                            color: '#39281F',
                                            fontWeight: 700,
                                            textAlign: 'end'
                                        }}
                                    />
                                    <Typography
                                        text="قامت مطبعة  ماهي القيمة المضافة باندماج الشركات الشكلي عندما قامت مطبعة قامت مطبعة  ماهي القيمة المضافة باندماج الشركات الشكلي عندما قامت مطبعة قامت مطبعة  ماهي القيمة المضافة باندماج الشركات الشكلي عندما قامت مطبعة قامت مطبعة  ماهي القيمة المضافة باندماج الشركات الشكلي عندما قامت مطبعة قامت مطبعة  ماهي القيمة المضافة باندماج الشركات الشكلي عندما قامت مطبعة "
                                        sx={{
                                            fontSize: '17px',
                                            color: '#39281F',
                                            fontWeight: 400,
                                            textAlign: 'end'
                                        }}
                                    />
                                </Box>
                                <Box className="gap-3 d-flex flex-column">
                                    <Typography
                                        text="ماهي القيمة المضافة باندماج الشركات الشكلي عندما "
                                        sx={{
                                            fontSize: '20px',
                                            color: '#39281F',
                                            fontWeight: 700,
                                            textAlign: 'end'
                                        }}
                                    />
                                    <Typography
                                        text="قامت مطبعة  ماهي القيمة المضافة باندماج الشركات الشكلي عندما قامت مطبعة قامت مطبعة  ماهي القيمة المضافة باندماج الشركات الشكلي عندما قامت مطبعة قامت مطبعة  ماهي القيمة المضافة باندماج الشركات الشكلي عندما قامت مطبعة قامت مطبعة  ماهي القيمة المضافة باندماج الشركات الشكلي عندما قامت مطبعة قامت مطبعة  ماهي القيمة المضافة باندماج الشركات الشكلي عندما قامت مطبعة "
                                        sx={{
                                            fontSize: '17px',
                                            color: '#39281F',
                                            fontWeight: 400,
                                            textAlign: 'end'
                                        }}
                                    />
                                </Box>
                            </Grid>
                        </Grid>
                        <Box mt={3}>
                            <Button size='small' rounded sx={(theme) => ({
                                maxHeight: '50px',
                                height: '100%',
                                color: theme.palette.secondary.main,
                                backgroundColor: theme.palette.white[100],
                                lineHeight: '41px',
                                border: '1px solid #94804C'
                            })}
                                className="d-flex align-items-center gap-3"
                            >
                                <WestIcon />
                                اطلع على المزيد
                            </Button>
                        </Box>
                    </Box>
                </Container>
            </Box>
            <Box my={5} className='d-flex align-items-center justify-content-end gap-3 w-100'>
                <Box className='position-relative'
                    sx={(theme) => ({ backgroundColor: theme.palette.white[100], borderRadius: 30,boxShadow: '0px 4px 4px 0px #00000040' })} p={1}
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
export default Blog;