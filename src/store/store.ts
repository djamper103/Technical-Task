import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userSlice"
import postsReducer from "./reducers/postsSlice"
import albumsReducer from "./reducers/albumsSlice"
import modalReducer from "./reducers/modalSlice"


const rootReducer = combineReducers({
    userReducer,
    postsReducer,
    albumsReducer,
    modalReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']