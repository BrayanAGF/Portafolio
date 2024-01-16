
import { CardPost, FormularioContacto } from './Components'
import { useMensajes } from '../../Hooks'

export const Contacto = () => {

    const { Msg } = useMensajes()

    return (
        <>
            <CardPost
                ImgPURL="./assets/images/Perfil2.jpg"
                Nombre="Brayan Alberto Godinez Flores"
                Fecha="15 Enero 2024"
                Contenido={<FormularioContacto />}
            />
            {
                Msg.map((item, index) => (
                    <CardPost
                        key={index}
                        css='animate__animated animate__headShake'
                        Nombre={item.Nombre}
                        Fecha={item.Fecha}
                        ImgPURL="https://xsgames.co/randomusers/avatar.php?g=male"
                        Contenido={
                            <>
                                <p>{item.Mensaje}</p>
                            </>
                        }
                    />
                ))
            }
        </>
    )
}
