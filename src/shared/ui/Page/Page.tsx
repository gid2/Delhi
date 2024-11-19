import React, { ReactNode } from 'react';
import { Box } from '@mui/material';
import { CustomContainer } from 'shared/ui/CustomContainer/CustomContainer';

interface PageProps {
    title?: string;
    children: ReactNode;
}

export const Page: React.FC<PageProps> = ({ title, children }) => (
    <Box>
        <CustomContainer component="main" sx={{ flexGrow: 1, py: 4 }}>
            {children}
        </CustomContainer>
    </Box>
);
