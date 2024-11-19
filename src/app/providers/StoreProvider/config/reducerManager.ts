import { AnyAction, combineReducers, Reducer } from 'redux';
import { ReducersMapObject } from '@reduxjs/toolkit';
import {
    MountedReducers, ReducerManager, StateSchema, StateSchemaKey,
} from './StateSchema';

export function createReducerManager(initialReducers: ReducersMapObject<StateSchema>): ReducerManager {
    const reducers = { ...initialReducers };
    let combinedReducer = combineReducers(reducers);

    let keysToRemove: Array<StateSchemaKey> = [];
    const mountedReducers: MountedReducers = {};

    return {
        getReducerMap: () => reducers,

        getMountedReducers: () => mountedReducers,

        reduce: (state: StateSchema | undefined, action: AnyAction) => {
            if (keysToRemove.length > 0 && state) {
                const newState = { ...state } as Partial<StateSchema>;
                keysToRemove.forEach((key) => {
                    delete newState[key];
                });
                keysToRemove = [];
                return combinedReducer(newState as StateSchema, action);
            }
            return combinedReducer(state, action);
        },

        add: (key: StateSchemaKey, reducer: Reducer) => {
            // Проверка на существование ключа или уже добавленного редьюсера
            if (!key || reducers[key]) {
                return;
            }
            reducers[key] = reducer;
            mountedReducers[key] = true;
            combinedReducer = combineReducers(reducers);
        },

        remove: (key: StateSchemaKey) => {
            if (!key || !reducers[key]) {
                return;
            }
            const mutableReducers = reducers as Partial<ReducersMapObject<StateSchema>>;
            delete mutableReducers[key];

            keysToRemove.push(key);
            mountedReducers[key] = false;
            combinedReducer = combineReducers(reducers);
        },
    };
}
