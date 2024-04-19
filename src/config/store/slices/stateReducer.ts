import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    sidebarShow: false,
    darkMode: false,
    loginSuccess: false,
};

export const stateSlice = createSlice({
    name: 'state',
    initialState,
    reducers: {
        setLoginSuccess: (state, action) => {
            state.loginSuccess = action.payload;
        },
        setShowSideBar: (state, action) => {
            state.sidebarShow = action.payload;
        },
        setDarkMode: (state, action) => {
            state.darkMode = action.payload;
        },
    },
});

export const { setLoginSuccess, setShowSideBar, setDarkMode } = stateSlice.actions;
export default stateSlice.reducer;