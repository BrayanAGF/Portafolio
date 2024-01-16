import { createSlice } from '@reduxjs/toolkit';

export const MensajesSlice = createSlice({
    name: 'Mensajes',
    initialState: {
        Msg: []
    },
    reducers: {
        setMsg: (state, { payload }) => {
            state.Msg = payload
        },
        addMsg: (state, { payload }) => {
            state.Msg = [payload, ...state.Msg]
        }
    }
});


// Action creators are generated for each case reducer function
export const {
    setMsg,
    addMsg
} = MensajesSlice.actions;