import React, { useEffect } from 'react';
import { Box, Grid } from '@mui/material';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { dishPageReducer, getDishes } from 'pages/DishPage/model/slices/dishPageSlice';
import { fetchDishesList } from 'pages/DishPage/model/services/fetchDishesList/fetchDishesList';
import { DishPage } from 'pages/DishPage/ui/DishPage';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'; // Тип данных блюда

interface DishListProps {
}

const DishList: React.FC<DishListProps> = () => {
    const dispatch = useAppDispatch()
    const dishes = useSelector(getDishes.selectAll)
    const reducers: ReducersList = {
        dishesPage: dishPageReducer
    }


    useEffect(() => {
        dispatch(fetchDishesList())
    }, []);
    console.log(dishes)
    return (
        <DynamicModuleLoader reducers={reducers}>
        <Box
            sx={{
                width: '100%',
                maxWidth: '1200px',
                margin: '0 auto',
                padding: 4,
                display: 'flex',
                flexDirection: 'column',
                gap: 3,
            }}
        >
            <Grid container spacing={2}>
                {dishes?.map((dish) => (
                    <Grid item  xs={12} sm={4} md={3} key={dish.id}>
                        <DishPage
                            name={dish.name}
                            price={dish.price}
                            image={dish.image}
                            sharpness={dish.sharpness}
                            weight={dish.weight}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
        </DynamicModuleLoader>
    );
};

export default DishList;
