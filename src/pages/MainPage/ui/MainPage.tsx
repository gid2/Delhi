import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import backgroundImage from 'shared/assets/icons/visual.png';
import { Background } from 'shared/ui/Background/Background';
import { InfoBanner } from 'pages/InfoBanner/InfoBanner';
import { ExpandedCardList } from 'pages/ExpandedCardList/ui/ExpandedCardList';
import { Link } from 'react-router-dom';

const MainPage = () => {
    return (<>
        <Background image={backgroundImage} height="59vw" justifyContent="flex-end">
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '20px',
                    padding: '20px 0px',
                }}
            >
                <Typography
                    variant="h6"
                    sx={{
                        fontSize: '14px',
                        textAlign: 'left',
                        flexGrow: 1,
                    }}
                >
                    Попробуйте наши аутентичные блюда и отправьтесь
                    <br/>
                    {' '}
                    в кулинарное путешествие по Индии.
                </Typography>
                <Link to="/menu" style={{ textDecoration: 'none', color: 'inherit' }}>
                <Button
                    variant="contained"
                    color="primary"
                    sx={{
                        mr: 1,
                        textTransform: 'none',
                        fontSize: '14px',
                        padding: '10px 20px',
                        borderRadius: '50px',
                        backgroundColor: '#FF6B00',
                        color: 'white',
                        '&:hover': {
                            backgroundColor: '#FF6B00',
                        },
                    }}
                >
                    Меню
                </Button>
                </Link>
                <Button
                    variant="outlined"
                    color="secondary"
                    sx={{
                        whiteSpace: 'nowrap',
                        mr: 1,
                        textTransform: 'none',
                        fontSize: '14px',
                        padding: '10px 20px',
                        borderRadius: '50px',
                        color: 'white',
                        borderColor: 'white',
                    }}
                >
                    Заказ по телефону
                </Button>
            </Box>
        </Background>

        <InfoBanner />
        <ExpandedCardList />
    </>)
};

export default MainPage;
