import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";
import config from "../../config";


const initialState = {
  images: [],
  isLoading: false,
  isError: false,
  error: null,
}

// https://api.unsplash.com/photos?page=1&client_id=

export const __getImages = createAsyncThunk(
  'GET_IMAGES',
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get(`https://api.unsplash.com/search/photos?query=couple&page=3&client_id=${config.unsplash.apiKey}`)
      return thunkAPI.fulfillWithValue(data.results);
    }
    catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
)

export const __addImages = createAsyncThunk(
  'ADD_IMAGES',
  async (payload, thunkAPI) => {
    try {
      const images = await axios.get(`https://api.unsplash.com/photos?query=forest&page=${payload}&client_id=${config.unsplash.apiKey}`)
      return thunkAPI.fulfillWithValue(images.data);
    }
    catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
)

const imageSlice = createSlice({
  name: 'imageSlice',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(__getImages.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__getImages.fulfilled, (state, action) => {
        state.isLoading = false;
        state.images = action.payload;
      })
      .addCase(__getImages.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload
      })

      // addImages
      .addCase(__addImages.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__addImages.fulfilled, (state, action) => {
        state.isLoading = false;
        state.images.push(...action.payload)
      })
      .addCase(__addImages.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload
      })
  }
})


export default imageSlice.reducer