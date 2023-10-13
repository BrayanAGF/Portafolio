import { Route, Routes } from "react-router-dom"
import { Home, Proyectos } from "../Views"
import { Layout } from "../Layout/Layout"


export const Portfolio = () => {
    return (
        <Layout>
            <Routes>
                <Route path="/*" element={<Home />} />
                <Route path="/Proyectos" element={<Proyectos />} />
            </Routes>
        </Layout>
    )
}
