import { configureStore } from "@reduxjs/toolkit";
import { phonebookReducer } from "../slice/phonebookSlice";

export const store = configureStore({
    reducer: {
        contacts: phonebookReducer,
    },
});

