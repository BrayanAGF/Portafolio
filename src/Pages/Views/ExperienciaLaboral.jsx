import { Avatar, Card, CardBody } from "@nextui-org/react"
import { CardPost } from "./Components"

export const ExperienciaLaboral = () => {
    return (
        <div>
            <CardPost
                ImgPURL="./assets/images/compusoluciones.png"
                Nombre="CompuSoluciones"
                Fecha="Mayo 2023 - Presente"
                Titulo="Desarrollador Web"
                Contenido={
                    <>
                        <p>Responsabilidades</p>
                        <ul className="list-disc pl-6">
                            <li>Soporte a sistemas de la empresa</li>
                            <li>Desarrollo de mejoras a sistemas ya implementados</li>
                        </ul>
                    </>
                }
                isPD={true}
            />
            <CardPost
                ImgPURL="./assets/images/patronLogo.png"
                Nombre="Patrón Spirits de S.A de C.V"
                Fecha="Agosto 2022 - Febrero 2023"
                Titulo="Soporte IT"
                Contenido={
                    <>
                        <p>Responsabilidades</p>
                        <ul className="list-disc pl-6">
                            <li>Administración de personal en la empresa</li>
                            <li>Mantenimiento a equipos de cómputo</li>
                            <li>Desarrollo de herramientas web para el departamento de IT</li>
                            <li>Configuración de equipos de cómputo</li>
                            <li>Asistencia técnica al personal de la empresa</li>
                        </ul>
                    </>
                }
            />
            <CardPost
                ImgPURL="./assets/images/itoLogo.jpeg"
                Nombre="Instituto Tecnológico de Ocotlán"
                Fecha="Septiembre 2021 - Febrero 2022"
                Titulo="Desarrollo y admnistrativo"
                Contenido={
                    <>
                        <p>Responsabilidades</p>
                        <ul className="list-disc pl-6">
                            <li>Control administrativo sobre los arcivos correspondientes a la academia de Sistemas</li>
                            <li>Desarrollo de página web de la academia de Sistemas</li>
                        </ul>
                    </>
                }
            />
        </div>
    )
}
