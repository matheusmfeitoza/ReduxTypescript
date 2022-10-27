import { configureStore, combineReducers } from "@reduxjs/toolkit";
import contador from "./contador";
import photo from "./photo";
const reducer = combineReducers({ contador, photo });

const store = configureStore({ reducer });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
