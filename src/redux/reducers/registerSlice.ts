import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type RegisterState = {
  username: string;
  email: string;
  password: string;
  errors: {
    username: string;
    email: string;
    password: string;
  };
}

const initialState: RegisterState = {
  username: '',
  email: '',
  password: '',
  errors: {
    username: '',
    email: '',
    password: '',
  },
};

const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    setErrors: (state, action: PayloadAction<RegisterState['errors']>) => {
      state.errors = action.payload;
    },
  },
});

export const { setUsername, setEmail, setPassword, setErrors } = registerSlice.actions;
export default registerSlice.reducer;
