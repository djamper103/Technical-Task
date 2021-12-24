import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { Albums, Posts, User } from "../../models/user"
import { AppDispatch } from "../store"
import { ModalSlice } from "./modalSlice"


export const fetchUsers = createAsyncThunk(
    'user/fetchUsers',
    async function (_, thunkAPI){
        try {
            const response = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users')
            return response.data;
        } catch (e:any) {
            return thunkAPI.rejectWithValue(e.message)
        }
    },
    {

    }
)

export const fetchPosts = createAsyncThunk(
    'user/fetchPosts ',
    async (data:number, thunkAPI) => {
        try {
            const response = await axios.get<Posts[]>('https://jsonplaceholder.typicode.com/posts')
            return response.data.filter(el=>el.userId===data);
        } catch (e) {
            return thunkAPI.rejectWithValue("Данные не загружены")
        }
    }
)

export const fetchAlbums= createAsyncThunk(
    'user/fetchAlbums',
    async (data:number, thunkAPI) => {
        try {
            const response = await axios.get<Albums[]>('https://jsonplaceholder.typicode.com/albums')
            return response.data.filter(el=>el.userId===data);
        } catch (e) {
            return thunkAPI.rejectWithValue("Данные не загружены")
        }
    }
)

export const setModalState = (data:any) => async (dispatch: AppDispatch) => {
    try {
        debugger
        dispatch(ModalSlice.actions.setModal(data))
    } catch (e) {

    }
}