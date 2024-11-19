import React from 'react';
import { Box, Typography } from '@mui/material';
import backgroundSecondImage from 'shared/assets/icons/image.png';
import { Background } from 'shared/ui/Background/Background';

export const InfoBanner = () => (
    <Background image={backgroundSecondImage} height="127vh" darken justifyContent="flex-end">
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <Typography
                variant="h6"
                sx={{
                    fontSize: '70px',
                    textAlign: 'center',
                    fontFamily: 'Mulish',
                }}
            >
                ЧАСТИЧКА ИНДИИ
                <br />
                У ВАС ДОМА
            </Typography>
            <Box display="flex" alignItems="center">
                <Typography
                    noWrap
                    variant="h6"
                    sx={{
                        fontSize: '16px',
                        textAlign: 'center',
                        flexGrow: 1,
                        fontFamily: 'Mulish',
                    }}
                >
                    Однажды попробовав блюда Delhi, вы точно не
                    <br />
                    забудете что такое настоящая индийская кухня.
                </Typography>
                <Typography
                    noWrap
                    variant="h6"
                    sx={{
                        marginLeft: '50px',
                        fontSize: '16px',
                        textAlign: 'center',
                        flexGrow: 1,
                        fontFamily: 'Mulish',
                    }}
                >
                    Наши повара из Индии готовят блюда по оригинальным рецептам,
                    <br />
                    которые поражают наших гостей своими
                    ароматами и вкусами.
                </Typography>
            </Box>
        </Box>
    </Background>
);
