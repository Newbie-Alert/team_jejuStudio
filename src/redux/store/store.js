import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../modules/authSlice";
import imageSlice from "../modules/imageSlice";

const store = configureStore({
  reducer: {
    authSlice,
    imageSlice,
  }
})


export default store;