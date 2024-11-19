import React from 'react';
import { Box } from '@mui/material';

interface BackgroundProps {
    image?: string;
    height?: string;
    maxHeight?: string;
    minHeight?: string;
    children: React.ReactNode;
    cover?: boolean;
    darken?: boolean;
    justifyContent?: string;
    backgroundColor?: string;
    overflow?: string
    borderRadius?: string
}

export const Background: React.FC<BackgroundProps> = ({
    image,
    height = '100vh',
    maxHeight,
    minHeight = 'auto',
    children,
    cover = true,
    darken = false,
    justifyContent = 'center',
    backgroundColor,
    overflow,
    borderRadius,
}) => (
    <Box
        sx={{
            minHeight,
            maxHeight,
            overflowX: 'hidden',
            position: 'relative',
            backgroundImage: image ? `url(${image})` : undefined,
            backgroundSize: cover ? 'cover' : '100% auto',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            width: '100%',
            height,
            display: 'flex',
            flexDirection: 'column',
            justifyContent,
            alignItems: 'center',
            color: 'white',
            textAlign: 'center',
            padding: '20px',
            backgroundColor,
            overflow: overflow,
            borderRadius: borderRadius
        }}
    >
        {darken && (
            <Box
                sx={{
                    position: 'absolute',
                    bottom: 0,
                    width: '100%',
                    height: '50%',
                    background: 'linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0))',
                    zIndex: 0,
                }}
            />
        )}
        <Box sx={{ position: 'relative', zIndex: 1 }}>{children}</Box>
    </Box>
);
