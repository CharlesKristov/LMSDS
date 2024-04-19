import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: {
        nama: "Matthew Sebastian",
        role: "admin"
    },
    status: "idle",
};

export const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        doLogin: (state) => {
            state.status = "loading";
        },
        putLogin: (state, action) => {
            state.data = action.payload;
            state.status = "success";
        },
        putLoginFailed: (state) => {
            // state.data = null
            state.status = "failed";
        },
        resetLoadingonRefresh: (state) => {
            state.status = "idle";
        },
        setUser: (state, action) => {
            state.data = action.payload;
        },
    },
});

// export function getUser() {
//     return (dispatch: Dispatch, getState: any): void => {
//         fetch("https://jsonplaceholder.typicode.com/users")
//             .then((resp) => resp.json())
//             .then((data) => {
//                 console.log(data);
//                 dispatch(setUser(data[1]));
//             })
//     }
// }

export const { doLogin, putLogin, resetLoadingonRefresh, putLoginFailed, setUser } = loginSlice.actions;
export const loginSelector = (state: any) => state.login;
export default loginSlice.reducer;