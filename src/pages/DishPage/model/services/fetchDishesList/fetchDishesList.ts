import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Dish } from 'entities/Dish';

export const fetchDishesList = createAsyncThunk<
    Dish[],
    void,
    ThunkConfig<string>
>(
    'fetchDishesList',
    async (articleId, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi;

        try {
            const response = await extra.api.get<Dish[]>('/dishes', {});

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
