import React from "react";
import { Container, Box } from '@mui/material';
import { useNavigate } from "react-router-dom";
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
import { feedbackArray, mobileAndTabletCheck, practiceArray } from "../utils";
import Footer from "../commonComponent/Footer";
import Modal from "../commonComponent/Modal";

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
    nextArrow: <EastIcon sx={{ ...slickImgStyle }} />,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 1008,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};

var imgSliderSettings = {
    dots: true,
    infinite: true,
    centerMode: true,
    speed: 500,
    cssEase: 'linear',
    slidesToShow: 3,
    slidesToScroll: 2,
    prevArrow: <></>,
    nextArrow: <></>
};

const imageSlider = [
    { imageSrc: bankLogo },
    { imageSrc: dhlImg },
    { imageSrc: bankLogo },
    { imageSrc: dhlImg },
    { imageSrc: bankLogo },
    { imageSrc: dhlImg },
    { imageSrc: bankLogo },
    { imageSrc: dhlImg },
    { imageSrc: bankLogo },
    { imageSrc: dhlImg },
    { imageSrc: bankLogo },
    { imageSrc: dhlImg },
    { imageSrc: bankLogo },
    { imageSrc: dhlImg },
];

const Home = () => {
    const [open, setOpen] = React.useState(false);
    const sampleText = 'نوفر من خلال مجموعة ماجد بن  طالب مجموعة  <br/>مختلفة من الخدمات القانونية<br/> التى تحتاج اليه';
    const isMobile = mobileAndTabletCheck();
    let navigate = useNavigate();
    return (
        <Box sx={{ backgroundImage: `url(${diamond})` }}>
            {/* <Box> */}
            <Box mt='120px' className="d-flex align-items-center justify-content-end">
                <Box sx={{ background: '#fff' }} px={2} py={1} mr={2}>
                    <Typography className='text-end'
                        sx={{
                            fontSize: '13px',
                            fontWeight: 400,
                            color: '#979797',
                        }}
                        text='الخميس, 27 - 01- 1444 هـ'
                    />
                </Box>
            </Box>
            <Box mt={2} className='d-flex' sx={{
                flexDirection: isMobile ? 'column' : 'row',
                gap: isMobile ? '15px' : 0,
                justifyContent: isMobile ? 'auto' : 'space-between'
            }}>
                <Box sx={{ overflow: 'hidden', maxWidth: '700px', width: '100%', order: isMobile ? 1 : 0, mt: isMobile ? 2 : 0 }}>
                    <img style={{ borderTopRightRadius: 120 }} src={HammerImg} alt='' className="w-100 h-100" />
                </Box>
                <Box className='d-flex flex-wrap flex-column' pr={2} sx={{ order: isMobile ? 0 : 1 }}>
                    <Box mt={4} sx={{ maxWidth: '450px' }}>
                        <Typography className='text-end'
                            sx={{
                                fontSize: '34px',
                                fontWeight: 900,
                                color: '#39281F',
                            }}
                            text='مجموعة ماجد بن طالب للمحاماة والاستشارات القانونية' />
                        <Typography
                            className='text-end'
                            sx={{
                                fontSize: '18px',
                                mt: 2,
                                fontWeight: 500,
                                color: '#39281F'
                            }}
                            dangerouslySetInnerHTML={{ __html: sampleText }}
                        />
                    </Box>
                    <Box sx={{ mt: 7 }} className='d-flex align-items-center justify-content-end'>
                        <Button size='small' rounded sx={(theme) => ({
                            maxHeight: '40px',
                            height: '100%',
                            backgroundColor: theme.palette.secondary.main,
                            color: theme.palette.white[100],
                            lineHeight: '35px',
                            fontWeight: 800
                        })}
                            onClick={() => navigate('/consultation')}
                        >
                            اطلب استشارتك الآن
                        </Button>
                    </Box>
                </Box>
            </Box>
            <Box className='d-flex align-items-center justify-content-center' mt='-30px'>
                <Box sx={{ backgroundColor: '#39281F', borderRadius: 1.5 }}
                    className='d-flex align-items-center' px={{ xs: 1, md: 3, sm: 2, lg: 3, xl: 4 }}
                    py={3}>
                    <Box px={{ xs: 1, md: 3, sm: 2, lg: 3, xl: 4 }} className='d-flex align-items-center' sx={{ borderRight: '1px solid #fff' }}>
                        <Typography sx={(theme) => ({ fontSize: '20px', color: theme.palette.white[100], mr: 1 })}
                            text='قضية 30+' />
                        <Box sx={{ height: '30px', width: '30px' }}>
                            <img className='h-100 w-100' src={groupImg} alt='' />
                        </Box>
                    </Box>
                    <Box px={{ xs: 2, md: 3, sm: 2, lg: 3, xl: 4 }} className='d-flex align-items-center'>
                        <Typography sx={(theme) => ({ fontSize: '20px', color: theme.palette.white[100], mr: 1 })}
                            text='عميل 30+' />
                        <Box sx={{ height: '30px', width: '30px' }}>
                            <img className='h-100 w-100' src={scalesImg} alt='' />
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box className='d-flex flex-wrap align-items-center justify-content-center' mt={1}>
                <Box sx={(theme) => ({
                    backgroundColor: theme.palette.secondary.main,
                    borderRadius: 5,
                    cursor: 'pointer'
                })} px={0.5}
                    pt={2.5} pb={0.5}
                    
                    onClick={() => document.querySelector('.footer-sub').scrollIntoView({ behavior: 'smooth' })}
                >
                    <ExpandMoreIcon sx={{ fill: 'white' }} />
                </Box>
            </Box>
            <Box>
                <Container
                    maxWidth={false}
                    sx={{
                        gap: '10px',
                        display: 'flex',
                    }}
                    className='flex-column '
                >
                    <Box sx={(theme) => ({ backgroundColor: theme.palette.white[100], borderTopRightRadius: isMobile ? '40px' : '140px' })} mt={8}>
                        <Container
                            maxWidth={false}
                            sx={{
                                gap: '10px',
                                display: 'flex',
                            }}
                            className='flex-column '
                        >
                            <Box className='text-end w-100'
                                sx={{ maxWidth: '1100px', margin: '0 auto' }}
                                py={7}>
                                <Typography text='لوريم إيبسوم' sx={{ color: '#39281F', fontSize: '25px', fontWeight: 800 }} />
                                <Typography text='لوريم إيبسوم هو ببساطة نص رسمي (بمعنى أن النهاية هي الشكل وليس الشكل'
                                    sx={{ color: '#39281F', fontSize: '22px', mt: 2, fontWeight: 600 }} />
                                <Box className='d-flex flex-column gap-5' mt={3}>
                                    <Typography sx={{ color: '#39281F', fontSize: '18px', fontWeight: 400, display: { xs: 'none', md: 'block', sm: 'block', lg: 'block', xl: 'block' } }}
                                        text='الإجراء الشكلي هو عندما تقوم مطبعة غير معروفة بتكديس مجموعة من الأحرف المأخوذة عشوائيًا من النص ، لتشكيل كتيب يعمل كدليل أو مرجع رسمي لهذه الأحرف. خمسة قرون من الزمن لم تحذف هذا النص ، بل تم استخدامه' />
                                    <Box>
                                        <Button size='small' rounded sx={(theme) => ({
                                            maxHeight: '45px',
                                            height: '100%',
                                            backgroundColor: theme.palette.secondary.main,
                                            color: theme.palette.white[100],
                                            lineHeight: '41px',
                                            fontSize: '20px',
                                            fontWeight: 800
                                        })}
                                            onClick={() => navigate('/about-us')}
                                        >
                                            المزيد
                                        </Button>
                                    </Box>
                                </Box>
                            </Box>
                        </Container>
                    </Box>
                </Container>
            </Box>
            <Box mt={8} sx={{ maxHeight: isMobile ? ' auto' : '500px', height: '100%' }}>
                <Container
                    maxWidth='xl'
                    sx={{
                        gap: '10px',
                        display: 'flex',
                        height: '100%',
                    }}
                    className='flex-column justify-content-center align-items-center flex-wrap'
                >
                    <Box className='d-flex align-items-center justify-content-between w-100'>
                        <Box onClick={() => navigate('/practice-areas')} className="d-flex align-items-center gap-3">
                            <WestIcon sx={{ fill: '#AE965A' }} />
                            <Typography
                                sx={(theme) => ({ fontWeight: 400, color: theme.palette.secondary.main, fontSize: '18px' })}
                                text='رؤية جميع مجالات الممارسة' />
                        </Box>
                        <Typography sx={(theme) => ({ fontWeight: 800, color: theme.palette.primary.main, fontSize: '22px' })}
                            text='مجالات الممارسة' />
                    </Box>
                    <Box className='d-flex align-items-center justify-content-center flex-wrap gap-5' mt={4}>
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
                                <Typography text={item?.text} sx={{ fontWeight: 400 }} />
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
                        fontSize: '25px',
                        fontWeight: 800
                    })} />
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
            <Box>
                <Box sx={(theme) => ({ background: theme.palette.primary.main, borderTopRightRadius: isMobile ? '80px' : '140px' })}
                    className='w-100 d-flex flex-wrap align-items-center justify-content-around' p={2} py={4}>
                    <Container maxWidth={false}>
                        <Slider {...imgSliderSettings}>
                            {imageSlider.map((item, index) =>
                                <Box key={index} sx={{ maxWidth: '576px', height: '128px' }}>
                                    <img src={item?.imageSrc} alt='' className="h-100 w-100" />
                                </Box>)}
                        </Slider>
                    </Container>
                </Box>
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
                        fontSize: '25px',
                        fontWeight: 800
                    })} />
                </Container>
            </Box>
            <Box mt={2} sx={(theme) => ({ backgroundColor: theme.palette.white[100], borderTopRightRadius: '140px', maxHeight: '500px', height: '100%' })} p={5}>
                <Container maxWidth={false}>
                    <Slider {...settings}>
                        {feedbackArray.map((item, index) =>
                            <Box p={2} key={index} sx={{ maxHeight: isMobile ? '180px' : '422px', maxWidth: '430px', border: '1px solid #AE965A', height: '100%', width: '100%' }} className='text-end'>
                                <Box className="d-flex flex-column align-items-end gap-3">
                                    <Box className='d-flex justify-content-end'>
                                        <img src={quoteImg} alt='' height='35px' width='35px' />
                                    </Box>
                                    <Typography text={item?.mainText} sx={(theme) => ({
                                        color: theme.palette.primary.main,
                                        fontSize: '16px',
                                        fontWeight: 300,
                                        maxWidth: '300px',
                                        width: '100%'
                                    })} />
                                    <Typography text={item?.personName} sx={(theme) => ({
                                        color: '#000000',
                                        fontSize: '20px',
                                        fontWeight: 700,
                                        mt: 5
                                    })} />
                                    <Typography text={item?.otherText} sx={(theme) => ({
                                        color: theme.palette.primary.main,
                                        fontSize: '16px',
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
                        fontSize: '25px',
                        fontWeight: 800
                    })} />
                </Container>
            </Box>
            <Box mt={5} sx={(theme) => ({ backgroundColor: theme.palette.white[100] })} p={5}>
                <Container maxWidth={false} className='team'>
                    <Slider {...settings}>
                        {feedbackArray.map((item, index) =>
                            <Box p={2} key={index} sx={{ border: '1px solid #AE965A', height: isMobile ? '190px' : '450px', width: '400px' }}
                                className="d-flex align-items-end justify-content-center">
                                <Box width="100%">
                                    <Box mt={5} width="100%">
                                        <img src={teamImg} alt='' width='100%' />
                                    </Box>
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
                    <Box sx={(theme) => ({ backgroundColor: theme.palette.white[100], borderBottomRightRadius: isMobile ? '80px' : '140px' })}>
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
                                    <Box className='d-flex gap-3  align-items-center' onClick={() => navigate('/artical')}>
                                        <WestIcon sx={{ fill: '#AE965A' }} />
                                        <Typography text='اطلع على المزيد' sx={{ color: '#AE965A', fontSize: '18px', fontWeight: 400 }} />
                                    </Box>
                                    <Typography text='المدونة'
                                        sx={{ color: '#39281F', fontSize: '20px', mt: '-10px', fontWeight: 800 }} />
                                </Box>
                                <Box mt={5} className="d-flex gap-3 flex-wrap align-items-center justify-content-between">
                                    <Box className="d-flex flex-column gap-4" sx={{
                                        maxWidth: '450px', p: 2,
                                        boxShadow: '0px 15px 70px 0px #00000040'
                                    }}>
                                        <Box className="d-flex align-items-end" sx={{ maxWidth: '320px' }}>
                                            <WestIcon sx={{ fill: '#AE965A' }} />
                                            <Typography text='لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي  '
                                                sx={{ color: '#39281F', fontSize: '17px', fontWeight: 700 }} />
                                        </Box>
                                        <Box className="d-flex align-items-center gap-2 justify-content-end" mt={2}>
                                            <Typography text='فبراير, 2022'
                                                sx={{ color: '#CAC7C7', fontSize: '14px', fontWeight: 500 }} />
                                            <CalendarMonthIcon sx={{ fill: '#CAC7C7' }} />
                                        </Box>
                                    </Box>
                                    <Box className="d-flex flex-column gap-4" sx={{
                                        maxWidth: '450px', p: 2,
                                        boxShadow: '0px 15px 70px 0px #00000040'
                                    }}>
                                        <Box className="d-flex align-items-end" sx={{ maxWidth: '320px' }}>
                                            <WestIcon sx={{ fill: '#AE965A' }} />
                                            <Typography text='لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي  '
                                                sx={{ color: '#39281F', fontSize: '17px', fontWeight: 700 }} />
                                        </Box>
                                        <Box className="d-flex align-items-center gap-2 justify-content-end" mt={2}>
                                            <Typography text='فبراير, 2022'
                                                sx={{ color: '#CAC7C7', fontSize: '14px', fontWeight: 500 }} />
                                            <CalendarMonthIcon sx={{ fill: '#CAC7C7' }} />
                                        </Box>
                                    </Box>
                                    <Box className="d-flex flex-column gap-4" sx={{
                                        maxWidth: '450px', p: 2,
                                        boxShadow: '0px 15px 70px 0px #00000040'
                                    }}>
                                        <Box className="d-flex align-items-end" sx={{ maxWidth: '320px' }}>
                                            <WestIcon sx={{ fill: '#AE965A' }} />
                                            <Typography text='لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي  '
                                                sx={{ color: '#39281F', fontSize: '17px', fontWeight: 700 }} />
                                        </Box>
                                        <Box className="d-flex align-items-center gap-2 justify-content-end" mt={2}>
                                            <Typography text='فبراير, 2022'
                                                sx={{ color: '#CAC7C7', fontSize: '14px', fontWeight: 500 }} />
                                            <CalendarMonthIcon sx={{ fill: '#CAC7C7' }} />
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Container>
                    </Box>
                </Container>
            </Box>
            <Box mt={15} sx={(theme) => ({ backgroundColor: '#AE965A', borderBottomRightRadius: '140px', maxHeight: '500px', height: '100%' })} p={5}>
                <Typography text='Twitter API (LIVE)' sx={{ color: '#39281F', fontSize: '20px', fontWeight: 800 }} />
                <Box mt={3}>
                    <Container maxWidth={false}>
                        <Slider {...settings}>
                            {feedbackArray.map((item, index) =>
                                <Box p={2} key={index} sx={{
                                    maxHeight: isMobile ? '200px' : '422px',
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
            </Box>
            <Footer />
            <Modal open={open} />
        </Box >
    )
};
export default Home;
