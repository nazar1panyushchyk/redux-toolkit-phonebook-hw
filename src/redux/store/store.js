import { configureStore } from "@reduxjs/toolkit";
import { phonebookReducer } from "../slice/phonebookSlice";
import { persistStore, persistReducer, REGISTER, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, phonebookReducer)

export const store = configureStore({
    reducer: {
        contacts: persistedReducer,
    },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: {
                    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                },
            }),
});

export const persistor = persistStore(store);