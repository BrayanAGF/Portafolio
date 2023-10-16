import { Grid } from "@mui/material"
import { Button, Card, CardBody, CardFooter, CardHeader, Chip, Image, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react"
import { useState } from "react";
import { Proyectos as Repositorio } from '../../Helpers'

export const Proyectos = () => {

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [modalInfo, setModalInfo] = useState({});

  const abrirModal = (IdProyecto) => {
    console.log(IdProyecto);
    setModalInfo(Repositorio[IdProyecto]);
    onOpen();
  }

  return (
    <Grid sx={{ display: 'grid', placeItems: 'center' }} >
      <Grid width={{ md: '60vw' }}>
       {/*  <h1 className="text-5xl Titulo font-bold">Proyectos</h1> */}
        <Grid className="grid sm:grid-rows-1 md:grid-rows-2 md:grid-flow-col sm:grid-flow-row gap-2 md:gap-4 my-5">

          <Card isFooterBlurred className=" col-span-2 row-span-auto">
            <Image
              removeWrapper
              alt="Card example background"
              className="z-0 w-full h-full scale-100  object-cover"
              src="./assets/images/tasks.png"
            />
            <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
              <div>
                <p className="text-black text-base Titulo">Aplicación para realizar tableros de tareas.</p>
              </div>
              <Button className="text-tiny" color="primary" radius="full" size="sm" onClick={() => abrirModal(1)}>
                Ver
              </Button>
            </CardFooter>
          </Card>

          <Card isFooterBlurred className="col-span-2 row-auto">
            <Image
              removeWrapper
              alt="Card example background"
              className="z-0 w-full h-full scale-100 object-cover"
              src="./assets/images/calendar.png"
            />
            <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
              <div>
                <p className="text-black text-base Titulo">Aplicación para organizar eventos inspirada en el calendario de Teams.</p>
              </div>
              <Button className="text-tiny" color="primary" radius="full" size="sm" onClick={() => abrirModal(0)}>
                Ver
              </Button>
            </CardFooter>
          </Card>

          <Card className="row-span-2 col-span-1" isFooterBlurred>
            <Image
              src="./assets/images/selecta.png"
            />
            <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
              <div>
                <p className="text-black text-base Titulo">Tienda de ropa en linea.</p>
              </div>
              <Button className="text-tiny" color="primary" radius="full" size="sm" onClick={() => abrirModal(2)}>
                Ver
              </Button>
            </CardFooter>
          </Card>


        </Grid>
      </Grid>

      <Modal
        isOpen={isOpen}
        placement='bottom'
        onOpenChange={onOpenChange}
      >
        <ModalContent className="absolute right-0 h-5/6 rounded-none">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{modalInfo.Nombre}</ModalHeader>
              <ModalBody className="overflow-auto">
                <Image
                  removeWrapper
                  alt="Card example background"
                  className="z-0 w-full h-2/5 scale-100 object-cover"
                  src={`./assets/images/${modalInfo.Img}`}
                />
                <p className="Titulo text-2xl">Acerca de</p>
                <p className="Titulo">{modalInfo.Descripcion}</p>
                <p className="Titulo text-2xl">Tecnologías usadas</p>
                <Grid className="flex gap-2">
                  {
                    modalInfo.Tecnologias && modalInfo.Tecnologias.map((value, index) => (
                      <Chip key={index} variant="flat" color={value.Color}>{value.Nombre}</Chip>
                    ))
                  }

                </Grid>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onPress={onClose}>
                  Ir a la aplicación
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </Grid>
  )
}
