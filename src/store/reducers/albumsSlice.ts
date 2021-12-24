import { fetchAlbums } from './actionCreator';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Albums } from "../../models/user";



interface AlbumsState {
    albums: Albums[];
    isLoading: boolean;
    error: string;
}

const initialState: AlbumsState = {
    albums: [],
    isLoading: false,
    error: '',
}

export const AlbumsSlice = createSlice({
    name: "albums",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchAlbums.fulfilled.type]: (state, action: PayloadAction<Albums[]>) => {
            state.isLoading = false;
            state.error = "";
            state.albums = action.payload;
        },
        [fetchAlbums.pending.type]: (state) => {
            state.isLoading = true;
        },
        [fetchAlbums.rejected.type]:(state, action: PayloadAction<string>)=>{
            state.isLoading = false;
            state.error = action.payload;
        }
    }
})

export default AlbumsSlice.reducer