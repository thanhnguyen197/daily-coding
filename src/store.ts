import {configureStore} from '@reduxjs/toolkit';
import layoutsReducer from 'Modules/Layouts/layoutsSlice';

export default configureStore({
    reducer: {
        layouts: layoutsReducer
    }
});
