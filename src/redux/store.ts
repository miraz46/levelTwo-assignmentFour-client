import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice'
import taskReducer from './features/task/taskSlice'
import { baseApi } from './api/baseApi';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        books: taskReducer,
        [baseApi.reducerPath]: baseApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware)
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>