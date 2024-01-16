import {CardPostWithImage} from './Components'
export const Inicio = () => {

    return (
        <div className="flex flex-col">
            <CardPostWithImage 
                isPD={true}
                ImgURL="./assets/images/Perfil.jpg" 
                Fecha="16 Octubre 2023"
                Titulo="¡Bienvenido!" 
                Contenido="Esta sección es de mis favoritas en mi portafolio ya que aquí puedes encontrar información acerca de mí sobre mi experiencia laboral y sobre mis gustos o hobbies personales. Espero te agrade el recorrido por esta sección!!!"
            />
             <CardPostWithImage 
                ImgURL="./assets/images/Proyecto.png" 
                Fecha="12 Enero 2024"
                Titulo="Nuevo proyecto 😎" 
                Contenido="¡Me siento emocionado de mostrar mi primer proyecto con Electron! Es una aplicación de escritorio desarrollada en conjunto con React TS y Electron la cual funciona como una biblioteca de los principales soundtracks de los videojuegos"
            />
        </div>
    )
}
