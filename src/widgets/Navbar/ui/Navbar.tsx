import React, { useState, useEffect } from 'react';
import {
    AppBar, Toolbar, Typography, IconButton, Button, Menu, MenuItem, Box,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { CustomContainer } from 'shared/ui/CustomContainer/CustomContainer';
import { Link } from 'react-router-dom';

import LogoText from 'shared/assets/icons/Group 449.png';
import BasketIcon from 'shared/assets/icons/Group 450.png';
import LineIcon from 'shared/assets/icons/Line.png';

export const Navbar = () => {
    const theme = useTheme();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [isScrolled, setIsScrolled] = useState(false);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <AppBar
            position="fixed"
            sx={{
                backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
                backdropFilter: isScrolled ? 'blur(10px)' : 'none',
                transition: 'background-color 0.3s ease, backdrop-filter 0.3s ease',
                boxShadow: isScrolled ? theme.shadows[4] : 'none',
                height: '112px',
                zIndex: theme.zIndex.appBar + 1,
            }}
        >
            <CustomContainer sx={{ display: 'flex', alignItems: 'center' }}>
                <Toolbar sx={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', paddingBottom: 0, width: '100%', zIndex: theme.zIndex.appBar + 1,
                }}
                >
                    <Box display="flex" alignItems="flex-end">
                        <Box display="flex" alignItems="center" sx={{ mr: 2, paddingBottom: 0 }}>
                            <Link to="/AboutUs" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <img src={LogoText} alt="Delhi Logo Text" style={{ height: 40, marginRight: 8 }} />
                            </Link>
                        </Box>
                        <Box display="flex" alignItems="flex-end">
                            <Link to="/menu" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <Button
                                    color="inherit"
                                    sx={{
                                        mr: 1, fontSize: '16px', textTransform: 'none', lineHeight: '1.2', paddingBottom: 0,
                                    }}
                                >
                                    Меню
                                </Button>
                            </Link>
                            <Link to="/AboutUs" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <Button
                                    color="inherit"
                                    sx={{
                                        mr: 1, fontSize: '16px', textTransform: 'none', lineHeight: '1.2', paddingBottom: 0,
                                    }}
                                >
                                    О нас
                                </Button>
                            </Link>
                            <Link to="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <Button
                                    color="inherit"
                                    sx={{
                                        mr: 1, fontSize: '16px', textTransform: 'none', lineHeight: '1.2', paddingBottom: 0,
                                    }}
                                >
                                    Как добраться
                                </Button>
                            </Link>
                            <Button
                                sx={{
                                    color: '#767676',
                                    fontSize: '16px',
                                    textTransform: 'none',
                                    lineHeight: '1.2',
                                    paddingBottom: 0,
                                }}
                                onClick={handleClick}
                            >
                                {'Укажите адрес доставки >'}
                            </Button>
                        </Box>
                    </Box>

                    {/* Правая часть Navbar */}
                    <Box display="flex" alignItems="flex-end" justifyContent="flex-end">
                        <Button
                            color="inherit"
                            sx={{
                                textTransform: 'none',
                                paddingBottom: 0,
                                alignSelf: 'flex-end',
                            }}
                        >
                            WhatsApp
                        </Button>
                        <IconButton
                            color="inherit"
                            sx={{
                                paddingBottom: 0,
                                paddingRight: 0,
                                alignSelf: 'flex-end',
                                display: 'flex',
                                alignItems: 'flex-end',
                                justifyContent: 'center',
                                height: '40px',
                                width: '40px',
                            }}
                        >
                            <img
                                src={BasketIcon}
                                alt="Корзина"
                                style={{
                                    height: '24px',
                                    width: '24px',
                                }}
                            />
                        </IconButton>
                        <IconButton
                            sx={{
                                display: 'flex',
                                alignSelf: 'flex-end',
                                justifyContent: 'center',
                                padding: '0px 5px',
                            }}
                        >
                            <img
                                src={LineIcon}
                                alt="Line"
                            />
                        </IconButton>
                        <Typography variant="body1" sx={{ lineHeight: '1.2', alignSelf: 'flex-end' }}>1 458 ₽</Typography>
                    </Box>
                </Toolbar>
            </CustomContainer>
        </AppBar>
    );
};
