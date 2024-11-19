import { Box, Button, Typography } from '@mui/material';
import { Background } from 'shared/ui/Background/Background';

interface QuantityControllerProps {
    price: number;
    handleQuantityChange: (delta: number) => void;
    quantity: number;
}

export const QuantityController: React.FC<QuantityControllerProps> = ({ price, handleQuantityChange, quantity }) => (
    <Background backgroundColor="#EE6315" maxHeight='52px' overflow='hidden' borderRadius='50px' height='20px'>
        <Box display="flex" alignItems="center" gap={1}>
            <Button onClick={() => handleQuantityChange(-1)} sx={{ color: 'white' }}>
                -
            </Button>
            {price * quantity}₽
            <Button onClick={() => handleQuantityChange(1)} sx={{ color: 'white' }}>
                +
            </Button>
        </Box>
    </Background>
);
