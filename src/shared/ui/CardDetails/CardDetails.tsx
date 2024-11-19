import { Box, Typography } from '@mui/material';

interface CardDetailsProps {
    weight?: number;
    title?: string;
    description?: string;
}

export const CardDetails: React.FC<CardDetailsProps> = ({ weight, title, description }) => (
    <Box sx={{ textAlign: 'left', width: '100%' }}>
        <Typography variant="body1" color="#8989A0">
            {weight} гр
        </Typography>
        <Typography variant="h5" color="white">
            Посоветуйте что-нибудь {title}
        </Typography>
        <Typography variant="body2" color="white" margin="15px 0px 35px 0px">
            {description}
        </Typography>
    </Box>
);
