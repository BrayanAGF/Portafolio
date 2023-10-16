import { Grid } from "@mui/material"
import { NavbarPortfolio } from "./Components/Navbar"

export const Layout = ({children}) => {
  return (
    <Grid minHeight='100vh' minWidth='100vw'>
       <NavbarPortfolio />
        {children}
    </Grid>
  )
}
