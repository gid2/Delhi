import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { Background } from 'shared/ui/Background/Background';
import { ExpandedCard } from 'entities/Dish/ui/ExpandedCard/ExpandedCard';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { dishPageReducer, getDishes } from 'pages/DishPage/model/slices/dishPageSlice';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { fetchDishesList } from 'pages/DishPage/model/services/fetchDishesList/fetchDishesList';

interface ExpandedCardListProps {}

export const ExpandedCardList: React.FC<ExpandedCardListProps> = () => {
const dispatch = useAppDispatch()
const dishes = useSelector(getDishes.selectAll)
const reducers: ReducersList = {
    dishesPage: dishPageReducer
}


useEffect(() => {
    dispatch(fetchDishesList())
}, []);

    return(
        <DynamicModuleLoader reducers={reducers}>
    <Background
        height="100vh" // Устанавливаем высоту на полный экран, если необходимо
        darken
        justifyContent="flex-start" // Выравниваем содержимое к началу
        overflow='visible'
    >
        <Box
            marginTop="50px"
        >
            {/* Заголовок */}
            <Box position={'absolute'} width='100%' textAlign={'center'}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', fontFamily: 'Mulish' }}>
                НЕ ЗНАЕТЕ ЧТО ВЫБРАТЬ?
            </Typography>
            </Box>
            {/* Список карточек */}
            <Box display="flex" flexDirection="row" gap={2} alignItems="center">
                {dishes?.map((dish) => (
                    <ExpandedCard
                        weight={dish.weight}
                        image={dish.image}
                        title={dish?.tags}
                        description={dish.description}
                        price={dish.price}
                    />
                ))}
            </Box>
        </Box>
    </Background>
        </DynamicModuleLoader>
    )};
