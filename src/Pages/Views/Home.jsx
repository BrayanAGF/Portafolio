import { Grid } from "@mui/material"

export const Home = () => {
  return (
    <Grid className="flex-col gap-3">
      <Grid className="md:flex sm:flex-col justify-between" height='80vh'>
        <Grid position='relative' top={{xs: 30, md: 100}} left={{xs: 0, md: 100}} width={{xs: '100%', md: 400}} className="animate__animated animate__bounce z-30">
          <p className="Titulo text-4xl px-5">Hola mi nombre es Brayan Alberto Godinez Flores y soy un Desarrollador Web al que le encanta los proyectos visuales y todo lo relacionado con el Front End</p>
        </Grid>
        <Grid className="h-full w-full" position='relative'>
          <iframe src='https://my.spline.design/interactivespherescopy-c3c9b1e90503307749b4751e874a63e2/' frameborder='0' width='100%' height='100%'></iframe>
         {/*  <Grid bgcolor='#FFF9FC' width={180} height={40} position='absolute' bottom={18} right={20}></Grid> */}
        </Grid>
      </Grid>

    </Grid>
  )
}
