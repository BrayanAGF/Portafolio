import { Grid } from "@mui/material"
import { Proyectos, Inicio, ExperienciaLaboral, Contacto } from "./"
import { Avatar, Card, CardBody, Tab, Tabs } from "@nextui-org/react"

export const Home = () => {
  return (
    <Grid sx={{ display: "grid", placeItems: "center" }}>
      <Grid width={{xs: '98vw', md: '60vw' }}>
        <iframe src='https://my.spline.design/interactivespherescopy-c3c9b1e90503307749b4751e874a63e2/' frameborder='0' width='100%' height='250px' 
        className="rounded-lg"></iframe>
        <Avatar src="../../../assets/images/Perfil2.jpg" className="h-32 w-32 relative bottom-16 left-8" />
        <Grid className=" relative bottom-14 md:left-8 sm:left-0 sm:w-11/12">
          <Grid className="flex items-center">
            <p className="font-bold text-inherit mr-2 Titulo text-4xl">Brayan Alberto</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#80B3FF" className="bi bi-patch-check-fill" viewBox="0 0 16 16">
              <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
            </svg>
          </Grid>
          <p>Desarrollador Web</p>
          <Grid className="flex gap-3 w-auto">
            <Grid className="flex gap-2 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-backpack4-fill" viewBox="0 0 16 16">
                <path d="M8 0a2 2 0 0 0-2 2H3.5a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h4v.5a.5.5 0 0 0 1 0V7h4a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H10a2 2 0 0 0-2-2Zm1 2a1 1 0 0 0-2 0h2Zm-4 9v2h6v-2h-1v.5a.5.5 0 0 1-1 0V11H5Z" />
                <path d="M14 7.599A2.986 2.986 0 0 1 12.5 8H9.415a1.5 1.5 0 0 1-2.83 0H3.5A2.986 2.986 0 0 1 2 7.599V14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7.599ZM4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-3Z" />
              </svg>
              <p>CompuSoluciones</p>
            </Grid>
            <Grid className="flex gap-2 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cake-fill" viewBox="0 0 16 16">
                <path d="m7.399.804.595-.792.598.79A.747.747 0 0 1 8.5 1.806V4H11a2 2 0 0 1 2 2v3h1a2 2 0 0 1 2 2v4a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1v-4a2 2 0 0 1 2-2h1V6a2 2 0 0 1 2-2h2.5V1.813a.747.747 0 0 1-.101-1.01ZM12 6.414a.911.911 0 0 1-.646-.268 1.914 1.914 0 0 0-2.708 0 .914.914 0 0 1-1.292 0 1.914 1.914 0 0 0-2.708 0A.911.911 0 0 1 4 6.414v1c.49 0 .98-.187 1.354-.56a.914.914 0 0 1 1.292 0c.748.747 1.96.747 2.708 0a.914.914 0 0 1 1.292 0c.374.373.864.56 1.354.56v-1Zm2.646 5.732a.914.914 0 0 1-1.293 0 1.914 1.914 0 0 0-2.707 0 .914.914 0 0 1-1.292 0 1.914 1.914 0 0 0-2.708 0 .914.914 0 0 1-1.292 0 1.914 1.914 0 0 0-2.708 0 .914.914 0 0 1-1.292 0L1 11.793v1.34c.737.452 1.715.36 2.354-.28a.914.914 0 0 1 1.292 0c.748.748 1.96.748 2.708 0a.914.914 0 0 1 1.292 0c.748.748 1.96.748 2.707 0a.914.914 0 0 1 1.293 0 1.915 1.915 0 0 0 2.354.28v-1.34l-.354.354Z" />
              </svg>
              <p>28 de Junio</p>
            </Grid>
          </Grid>



          <div className="flex flex-col mt-2">
            <Tabs aria-label="Options" className="justify-center" fullWidth
              variant="underlined"
              classNames={{
                tab: "Titulo text-xl",
              }}
            >

              <Tab key="Inicio" title="Inicio" className="w-full">
                <Inicio />
              </Tab>
              <Tab key="Proyectos" title="Proyectos" className="w-full">
                <div id="Proyectos">
                  <Proyectos />
                </div>
              </Tab>
              <Tab key="Experiencia" title="Experiencia Laboral">
                <ExperienciaLaboral />
              </Tab>

              <Tab key="Contacto" title="Contacto">
                <Contacto />
              </Tab>
            </Tabs>
          </div>



        </Grid>



      </Grid>
    </Grid>
  )
}
