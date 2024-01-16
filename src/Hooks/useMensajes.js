import { collection, doc, getDocs, orderBy, query, setDoc } from "firebase/firestore"
import { Firestore } from "../Firebase/config"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addMsg, setMsg } from "../Store/Mensajes/MensajesSlice"
import moment from "moment/moment"
import 'moment/locale/es'

export const useMensajes = () => {

    const { Msg } = useSelector(state => state.Mensajes)
    const dispatch = useDispatch()


    useEffect(() => {
        consultarMensajes().then()
    }, [])


    const enviarMensaje = async (Mensaje) => {
        const docRef = doc(collection(Firestore, 'Mensajes/'))
        await setDoc(docRef, Mensaje)

        const { Fecha: f } = Mensaje
        const Fecha = moment(f).locale('es').calendar()
        const primeraPalabra = Fecha.charAt(0);
        const textoCapitalizado = primeraPalabra.toUpperCase() + Fecha.substring(1);
        dispatch(addMsg({ ...Mensaje, Fecha: textoCapitalizado }))
    }

    const consultarMensajes = async () => {
        const q = query(collection(Firestore, `Mensajes`), orderBy('Fecha', 'desc'));
        const querySnapshot = await getDocs(q);
        const messages = []

        querySnapshot.forEach((doc) => {
            const { Nombre, Mensaje, Fecha: tm } = doc.data()
            const Fecha = moment(tm.toDate()).locale('es').calendar()
            const primeraPalabra = Fecha.charAt(0);
            const textoCapitalizado = primeraPalabra.toUpperCase() + Fecha.substring(1);
            messages.push({ Nombre, Mensaje, 'Fecha': textoCapitalizado })
        })

        dispatch(setMsg(messages))
    }


    return {
        Msg,
        enviarMensaje,
        consultarMensajes
    }
}
