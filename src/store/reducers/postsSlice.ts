import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Posts} from "../../models/user";
import { fetchPosts } from "./actionCreator";



interface PostsState {
    posts: Posts[];
    isLoading: boolean;
    error: string;
}

const initialState: PostsState = {
    posts: [],
    isLoading: false,
    error: '',
}

export const PostsSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchPosts.fulfilled.type]: (state, action: PayloadAction<Posts[]>) => {
            state.isLoading = false;
            state.error = "";
            state.posts = action.payload
        },
        [fetchPosts.pending.type]: (state) => {
            state.isLoading = true;
        },
        [fetchPosts.rejected.type]:(state, action: PayloadAction<string>)=>{
            state.isLoading = false;
            state.error = action.payload;
        }
    }
})

export default PostsSlice.reducer