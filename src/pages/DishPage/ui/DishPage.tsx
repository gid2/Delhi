import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { Background } from 'shared/ui/Background/Background';
import { QuantityController } from 'shared/ui/QuantityController/QuantityController';
import { CardImage } from 'shared/ui/CardImage/CardImage';
interface DishPageProps {
    name?: string;
    price?: number;
    image?: string;
    sharpness?: string;
    weight?: number;
}
enum DishSharpness {
    Mild = 'mild',
    Medium = 'medium',
    Hot = 'hot',
    None = 'none'
}

// const mapSharpnessToLevel = (sharpness: DishSharpness): string[] => {
//     let sharpnessNumber = 0
//     switch (sharpness) {
//     case DishSharpness.Mild:
//         sharpnessNumber = 1;
//     case DishSharpness.Medium:
//         sharpnessNumber = 2;
//     case DishSharpness.Hot:
//         sharpnessNumber = 3;
//     default: DishSharpness.None
//         sharpnessNumber = 0;
//     }
//     return new Array(sharpnessNumber).fill('/images/sharpness-level-1.png');
// };

// Функция для получения изображения
// const getSharpnessImage = (sharpness: DishSharpness): string => {
//     const level = mapSharpnessToLevel(sharpness); // Получаем уровень остроты
//     const sharpness = new Array(3 ).fill('/images/sharpness-level-1.png')
//     switch (level) {
//     case 1:
//         return '/images/sharpness-level-1.png';
//     case 2:
//         return '/images/sharpness-level-2.png';
//     case 3:
//         return '/images/sharpness-level-3.png';
//     default:
//         return '/images/no-sharpness.png';
//     }
// };

export const DishPage: React.FC<DishPageProps> = ({ name, price, image,sharpness, weight
}) => {
    const [quantity, setQuantity] = useState(1);
    const handleQuantityChange = (delta: number) => setQuantity((prev) => Math.max(prev + delta, 1));

    return (
        <Background height='auto' >
            <Box
                sx={{
                    justifyContent:'end',
                    height:'auto',
                    maxWidth: 600,
                    width: '220px',
                    padding: 4,
                    backgroundColor: '#1C1C1C73',
                    borderRadius: 2,
                    boxShadow: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    color: 'white',
                }}
            >
                <CardImage
                    image={image}
                    title={name}
                    width='auto'
                    height='auto'
                />
                {/* Дополнительные данные */}
                <Typography variant="body2" color="#8989A0" fontSize='16px' sx={{ textAlign: 'start'}}>
                    гр {weight}
                </Typography>
                <Typography variant="h4" color="white" fontSize='16px' sx={{ textAlign: 'start'}}>
                    {name}
                </Typography>
                <Typography marginBottom='20px' variant="body2" color="#8989A0" fontSize='16px' sx={{ textAlign: 'start'}}>
                    Острота:{sharpness}
                </Typography>

                {/* Контроллер количества */}
                {price &&
                <QuantityController
                    price={price}
                    quantity={quantity}
                    handleQuantityChange={handleQuantityChange}
                />}
            </Box>
        </Background>
    );
};
