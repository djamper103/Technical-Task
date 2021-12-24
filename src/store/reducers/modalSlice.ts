import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface ModalState {
    modalActive:boolean;
}

const initialState: ModalState = {
    modalActive:false
}

export const ModalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        setModal(state,actions){
            state.modalActive=actions.payload
        }
    },
})

export default ModalSlice.reducer