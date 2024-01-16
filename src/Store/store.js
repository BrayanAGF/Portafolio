import { configureStore } from '@reduxjs/toolkit'
import {MensajesSlice} from './Mensajes/MensajesSlice'

export const store = configureStore({
  reducer: {
    Mensajes: MensajesSlice.reducer
  },
})