import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./configureStore";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
// Criar apenas se planejo usar o useDispatch e o useSelector, ou seja quase sempre, rs
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
