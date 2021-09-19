import persistAuth from '_api/auth';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const login = createAsyncThunk('auth/login');

const { token, refresh, username, role } = persistAuth.loggedIn();

const authSlice = createSlice({
  username: 'auth',
  initialState: {
    token: token ?? '',
    refresh: refresh ?? '',
    username: username ?? '',
    role: role ?? ''
  },
  reducers: {
    logout: (state) => {
      state.token = '';
      state.refresh = '';
      state.username = '';
      state.role = '';
      persistAuth.logout();
    },
    loginUser: (state, action) => {
      const { token, username, refresh, role } = action.payload;
      state.token = token;
      state.refresh = refresh;
      state.username = username;
      state.role = role;
      persistAuth.login({ token, refresh, username, role });
    }
  },
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      const { token, username, refresh, role } = action.payload.data;
      state.token = token;
      state.refresh = refresh;
      state.username = username;
      state.role = role;
      persistAuth.login({ token, refresh, username, role });
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
