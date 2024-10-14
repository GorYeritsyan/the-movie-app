import { AppDispatch, RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";

// create custom hooks for redux + typescript safety

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
