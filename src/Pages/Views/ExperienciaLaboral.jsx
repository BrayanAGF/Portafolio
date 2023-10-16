import { Grid } from "@mui/material"
import { Avatar, Card, CardBody } from "@nextui-org/react"

export const ExperienciaLaboral = () => {
    return (
        <Grid>
            <Card>
                <CardBody>
                    <Grid className="flex items-center gap-3 mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pin-angle-fill" viewBox="0 0 16 16">
                            <path d="M9.828.722a.5.5 0 0 1 .354.146l4.95 4.95a.5.5 0 0 1 0 .707c-.48.48-1.072.588-1.503.588-.177 0-.335-.018-.46-.039l-3.134 3.134a5.927 5.927 0 0 1 .16 1.013c.046.702-.032 1.687-.72 2.375a.5.5 0 0 1-.707 0l-2.829-2.828-3.182 3.182c-.195.195-1.219.902-1.414.707-.195-.195.512-1.22.707-1.414l3.182-3.182-2.828-2.829a.5.5 0 0 1 0-.707c.688-.688 1.673-.767 2.375-.72a5.922 5.922 0 0 1 1.013.16l3.134-3.133a2.772 2.772 0 0 1-.04-.461c0-.43.108-1.022.589-1.503a.5.5 0 0 1 .353-.146z" />
                        </svg>
                        <p className="font-bold">Publicación destacada</p>
                    </Grid>
                    <Grid className="flex items-start gap-3">
                        <Avatar src="../../../assets/images/compusoluciones.png" className="h-12 w-12" />
                        <Grid className="w-5/6">
                            <Grid className="flex gap-2 items-start">
                                <Grid className="md:flex sm:flex-col md:gap-1 items-center">
                                    <p className="font-semibold">CompuSoluciones</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dot" viewBox="0 0 16 16">
                                        <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                                    </svg>
                                    <p> Mayo 2023 - Presente</p>
                                </Grid>
                            </Grid>
                            <p className="font-bold text-2xl">Desarrollador Web</p>
                            <p>Responsabilidades</p>
                            <ul className="list-disc pl-6">
                                <li>Soporte a sistemas de la empresa</li>
                                <li>Desarrollo de mejoras a sistemas ya implementados</li>
                            </ul>
                        </Grid>
                    </Grid>
                </CardBody>
            </Card>
            <Card className="mt-3">
                <CardBody>
                    <Grid className="flex items-start gap-3">
                        <Avatar src="../../../assets/images/patronLogo.png" className="h-12 w-12 object-cover" />
                        <Grid className="w-5/6">
                            <Grid className="flex gap-2 items-start">
                                <Grid className="md:flex sm:flex-col md:gap-1 items-center">
                                    <p className="font-semibold">Patrón Spirits de S.A de C.V</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dot" viewBox="0 0 16 16">
                                        <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                                    </svg>
                                    <p> Agosto 2022 - Febrero 2023 </p>
                                </Grid>
                            </Grid>
                            <p className="font-bold text-2xl">Soporte IT</p>
                            <p>Responsabilidades</p>
                            <ul className="list-disc pl-6">
                                <li>Administración de personal en la empresa</li>
                                <li>Mantenimiento a equipos de cómputo</li>
                                <li>Desarrollo de herramientas web para el departamento de IT</li>
                                <li>Configuración de equipos de cómputo</li>
                                <li>Asistencia técnica al personal de la empresa</li>
                            </ul>
                        </Grid>
                    </Grid>
                </CardBody>
            </Card>
            <Card className="mt-3">
                <CardBody>
                    <Grid className="flex items-start gap-3">
                        <Avatar src="../../../assets/images/itoLogo.jpeg" className="h-12 w-12" />
                        <Grid className="w-5/6">
                            <Grid className="flex gap-2 items-start">
                                <Grid className="md:flex sm:flex-col md:gap-1 items-center">
                                    <p className="font-semibold">Instituto Tecnológico de Ocotlán</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dot" viewBox="0 0 16 16">
                                        <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                                    </svg>
                                    <p> Septiembre 2021 - Febrero 2022 </p>
                                </Grid>
                            </Grid>
                            <p className="font-bold text-2xl">Desarrollo y admnistrativo</p>
                            <p>Responsabilidades</p>
                            <ul className="list-disc pl-6">
                                <li>Control administrativo sobre los arcivos correspondientes a la academia de Sistemas</li>
                                <li>Desarrollo de página web de la academia de Sistemas</li>
                            </ul>
                        </Grid>
                    </Grid>
                </CardBody>
            </Card>
        </Grid>
    )
}
