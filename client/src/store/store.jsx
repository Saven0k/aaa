import { configureStore } from '@reduxjs/toolkit';
import postReducer from '../services/postReducer';

const store = configureStore({
    reducer: {
        posts: postReducer,
    },
});

export default store;