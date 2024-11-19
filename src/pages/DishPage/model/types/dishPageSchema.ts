import { EntityState } from '@reduxjs/toolkit';
import { Dish } from 'entities/Dish';

export interface DishPageSchema extends EntityState<Dish> {
    error?: string
}
