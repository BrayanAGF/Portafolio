import { Route, Routes } from "react-router-dom"
import { Contacto, ExperienciaLaboral, Inicio, Proyectos } from "../Views"
import { Layout } from "../Layout/Layout"


export const Portfolio = () => {
    return (
        <Layout>
            <Routes>
                <Route path="/*" element={<Inicio />} />
                <Route path="/Proyectos" element={<Proyectos />} />
                <Route path="/Experiencia" element={<ExperienciaLaboral />} />
                <Route path="/Contacto" element={<Contacto />} />
            </Routes>
        </Layout>
    )
}
