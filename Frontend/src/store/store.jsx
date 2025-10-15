import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/UserSlice";
import honorSlice from "./slices/HonorSlice";

export const store = configureStore({
    reducer: {
        user: userSlice,
        honors: honorSlice,
    },
});
