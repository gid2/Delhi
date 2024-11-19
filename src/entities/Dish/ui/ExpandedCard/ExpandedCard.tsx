import React, { useState } from 'react';
import { Background } from 'shared/ui/Background/Background';
import { Box } from '@mui/material';
import { Card } from 'shared/ui/Card/Card';
import { CardImage } from 'shared/ui/CardImage/CardImage';
import { CardDetails } from 'shared/ui/CardDetails/CardDetails';
import { SpicinessSelector } from 'shared/ui/SpicinessSelector/SpicinessSelector';
import { SwitcherWithLabel } from 'features/Switcher';
import { QuantityController } from 'shared/ui/QuantityController/QuantityController';

interface ExpandedCardProps {
    title?: string;
    description?: string;
    weight?: number;
    price?: number;
    image?: string;
    showImage?: boolean;
    showSpicinessSelector?: boolean;
    showSwitcher?: boolean;
    showQuantityController?: boolean;
    showAddToCartButton?: boolean;
}

export const ExpandedCard: React.FC<ExpandedCardProps> = ({
    title,
    description,
    weight,
    price = 0,
    image,
    showImage = true,
    showSpicinessSelector = true,
    showSwitcher = true,
    showQuantityController = true,
    showAddToCartButton = true,
}) => {
    const [spiciness, setSpiciness] = useState<number | null>(null);
    const [extraRice, setExtraRice] = useState(false);
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (delta: number) => setQuantity((prev) => Math.max(prev + delta, 1));

    return (
        <Background height="915px" justifyContent="center" overflow='visible'>
            <Card>
                {showImage && <CardImage image={image} title={title} />}
                <CardDetails weight={weight} title={title} description={description} />
                {showSpicinessSelector && (
                    <SpicinessSelector spiciness={spiciness} setSpiciness={setSpiciness} />
                )}
                {showSwitcher && (
                    <SwitcherWithLabel garnish="Рис" checked={extraRice} onChange={() => setExtraRice((prev) => !prev)} />
                )}
                <Box display="flex" alignItems="center" mt={2} sx={{ width: '100%' }}>
                    {showQuantityController && (
                        <QuantityController
                            price={price}
                            handleQuantityChange={handleQuantityChange}
                            quantity={quantity}
                        />
                    )}
                </Box>
            </Card>
        </Background>
    );
};
