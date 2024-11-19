import { Dish } from 'entities/Dish';

export interface DishDetailsSchema {
    error?: string
    data?: Dish
}
