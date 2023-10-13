import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, NavbarMenuToggle, NavbarMenuItem, NavbarMenu } from "@nextui-org/react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const NavbarPortfolio = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = ["Proyectos", "Habilidades", "Sobre mí"];

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} className="py-1">
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand className="sm:flex justify-center">
                    <img src="../../../assets/images/Perfil2.jpg" className="rounded-full w-14 h-14 object-cover mr-2" />
                    <Link to='/*'>
                        <p className="font-bold text-inherit mr-2 Titulo text-2xl">Brayan Alberto</p>
                    </Link>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#80B3FF" className="bi bi-patch-check-fill" viewBox="0 0 16 16">
                        <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                    </svg>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="end">
                <NavbarItem>
                    <Link to='/Proyectos' className="Titulo">
                        Proyectos
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="#" aria-current="page" color="foreground" className="Titulo">
                        Habilidades
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#" className="Titulo">
                        Sobre mí
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-moon-fill" viewBox="0 0 16 16">
                        <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
                    </svg>
                </NavbarItem>
            </NavbarContent>

            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            color="foreground"
                            className="w-full Titulo"
                            href="#"
                            size="lg"
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    )
}
