import { Button } from '@nextui-org/react'
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { Home, Contacto, Proyectos, Experiencia, Briefcase } from './Iconos'

const Opciones = [{ Nombre: "Inicio", Icon: "home", Url: "/*" }, { Nombre: "Proyectos", Icon: "proyects", Url: "/Proyectos" }, { Nombre: "Experiencia Laboral", Icon: "user", Url: "/Experiencia" }, { Nombre: "Contacto", Icon: "contact", Url: "/Contacto" }]

export const Sidebar = () => {

    const [themeMode, setThemeMode] = useState(false);
    const { setTheme } = useTheme();

    useEffect(() => {
        themeMode ? setTheme('dark') : setTheme('light');
    }, [themeMode])

    return (
        <div className='hidden  md:flex md:flex-col w-[25%] h-[95%] pt-2 justify-between items-center fixed left-[5%]'>
            <div className="mt-4">
                <Briefcase className="ml-1 w-[32px] h-[32px]"></Briefcase>
                <div className='w-[230px] mt-2'>
                    <Link to='/*'>
                        <div className='flex gap-2 items-center'>
                            <Home className="w-[42px] h-[42px]" />
                            <p>Inicio</p>
                        </div>
                    </Link>
                    <Link to='/Proyectos'>
                        <div className='flex gap-2 items-center'>
                            <Proyectos className="w-[42px] h-[42px]" />
                            <p>Proyectos</p>
                        </div>
                    </Link>
                    <Link to='/Experiencia'>
                        <div className='flex gap-2 items-center'>
                            <Experiencia className="w-[42px] h-[42px]" />
                            <p>Experiencia laboral</p>
                        </div>
                    </Link>
                    <Link to='/Contacto'>
                        <div className='flex gap-2 items-center'>
                            <Contacto className="w-[42px] h-[42px]" />
                            <p>Contacto</p>
                        </div>
                    </Link>
                </div>
            </div>

            <div className='w-[230px]'>
                <Button isIconOnly variant="flat" className="rounded-full" onClick={() => setThemeMode(!themeMode)}>
                    {
                        themeMode
                            ?
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-sun-fill" viewBox="0 0 16 16">
                                <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
                            </svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-moon-fill" viewBox="0 0 16 16">
                                <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
                            </svg>
                    }
                </Button>
            </div>

        </div>
    )
}
