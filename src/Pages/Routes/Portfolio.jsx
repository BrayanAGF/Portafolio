import { Route, Routes } from "react-router-dom"
import { Contacto, ExperienciaLaboral, Home, Proyectos } from "../Views"
import { Layout } from "../Layout/Layout"


export const Portfolio = () => {
    return (
        <Layout>
            <Routes>
                <Route path="/*" element={<Home />} />
                <Route path="/Proyectos" element={<Proyectos />} />
                <Route path="/Experiencia" element={<ExperienciaLaboral />} />
                <Route path="/Contacto" element={<Contacto />} />
            </Routes>
        </Layout>
    )
}
