import { configureStore } from "@reduxjs/toolkit";
import authSlice from './authSlice'

const store= configureStore({
    reducer:{
        auth: authSlice,
        // post: postSlice ? for post to store post so that everytime posts don't load
    }
    
});


export default store