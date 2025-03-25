import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Role {
    roleName: string;
    permissions: string[];
}

interface UserState {
    username: string;
    email: string;
    roles: Role[];
    isAuthenticated: boolean;
}

const initialState: UserState = {
    username: "",
    email: "",
    roles: [],
    isAuthenticated: false
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<UserState>) {
            return { ...state, ...action.payload, isAuthenticated: true };
        },
    }
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
