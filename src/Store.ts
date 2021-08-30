import { configureStore } from "@reduxjs/toolkit";
import { enterWhat, enterWhen, enterWhere, enterWho, reducer } from "./RootSlice";

export const store = configureStore({
    reducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch