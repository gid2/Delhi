import React from 'react';
import { Box } from '@mui/material';

interface CardProps {
    children: React.ReactNode;
    backgroundColor?: string;
    width?: string;
    maxWidth?: string;
}

export const Card: React.FC<CardProps> = ({
    children,
    backgroundColor = '#1C1C1C73',
    width = '90vw',
    maxWidth = '400px',
}) => (
    <Box
        sx={{
            width,
            maxWidth,
            padding: 3,
            boxShadow: 3,
            borderRadius: 2,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            backgroundColor,
            color: 'white',
            alignItems: 'flex-start',
        }}
    >
        {children}
    </Box>
);
