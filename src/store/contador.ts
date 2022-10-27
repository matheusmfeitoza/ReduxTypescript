import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface ICounter {
  value: number;
}

const initialState: ICounter = {
  value: 0,
};

const slice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incrementar(state) {
      state.value += 1;
    },
    reduzir(state) {
      state.value -= 1;
    },
    incrementarEspecifico(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
  },
});

export const { incrementar, incrementarEspecifico, reduzir } = slice.actions;
export default slice.reducer;
