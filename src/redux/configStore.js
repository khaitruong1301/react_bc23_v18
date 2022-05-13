import {configureStore} from '@reduxjs/toolkit'
import nguoiDungReducer from './Reducers/nguoiDungReducer';
import phimReducer from './Reducers/phimReducer'


export const store = configureStore({
    reducer: {
        //Khai báo state
        phimReducer: phimReducer,
        nguoiDungReducer: nguoiDungReducer
    }
});
