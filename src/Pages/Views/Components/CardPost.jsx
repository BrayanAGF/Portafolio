import { Avatar, Button, Card, CardBody, CardFooter, Image } from "@nextui-org/react"
import { useState } from "react";
export const CardPost = ({ ImgPURL, Nombre, Titulo, Contenido, Fecha, isPD, isLike, css }) => {

    const [MeEncanta, setMeEncanta] = useState(false);

    return (
        <Card className={`shadow-none border-1 rounded-none border-x-0 border-b-0 ${css}`}>
            <CardBody>
                {
                    isPD &&
                    <div className="flex items-center gap-3 mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pin-angle-fill" viewBox="0 0 16 16">
                            <path d="M9.828.722a.5.5 0 0 1 .354.146l4.95 4.95a.5.5 0 0 1 0 .707c-.48.48-1.072.588-1.503.588-.177 0-.335-.018-.46-.039l-3.134 3.134a5.927 5.927 0 0 1 .16 1.013c.046.702-.032 1.687-.72 2.375a.5.5 0 0 1-.707 0l-2.829-2.828-3.182 3.182c-.195.195-1.219.902-1.414.707-.195-.195.512-1.22.707-1.414l3.182-3.182-2.828-2.829a.5.5 0 0 1 0-.707c.688-.688 1.673-.767 2.375-.72a5.922 5.922 0 0 1 1.013.16l3.134-3.133a2.772 2.772 0 0 1-.04-.461c0-.43.108-1.022.589-1.503a.5.5 0 0 1 .353-.146z" />
                        </svg>
                        <p className="font-bold">Publicación destacada</p>
                    </div>
                }
                <div className="flex items-start gap-3">
                    <Avatar src={ImgPURL} className="h-12 w-12" />
                    <div className="w-5/6">
                        <div className="flex gap-2 items-start">
                            <div className="flex sm:gap-0 md:gap-1 items-center">
                                <p className="font-semibold">{Nombre}</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dot" viewBox="0 0 16 16">
                                    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                                </svg>
                                <p>{Fecha}</p>
                            </div>
                        </div>
                        <p className="font-bold text-2xl">{Titulo}</p>
                        {Contenido}
                    </div>
                </div>
            </CardBody>
            {
                isLike &&
                <CardFooter className="flex flex-row-reverse gap-1 items-end">
                    <Button isIconOnly variant="flat" className={`${MeEncanta && 'text-[red]'} transition-all duration-300`} onClick={() => setMeEncanta(!MeEncanta)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                        </svg>
                    </Button>
                </CardFooter>
            }
        </Card>
    )
}
