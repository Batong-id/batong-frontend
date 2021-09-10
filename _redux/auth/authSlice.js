import persistAuth from '_api/auth';
import { ssoAuthentication } from '_api/endpoints';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const login = createAsyncThunk(
  'auth/login',
  async (arguments_, { rejectWithValue }) => {
    try {
      return axios.post(ssoAuthentication, arguments_);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const { token, refresh, name, role, isSSO } = persistAuth.loggedIn();

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: token ?? '',
    refresh: refresh ?? '',
    name: name ?? '',
    role: role ?? '',
    isSSO: isSSO ?? ''
  },
  reducers: {
    logout: (state) => {
      state.token = '';
      state.refresh = '';
      state.name = '';
      state.role = '';
      state.isSSO = '';
      persistAuth.logout();
    },
    loginUser: (state, action) => {
      const { token, name, refresh, role, isSSO = false } = action.payload;
      state.token = token;
      state.refresh = refresh;
      state.name = name;
      state.role = role;
      state.isSSO = isSSO;
      persistAuth.login({ token, refresh, name, role, isSSO });
    }
  },
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      const { token, name, refresh, role, isSSO = true } = action.payload.data;
      state.token = token;
      state.refresh = refresh;
      state.name = name;
      state.role = role;
      state.isSSO = isSSO;
      persistAuth.login({ token, refresh, name, role, isSSO });
    }
  }
});

export const { logout, loginUser } = authSlice.actions;

export const isLoggedIn = (state) => {
  if (state.auth.token) {
    return true;
  }
  return false;
};

export const getRole = (state) => state.auth.role;

export default authSlice.reducer;
