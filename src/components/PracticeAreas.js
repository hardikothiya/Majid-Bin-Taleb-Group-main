import React from 'react';
import { Grid, Paper, Container, Box, List } from '@mui/material';
import { experimentalStyled as styled } from '@mui/material/styles';
import carImg from "../assets/car.svg";
import diamond from "../assets/diamond.svg";
import Typography from '../commonComponent/Typography';
import whatsappIcon from "../assets/whatsappIcon.svg";
import Footer from '../commonComponent/Footer';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    background: 'transparent'
}));

const PracticeAreas = () => {
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
                    <Box mb={4} mt={2} className='text-end'>
                        <Typography text="مجالات الممارسة "
                            sx={{
                                fontWeight: 900,
                                color: '#39281F',
                                fontSize: '2em'
                            }}
                        />
                    </Box>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {Array.from(Array(6)).map((_, index) => (
                            <Grid item xs={4} sm={4} md={4} key={index}>
                                <Item sx={(theme) => ({
                                    border: `1px solid ${theme.palette.secondary.main}`,
                                    borderTopRightRadius: '20px',
                                    p: 2,
                                })}>
                                    <Box className='text-end'>
                                        <img src={carImg} style={{ height: '46px', width: '46px' }} />
                                    </Box>
                                    <Typography className='text-end' sx={{
                                        fontWeight: 700,
                                        color: '#39281F',
                                        fontSize: '1.5em'
                                    }} text='حوادث السيارات ' />
                                    <Box p={2}>
                                        <List dir="rtl" sx={{ listStyleType: 'disc' }} className='d-flex align-items-end flex-column'>
                                            <li className='w-100'>
                                                <Typography sx={{ fontSize: '1rem' }} className='text-end' text=' النهاية هي الشكل وليس المحتوى) ويستخدمالنهاية هي الشكل وليس المحتوى) ويستخدم المحتوى) ويستخدم  في صناعات الطباعة والنشر. كان لوريم إبسوم ولا يزال' />
                                            </li>
                                            <li className='w-100'>
                                                <Typography className='text-end' text='حوادث السيارات ' />
                                            </li>
                                        </List>
                                    </Box>
                                </Item>
                            </Grid>
                        ))}
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
    );
};
export default PracticeAreas;