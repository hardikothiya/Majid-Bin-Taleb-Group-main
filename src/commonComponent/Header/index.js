import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, AppBar, Container, Popover, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import Button from "../Button";
import headerLogo from '../../assets/headerLogo.svg';
import { navList } from "../../utils";

const Header = () => {
    let navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <>
            <Box sx={{ flexGrow: 1, height: '80px' }}>
                <AppBar
                    sx={(theme) => ({
                        padding: 'auto',
                        height: '80px',
                        boxShadow: 'none !important',
                        backgroundColor: theme.palette.secondary[300],
                        borderBottom: `${theme.border.width[2]} solid ${theme.palette.secondary.main}`
                    })}
                >
                    <Container
                        maxWidth='xl'
                        sx={{
                            gap: '10px',
                            display: 'flex',
                            height: '100%',
                        }}
                        className='justify-content-between'
                    >
                        <Box className='align-items-center justify-content-between gap-4' sx={{
                            display: { xs: 'none', md: 'flex', sm: 'flex', lg: 'flex', xl: 'flex' }
                        }}>
                            <Button size='small' rounded sx={(theme) => ({
                                maxHeight: '40px',
                                height: '100%',
                                backgroundColor: theme.palette.secondary.main,
                                color: theme.palette.white[100],
                                lineHeight: '41px',
                                fontWeight: 600,
                                fontSize: '16px'
                            })}
                                onClick={() => navigate('/login')}
                            >
                                الخدمات الإلكترونية
                            </Button>
                            <SearchIcon fontSize="small" sx={{ fill: '#39281F' }} />
                        </Box>
                        <Box onClick={handleClick} className='align-items-center justify-content-between gap-4' sx={{
                            display: { xs: 'flex', md: 'none', sm: 'none', lg: 'none', xl: 'none' },
                        }}>
                            <Box p={0.7} sx={{ backgroundColor: '#AE965A', borderRadius: 2 }}>
                                <MenuIcon sx={{ fill: '#fff' }} />
                            </Box>
                        </Box>
                        <Box className='d-flex align-items-center justify-content-between gap-3'>
                            <Box
                                sx={(theme) => ({
                                    [theme.breakpoints.between('sm', 'lg')]: {
                                        gap: theme.spaces.X_LARGE,
                                    },
                                    [theme.breakpoints.up('lg')]: {
                                        gap: theme.spaces.X_LARGE,
                                    },
                                    flexGrow: 3,
                                    display: { xs: 'none', md: 'flex' },
                                    justifyContent: 'space-between',
                                    height: '100%'
                                })}
                            >
                                <Box sx={{ flexGrow: 1, height: '100%', display: { xs: 'none', md: 'flex' } }}>
                                    {navList.map((page, pageIndex) => (
                                        <Box
                                            key={page?.navName}
                                            sx={(theme) => ({
                                                borderRadius: 0,
                                                height: '100%',
                                                display: 'block',
                                                backgroundColor: 'transparent !important',
                                                color: '#39281F',
                                                fontWeight: 400,
                                                cursor: 'pointer',
                                                px: 2,
                                                borderBottom: window?.location?.pathname.includes(page?.pathName) ? '3px solid #39281F' : '',
                                            })}
                                            className="d-flex align-items-center"
                                            onClick={() => navigate(page?.pathName)}
                                        >
                                            {page?.navName}
                                        </Box>
                                    ))}
                                </Box>
                            </Box>
                            <img src={headerLogo} style={{ height: '55px', maxWidth: '66px' }} alt='' />
                        </Box>
                    </Container>
                </AppBar>
            </Box>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                sx={{
                    '& .MuiPaper-root': {
                        top: '0 !important',
                        left: '0 !important',
                        maxHeight: '350px !important',
                        height: '100%',
                        gap: 0,
                        p: 1,
                        borderTopRightRadius: '95px'
                    }
                }}
            >
                <Box className="d-flex align-items-center flex-column" mt={1}>
                    <Box className="d-flex align-items-center justify-content-start w-100">
                        <Box onClick={() => handleClose()} p={0.7} ml='40px' pt={0} sx={{ backgroundColor: '#AE965A', borderRadius: 2 }}>
                            <CloseIcon sx={{ fill: '#fff', fontSize: '1rem' }} />
                        </Box>
                    </Box>
                    <Box mt={1} className="d-flex align-items-center flex-column gap-2">
                        {navList.map((page) => (
                            <Button
                                key={page?.navName}
                                sx={(theme) => ({
                                    borderRadius: 0,
                                    display: 'block',
                                    backgroundColor: 'transparent !important',
                                    color: '#39281F',
                                    fontWeight: 400,
                                    '& :hover': {
                                        color: '#AE965A'
                                    },
                                    p: 0,
                                })}
                                onClick={() => navigate('')}
                            >
                                {page?.navName}
                            </Button>
                        ))}
                    </Box>
                    <Box mt={2}>
                        <Button size='small' rounded sx={(theme) => ({
                            maxHeight: '30px',
                            height: '100%',
                            backgroundColor: theme.palette.secondary.main,
                            color: theme.palette.white[100],
                            lineHeight: '30px',
                            fontWeight: 600,
                            fontSize: '16px',
                            py: 0,
                            px: 2
                        })}
                            onClick={() => navigate('/login')}
                        >
                            الخدمات الإلكترونية
                        </Button>
                    </Box>
                </Box>
            </Popover>
        </>
    )
};
export default Header;
