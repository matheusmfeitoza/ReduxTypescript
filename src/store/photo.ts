import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";

interface PhotoProps {
  data: photoP[] | null;
  loading: boolean;
  error: string | null;
}

type photoP = {
  id?: number;
  title?: string;
  author?: string;
};

const initialState: PhotoProps = {
  loading: false,
  data: null,
  error: null,
};

const slice = createSlice({
  name: "photo",
  initialState,
  reducers: {
    fetchStated(state) {
      state.loading = true;
    },
    fetchSuccess(state, action) {
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

const { fetchStated, fetchSuccess } = slice.actions;

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
