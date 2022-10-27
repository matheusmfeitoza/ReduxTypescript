import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";

// Interface para tipar o state
interface IPhotoProps {
  data: PhotoData[] | null;
  loading: boolean;
  error: string | null;
}
// Type para definir as entradas da API
type PhotoData = {
  id?: number;
  title?: string;
  author?: string;
};

// Estado inicial
const initialState: IPhotoProps = {
  loading: false,
  data: null,
  error: null,
};

// Reducer
const slice = createSlice({
  name: "photo",
  initialState,
  reducers: {
    fetchStated(state) {
      state.loading = true;
    },
    fetchSuccess(state, action: PayloadAction<PhotoData[]>) {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    },
    fetchError(state, action) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

// Actions
const { fetchStated, fetchSuccess } = slice.actions;

// Função que será despachada e trará o resultado da API
export const fetchData = () => async (dispatch: Dispatch) => {
  try {
    dispatch(fetchStated());
    const response = await fetch(
      "https://dogsapi.origamid.dev/json/api/photo/?_page=1&_total=3&_user=0",
      {
        method: "GET",
        cache: "no-cache",
      }
    );
    const data = await response.json();
    dispatch(fetchSuccess(data));
  } catch (error) {
    console.log(error);
  }
};

export default slice.reducer;
//:PayloadAction<PhotoProps>
