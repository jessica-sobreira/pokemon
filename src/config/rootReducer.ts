import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import themeSlice from "./modules/themeSlice";

export const rootReducer = combineReducers({
    theme: themeSlice,
});

export const persistedReducer = persistReducer(
    {
        key: "root",
        storage: storage
    },
    rootReducer
    )