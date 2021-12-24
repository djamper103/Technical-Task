import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../models/user";
import { fetchUsers } from "./actionCreator";


interface UserState {
    users: User[];
    isLoading: boolean;
    error: string;
}

const initialState: UserState = {
    users: [],
    isLoading: false,
    error: ''
}

export const UserSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchUsers.fulfilled.type]: (state, action: PayloadAction<User[]>) => {
            state.isLoading = false;
            state.error = "";
            state.users = action.payload
        },
        [fetchUsers.pending.type]: (state) => {
            state.isLoading = true;
        },
        [fetchUsers.rejected.type]:(state, action: PayloadAction<string>)=>{
            state.isLoading = false;
            state.error = action.payload;
        }
    }
})

export default UserSlice.reducer