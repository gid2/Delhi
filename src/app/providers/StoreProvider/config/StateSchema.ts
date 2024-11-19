import {
    CombinedState, EnhancedStore, ReducersMapObject,
} from '@reduxjs/toolkit';
import { AnyAction, Reducer } from 'redux';
import { AxiosInstance } from 'axios';
import { UserSchema } from 'entities/User';
import { DishDetailsSchema } from 'entities/Dish';
import { DishPageSchema } from 'pages/DishPage';

export interface StateSchema {
    user: UserSchema;
    dishesPage?: DishPageSchema
}
export type StateSchemaKey = keyof StateSchema;
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>,
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>,
    add: (key: StateSchemaKey, reducer: Reducer) => void
    remove:(key: StateSchemaKey) => void
    getMountedReducers: () => MountedReducers
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema>{
    reducerManager: ReducerManager
}

export interface ThunkExtraArg {
    api: AxiosInstance,
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema;
}
