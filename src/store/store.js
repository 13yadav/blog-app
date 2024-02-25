import {configureStore} from "@reduxjs/toolkit";
import authSlice from "./authSlice";

const store = configureStore({
    reducer: {
        auth: authSlice,
        // TODO: add postSlice to store posts data
    }
});

export default store;