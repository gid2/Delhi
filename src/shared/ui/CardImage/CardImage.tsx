import { Box } from '@mui/material';

interface CardImageProps {
    image?: string;
    title?: string;
    width?: string;
    height?: string;
}

export const CardImage: React.FC<CardImageProps> = ({ image, title, width = '100%', height= '200px' }) => (
    <Box
        component="img"
        src={image}
        alt={title}
        sx={{
            width: width,
            height: height,
            objectFit: 'cover',
            borderRadius: '8px',
            marginBottom: 2,
        }}
    />
);
