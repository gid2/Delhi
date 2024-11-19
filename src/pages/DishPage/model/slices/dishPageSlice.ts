import {
    createEntityAdapter,
    createSlice, PayloadAction,
} from '@reduxjs/toolkit';
import { Dish } from 'entities/Dish';
import { StateSchema } from 'app/providers/StoreProvider';
import { DishPageSchema } from 'pages/DishPage';
import { fetchDishesList } from 'pages/DishPage/model/services/fetchDishesList/fetchDishesList';

const dishesAdapter = createEntityAdapter<Dish>({
    selectId: (dish) => dish.id,
});
export const getDishes = dishesAdapter.getSelectors<StateSchema>(
    (state) => state.dishesPage || dishesAdapter.getInitialState(),
);

const dishPageSlice = createSlice({
    name: 'articleDetailsCommentsSlice',
    initialState: dishesAdapter.getInitialState<DishPageSchema>({
        error: undefined,
        ids: [],
        entities: {},
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchDishesList.pending, (state) => {
                state.error = undefined;
            })
            .addCase(fetchDishesList.fulfilled, (
                state,
                action: PayloadAction<Dish[]>,
            ) => {
                dishesAdapter.setAll(state, action.payload);
            })
            .addCase(fetchDishesList.rejected, (state, action) => {
                state.error = action.payload;
            });
    },
});

export const { reducer: dishPageReducer } = dishPageSlice;
