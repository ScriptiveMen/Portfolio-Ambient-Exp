import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/UserSlice";
import honorSlice from "./slices/HonorSlice";
import skillsSlice from "./slices/SkillsSlice";

export const store = configureStore({
    reducer: {
        user: userSlice,
        honors: honorSlice,
        skills: skillsSlice,
    },
});
