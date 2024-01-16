import { Button, Input, Textarea } from "@nextui-org/react"
import { useForm, useMensajes } from "../../../Hooks"


const formstate = { Nombre: "", Mensaje: "", Fecha: new Date() }

export const FormularioContacto = () => {

    const { onInputChange, formState, Nombre, Mensaje } = useForm(formstate)
    const { enviarMensaje } = useMensajes()

    return (
        <>
            ¿Quieres dejarme un mensaje? Llena el formulario de abajo.
            <div className="flex flex-col gap-2" >
                <Input
                    label="Nombre"
                    name="Nombre"
                    value={Nombre}
                    onChange={onInputChange}
                    autoComplete="off"
                />
                <Textarea
                    label="Mensaje"
                    name="Mensaje"
                    value={Mensaje}
                    onChange={onInputChange}
                />
                <Button
                    className="w-[100px] self-end bg-blue-500 text-white"
                    onClick={() => enviarMensaje(formState)}>
                    Publicar
                </Button>
            </div>
        </>
    )
}
