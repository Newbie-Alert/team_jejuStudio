import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../firebase"

const initialState = {
  user: [],
  isLoading: false,
  isError: false,
  error: null
}

export const __doSignUp = createAsyncThunk(
  "SIGN_UP",
  async (payload, thunkAPI) => {
    try {
      const { email, password } = payload
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const { accessToken, uid } = res.user;
      const data = { accessToken, uid };
      return thunkAPI.fulfillWithValue(data)
    }
    catch (err) {
      return thunkAPI.rejectWithValue(err)
    }
  }
)

export const __doLogin = createAsyncThunk(
  "LOGIN",
  async (payload, thunkAPI) => {
    try {
      const { email, password } = payload
      console.log(payload);
      const res = await signInWithEmailAndPassword(auth, email, password);
      console.log(res);
      const { accessToken, uid } = res.user
      const data = { accessToken, uid }
      return thunkAPI.fulfillWithValue(data)
    }
    catch (err) {
      return thunkAPI.rejectWithValue(err.code)
    }
  }
)

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(__doSignUp.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(__doSignUp.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(__doSignUp.rejected, (state, action) => {
        state.isError = true;
        state.error = action.payload;
      })

      .addCase(__doLogin.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(__doLogin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        localStorage.setItem('user', JSON.stringify(action.payload))
      })
      .addCase(__doLogin.rejected, (state, action) => {
        state.isError = true;
        state.error = action.payload;
        state.isLoading = false
      })
  }
})


export default authSlice.reducer