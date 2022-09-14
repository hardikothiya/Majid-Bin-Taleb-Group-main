import React from "react";
import { Container, Box, Divider } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Slider from "react-slick";
import HammerImg from '../assets/law-justice-bg.jpg';
import Typography from "../commonComponent/Typography";
import Button from "../commonComponent/Button";
import scalesImg from "../assets/scalesImg.svg";
import groupImg from "../assets/Group.svg";
import carImg from "../assets/car.svg";
import whatsappIcon from "../assets/whatsappIcon.svg";
import dhlImg from "../assets/dhlImg.svg";
import bankLogo from "../assets/bankLogo.svg";
import diamond from "../assets/diamond.svg";
import quoteImg from "../assets/quoteImg.svg";
import teamImg from "../assets/teamImg.svg";
import userImg from "../assets/userImg.png";
import { feedbackArray, mobileAndTabletCheck, practiceArray } from "../utils";
import Footer from "../commonComponent/Footer";

const slickImgStyle = {
    color: '#fff !important',
    backgroundColor: '#AE965A !important',
    p: 1,
    width: '50px',
    height: '38px',
    borderRadius: 10
};
var settings = {
    dots: false,
    infinite: true,
    centerMode: true,
    speed: 500,
    cssEase: 'linear',
    slidesToShow: 3,
    slidesToScroll: 2,
    prevArrow: <WestIcon sx={{ ...slickImgStyle }} />,
    nextArrow: <EastIcon sx={{ ...slickImgStyle }} />
};
const HomeDemo = () => {
    const sampleText = 'نوفر من خلال مجموعة ماجد بن  طالب مجموعة  <br/>مختلفة من الخدمات القانونية<br/> التى تحتاج اليه';
    const teamText = 'تفاصيل الشخص اسم الشخص </br> تعيين</br> الشخص'
    const isMobile = mobileAndTabletCheck();
    return (
        <Box sx={{ backgroundImage: `url(${diamond})` }}>
            <Box className="main-banner " sx={{ background: `url(${HammerImg})` }}>
                <Container
                    maxWidth='xl'
                    sx={{
                        gap: '10px',
                    }}
                    className='d-flex flex-column align-items-center justify-content-around h-100'
                >
                    <Box className="d-flex align-items-end justify-content-end w-100">
                        <Typography className="text-end text-white"
                            text='الخميس, 27 - 01- 1444 هـ' />
                    </Box>
                    <Box pt={10} className="w-100 d-flex flex-column align-items-end justify-content-end">
                        <Typography className='text-end'
                            sx={{
                                fontSize: '30px',
                                fontWeight: 900,
                                color: '#fff'
                                // color: '#39281F'
                            }}
                            text='مجموعة ماجد بن طالب للمحاماة والاستشارات القانونية' />
                        <Typography
                            className='text-end'
                            sx={{
                                fontSize: '20px',
                                mt: 2,
                                color: '#fff'
                            }}
                            dangerouslySetInnerHTML={{ __html: sampleText }}
                        />
                        <Box sx={{ mt: 7 }} className='d-flex align-items-center justify-content-end'>
                            <Button size='small' rounded sx={(theme) => ({
                                maxHeight: '50px',
                                height: '100%',
                                backgroundColor: theme.palette.secondary.main,
                                color: theme.palette.white[100],
                                lineHeight: '41px'
                            })}>
                                اطلب استشارتك الآن
                            </Button>
                        </Box>
                    </Box>
                    <Box className='d-flex flex-wrap align-items-center justify-content-center'>
                        <Box sx={(theme) => ({
                            backgroundColor: theme.palette.secondary.main,
                            borderRadius: 5,
                            cursor: 'pointer'
                        })} px={0.5}
                            pt={2.5} pb={0.5}
                        >
                            <ExpandMoreIcon sx={{ fill: 'white' }} />
                        </Box>
                    </Box>
                </Container>
            </Box>
            <Box mt={10}>
                <Container
                    maxWidth='xl'
                    sx={{
                        gap: '10px',
                        display: 'flex',
                        height: 'auto',
                    }}
                    className='flex-column'
                >
                    <Box p={2} sx={{ backgroundColor: '#39281F', borderRadius: 1.5 }} className='d-flex w-100 flex-row justify-content-around align-items-center'>
                        <Box px={5} className='d-flex align-items-center gap-3'>
                            <Box sx={{ height: '100px', width: '100px' }}>
                                <img className='h-100 w-100' src={scalesImg} alt='' />
                            </Box>
                            <Typography sx={(theme) => ({ fontSize: '35px', color: theme.palette.white[100], mr: 1 })}
                                text='30 عميل سعيد+' />
                        </Box>
                        <Divider orientation="vertical" sx={{ height: '80px', borderColor: 'white', borderWidth: '1px' }} />
                        <Box px={5} className='d-flex align-items-center gap-3'>
                            <Typography sx={(theme) => ({ fontSize: '35px', color: theme.palette.white[100], mr: 1 })}
                                text='قضية 30+' />
                            <Box sx={{ height: '100px', width: '100px' }}>
                                <img className='h-100 w-100' src={groupImg} alt='' />
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>
            <Box mt={10} sx={(theme) => ({ backgroundColor: theme.palette.white[100] })}>
                <Container
                    sx={{
                        gap: '10px',
                        display: 'flex',
                        height: '100%',
                    }}
                    className='flex-column  flex-wrap'
                >
                    <Box className='text-end' py={5}>
                        <Typography text='لوريم إيبسوم' sx={{ color: '#39281F', fontSize: '35px' }} />
                        <Typography text='لوريم إيبسوم هو ببساطة نص رسمي (بمعنى أن النهاية هي الشكل وليس الشكل'
                            sx={{ color: '#39281F', fontSize: '30px', mt: 4 }} />
                        <Box className='d-flex flex-column gap-5'>
                            <Typography sx={{ color: '#39281F', fontSize: '25px', mt: 3 }}
                                text='الإجراء الشكلي هو عندما تقوم مطبعة غير معروفة بتكديس مجموعة من الأحرف المأخوذة عشوائيًا من النص ، لتشكيل كتيب يعمل كدليل أو مرجع رسمي لهذه الأحرف. خمسة قرون من الزمن لم تحذف هذا النص ، بل تم استخدامه' />
                            <Box>
                                <Button size='medium' rounded sx={(theme) => ({
                                    backgroundColor: theme.palette.secondary.main,
                                    color: theme.palette.white[100],
                                    lineHeight: '41px',
                                    px: '35px'
                                })}>
                                    المزيد
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>
            <Box mt={10} >
                <Container
                    sx={{
                        gap: '10px',
                        display: 'flex',
                        height: '100%',
                    }}
                    className='flex-column justify-content-center align-items-center flex-wrap'
                >
                    <Box className='d-flex align-items-center justify-content-between w-100'>
                        <Box className="d-flex align-items-center gap-3">
                            <WestIcon sx={{ fill: '#AE965A' }} />
                            <Typography sx={(theme) => ({ color: theme.palette.secondary.main, fontSize: '30px' })}
                                text='رؤية جميع مجالات الممارسة' />
                        </Box>
                        <Typography sx={(theme) => ({ color: theme.palette.primary.main, fontSize: '30px', fontWeight: 700 })}
                            text='مجالات الممارسة' />
                    </Box>
                    <Box className='d-flex flex-wrap gap-3 align-items-center ' mt={4}>
                        {practiceArray?.map((item, index) =>
                            <Box
                                key={index}
                                sx={(theme) => ({
                                    border: `1px solid ${theme.palette.secondary.main}`,
                                    borderTopRightRadius: '20px',
                                    height: '168.06px', width: '255px',
                                })}
                                p={2}>
                                <Box className='text-end'>
                                    <img src={carImg} style={{ height: '46px', width: '46px' }} />
                                </Box>
                                <Typography text={item?.text} />
                            </Box>)}
                    </Box>
                </Container>
            </Box>
            <Box mt={10}>
                <Container
                    maxWidth={false}
                    sx={{
                        gap: '10px',
                        display: 'flex',
                        height: '100%',
                    }}
                    className='flex-column justify-content-center align-items-center  flex-wrap'
                >
                    <Typography text='عملاؤنا' sx={(theme) => ({
                        color: theme.palette.primary.main,
                        fontSize: '44px',
                        fontWeight: 800
                    })} />
                    <Box className='d-flex align-items-center justify-content-end gap-3 w-100'>
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
                </Container>
            </Box>
            <Box mt={5} sx={{ maxHeight: '500px', height: '100%' }}>
                <Container
                    maxWidth={false}
                    sx={(theme) => ({
                        gap: '10px',
                        display: 'flex',
                        height: 'auto'
                    })}
                    className=" flex-wrap"
                >
                    <Box sx={(theme) => ({ background: theme.palette.primary.main, borderTopRightRadius: '140px' })}
                        className='w-100 d-flex flex-wrap align-items-center justify-content-around' p={2}>
                        <Box sx={{ maxWidth: '576px', height: '128px' }}>
                            <img src={dhlImg} alt='' className="h-100 w-100" />
                        </Box>
                        <Box sx={{ maxWidth: '576px', height: '128px' }}>
                            <img src={bankLogo} alt='' className="h-100 w-100" />
                        </Box>
                    </Box>
                </Container>
            </Box>
            <Box mt={10}>
                <Container
                    maxWidth={false}
                    sx={{
                        gap: '10px',
                        display: 'flex',
                        height: '100%',
                    }}
                    className='flex-column justify-content-center align-items-center'
                >
                    <Typography text='ماذا قالوا عنا !' sx={(theme) => ({
                        color: theme.palette.primary.main,
                        fontSize: '44px',
                        fontWeight: 800
                    })} />
                </Container>
            </Box>
            <Box mt={3} sx={(theme) => ({ backgroundColor: '#D9C084' })} p={5}>
                <Container maxWidth={false}>
                    <Slider {...settings}>
                        {feedbackArray.map((item, index) =>
                            <Box p={2} key={index} sx={{
                                maxHeight: '422px', maxWidth: '430px', border: '1px solid #AE965A', height: '100%', width: '100%'
                                , background: '#f5f5f5',
                                borderTopRightRadius: '20px',
                                borderBottomLeftRadius: '20px'
                            }} className='text-end'>
                                <Box className="d-flex flex-column align-items-end gap-3">
                                    <Box className='d-flex justify-content-end'>
                                        <img src={quoteImg} alt='' height='45px' width='45px' />
                                    </Box>
                                    <Typography text={item?.mainText} sx={(theme) => ({
                                        color: theme.palette.primary.main,
                                        fontSize: '18px',
                                        fontWeight: 300,
                                        maxWidth: '300px',
                                        width: '100%'
                                    })} />
                                    <Typography text={item?.personName} sx={(theme) => ({
                                        color: '#000000',
                                        fontSize: '23px',
                                        fontWeight: 700
                                    })} />
                                    <Typography text={item?.otherText} sx={(theme) => ({
                                        color: theme.palette.primary.main,
                                        fontSize: '18px',
                                        fontWeight: 400
                                    })} />
                                </Box>
                            </Box>)}
                    </Slider>
                </Container>
            </Box>
            {/* Team */}
            <Box mt={10}>
                <Container
                    maxWidth={false}
                    sx={{
                        gap: '10px',
                        display: 'flex',
                        height: '100%',
                    }}
                    className='flex-column justify-content-center align-items-center'
                >
                    <Typography text='فريق العمل' sx={(theme) => ({
                        color: theme.palette.primary.main,
                        fontSize: '40px',
                        fontWeight: 800
                    })} />
                </Container>
            </Box>
            <Box mt={5} sx={(theme) => ({ backgroundColor: theme.palette.white[100] })} p={5}>
                <Container maxWidth={false} className='team'>
                    <Slider {...settings}>
                        {feedbackArray.map((item, index) =>
                            <Box p={2} key={index} sx={{ border: '1px solid #AE965A', borderRadius: 3, height: '300px', width: '300px' }}
                                className="d-flex flex-column align-items-center justify-content-between">
                                <Box className="d-flex align-items-center flex-column">
                                    <Box sx={{ maxWidth: '150px', maxHeight: '150px', border: '1px solid black', borderRadius: '50% 50%' }} p='15px 30px'>
                                        <img src={userImg} alt='' className="h-100 w-100" />
                                    </Box>
                                    <Typography text='المستعمل' />
                                </Box>
                                <Box>
                                    <Typography dangerouslySetInnerHTML={{ __html: teamText }} />
                                </Box>
                            </Box>)}
                    </Slider>
                </Container>
            </Box>
            <Box mt={10}>
                <Container
                    sx={{
                        gap: '10px',
                        display: 'flex',
                        height: '100%',
                    }}
                    maxWidth={false}
                    className='flex-column  flex-wrap'
                >
                    <Box sx={(theme) => ({ backgroundColor: theme.palette.white[100], borderBottomRightRadius: '140px' })}>
                        <Container
                            sx={{
                                gap: '10px',
                                display: 'flex',
                                height: '100%',
                            }}
                            className='flex-column'
                        >
                            <Box className='text-end' pb={10} pt={7}>
                                <Box className='d-flex align-items-center justify-content-between'>
                                    <Box className='d-flex gap-3  align-items-center'>
                                        <WestIcon sx={{ fill: '#AE965A' }} />
                                        <Typography text='اطلع على المزيد' sx={{ color: '#AE965A', fontSize: '30px', fontWeight: 600 }} />
                                    </Box>
                                    <Typography text='المدونة'
                                        sx={{ color: '#39281F', fontSize: '30px', mt: '-10px' }} />
                                </Box>
                                <Box mt={5} className="d-flex flex-wrap align-items-center justify-content-between">
                                    <Box className="d-flex flex-column gap-4" sx={{
                                        maxWidth: '450px', p: 2,
                                        boxShadow: '0px 15px 70px 0px #00000040'
                                    }}>
                                        <Box className="d-flex align-items-end" sx={{ maxWidth: '320px' }}>
                                            <WestIcon sx={{ fill: '#AE965A' }} />
                                            <Typography text='لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي  '
                                                sx={{ color: '#39281F', fontSize: '25px', fontWeight: 700 }} />
                                        </Box>
                                        <Box className="d-flex align-items-center justify-content-end">
                                            <Typography text='فبراير, 2022'
                                                sx={{ color: '#CAC7C7', fontSize: '25px', fontWeight: 500 }} />
                                            <CalendarMonthIcon />
                                        </Box>
                                    </Box>
                                    <Box className="d-flex flex-column gap-4" sx={{
                                        maxWidth: '450px', p: 2,
                                        boxShadow: '0px 15px 70px 0px #00000040'
                                    }}>
                                        <Box className="d-flex align-items-end" sx={{ maxWidth: '320px' }}>
                                            <WestIcon sx={{ fill: '#AE965A' }} />
                                            <Typography text='لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي  '
                                                sx={{ color: '#39281F', fontSize: '25px', fontWeight: 700 }} />
                                        </Box>
                                        <Box className="d-flex align-items-center justify-content-end">
                                            <Typography text='فبراير, 2022'
                                                sx={{ color: '#CAC7C7', fontSize: '25px', fontWeight: 500 }} />
                                            <CalendarMonthIcon />
                                        </Box>
                                    </Box>
                                    <Box className="d-flex flex-column gap-4" sx={{
                                        maxWidth: '450px', p: 2,
                                        boxShadow: '0px 15px 70px 0px #00000040'
                                    }}>
                                        <Box className="d-flex align-items-end" sx={{ maxWidth: '320px' }}>
                                            <WestIcon sx={{ fill: '#AE965A' }} />
                                            <Typography text='لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي  '
                                                sx={{ color: '#39281F', fontSize: '25px', fontWeight: 700 }} />
                                        </Box>
                                        <Box className="d-flex align-items-center justify-content-end">
                                            <Typography text='فبراير, 2022'
                                                sx={{ color: '#CAC7C7', fontSize: '25px', fontWeight: 500 }} />
                                            <CalendarMonthIcon />
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Container>
                    </Box>
                </Container>
            </Box>
            <Box mt={15} sx={(theme) => ({ backgroundColor: '#AE965A', borderBottomRightRadius: '140px', maxHeight: '500px', height: '100%' })} p={5}>
                <Container maxWidth={false}>
                    <Slider {...settings}>
                        {feedbackArray.map((item, index) =>
                            <Box p={2} key={index} sx={{
                                maxHeight: '422px',
                                maxWidth: '430px',
                                border: '1px solid #AE965A',
                                height: '300px',
                                width: '300px',
                                borderRadius: 10,
                                background: '#fff',
                                boxShadow: '0px 15px 70px 0px #00000040',
                            }} className='text-end' />)}
                    </Slider>
                </Container>
            </Box>
            <Footer />
        </Box >
    )
};
export default HomeDemo;