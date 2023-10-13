import { Grid } from "@mui/material"
import { Button, Card, CardBody, CardFooter, CardHeader, Chip, Image, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react"

export const Proyectos = () => {

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <Grid sx={{ display: 'grid', placeItems: 'center' }}>
      <Grid width={{ md: '60vw' }}>
        <h1 className="text-5xl Titulo font-bold">Proyectos</h1>
        <Grid className="grid grid-rows-3 grid-flow-col gap-4 my-5">

          <Card isFooterBlurred className=" col-span-2 row-span-auto">
            <Image
              removeWrapper
              alt="Card example background"
              className="z-0 w-full h-full scale-100  object-cover"
              src="../../../assets/images/tasks.png"
            />
            <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
              <div>
                <p className="text-black text-base Titulo">Aplicación para realizar tableros de tareas.</p>
              </div>
              <Button className="text-tiny" color="primary" radius="full" size="sm" onClick={onOpen}>
                Ver
              </Button>
            </CardFooter>
          </Card>

          <Card isFooterBlurred className="col-span-2 row-auto">
            <Image
              removeWrapper
              alt="Card example background"
              className="z-0 w-full h-full scale-100 object-cover"
              src="../../../assets/images/calendar.png"
            />
            <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
              <div>
                <p className="text-black text-base Titulo">Aplicación para organizar eventos inspirada en el calendario de Teams.</p>
              </div>
              <Button className="text-tiny" color="primary" radius="full" size="sm">
                Ver
              </Button>
            </CardFooter>
          </Card>

          <Card className="row-span-2 col-span-1" isFooterBlurred>
            <Image
              src="../../../assets/images/selecta.png"
            />
            <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
              <div>
                <p className="text-black text-base Titulo">Tienda de ropa en linea.</p>
              </div>
              <Button className="text-tiny" color="primary" radius="full" size="sm">
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
              <ModalHeader className="flex flex-col gap-1">Proyecto</ModalHeader>
              <ModalBody>
                <Image
                  removeWrapper
                  alt="Card example background"
                  className="z-0 w-full h-2/5 scale-100 object-cover"
                  src="../../../assets/images/calendar.png"
                />
                <p className="Titulo text-2xl">Acerca de</p>
                <p className="Titulo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae reprehenderit, voluptate obcaecati, sint qui natus ipsam vero laudantium soluta totam in modi libero perferendis. Quod quibusdam deleniti ex alias a!</p>
                <p className="Titulo text-2xl">Tecnologías usadas</p>
                <Grid className="flex gap-2">
                  <Chip variant="flat" color="primary">React</Chip>
                  <Chip variant="flat" color="warning">JavaScript</Chip>
                  <Chip variant="flat" color="success">MongoDB</Chip>
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
