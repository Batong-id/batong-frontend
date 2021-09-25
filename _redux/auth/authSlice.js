import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import persistAuth from '../../_api/auth';

export const login = createAsyncThunk('auth/login');

const { token, refresh, username, role, firstName } = persistAuth.loggedIn();

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: token ?? '',
    refresh: refresh ?? '',
    username: username ?? '',
    role: role ?? '',
    firstName: firstName ?? ''
  },
  reducers: {
    logout: (state) => {
      state.token = '';
      state.refresh = '';
      state.username = '';
      state.role = '';
      state.firstName = '';
      persistAuth.logout();
    },
    loginUser: (state, action) => {
      const { token, username, refresh, role } = action.payload;
      state.token = token;
      state.refresh = refresh;
      state.username = username;
      state.role = role;
      state.firstName = firstName;
      persistAuth.login({ token, refresh, username, role, firstName });
    }
  },
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      const { token, username, refresh, role } = action.payload.data;
      state.token = token;
      state.refresh = refresh;
      state.username = username;
      state.role = role;
      state.firstName = firstName;
      persistAuth.login({ token, refresh, username, role, firstName });
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
export const getFirstName = (state) => state.auth.firstName;
export const getUsername = (state) => state.auth.username;

export default authSlice.reducer;
