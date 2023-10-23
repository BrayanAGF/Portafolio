import { Grid } from "@mui/material"
import { Avatar, Button, Card, CardBody, CardFooter, Image } from "@nextui-org/react"
import { useState } from "react"

export const Inicio = () => {

    const [MeEncanta, setMeEncanta] = useState(false);

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
                        <Avatar src="./assets/images/Perfil2.jpg" className="h-12 w-12"/>
                        <Grid className="w-5/6">
                            <Grid className="flex gap-2 items-start">
                                <Grid className="flex sm:gap-0 md:gap-1 items-center">
                                    <p className="font-semibold">Brayan Alberto</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dot" viewBox="0 0 16 16">
                                        <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                                    </svg>
                                    <p>16 Octubre 2023</p>
                                </Grid>
                            </Grid>
                            <p className="font-bold text-2xl">¡Bienvenido!</p>
                            <p>Esta sección es de mis favoritas en mi portafolio ya que aquí puedes encontrar información acerca de mí sobre mi experiencia laboral y sobre mis gustos o hobbies personales. Espero te agrade el recorrido por esta sección!!!</p>
                            <Grid className="flex justify-center">
                                <Image
                                    className="h-96 w-96 object-cover"
                                    src="./assets/images/Perfil.jpg"
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </CardBody>
                <CardFooter className="flex flex-row-reverse gap-1 items-end">
                   
                        <Button isIconOnly variant="flat" className={`${MeEncanta && 'text-[red]'} transition-all duration-300`} onClick={() => setMeEncanta(!MeEncanta)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                            </svg>
                        </Button>
                        {/* <Button isIconOnly variant="flat">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16">
                                <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                                <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                            </svg>
                        </Button> */}
         
                </CardFooter>
            </Card>

        </Grid>
    )
}
