import { useRef } from "react"
import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, useDisclosure } from "@chakra-ui/react"
import { useAuth, useProjects } from "../hooks"
import { Link } from "react-router-dom"

export const DrawerSide = () => {
    const { onClose } = useDisclosure()
    const btnRef = useRef(null)
    const { drawerOpen, setDrawerOpen } = useProjects();
    const { user } = useAuth()

    return (
        <div className="sm:block md:block lg:hidden">
            <Drawer
                isOpen={drawerOpen}
                placement="left"
                onClose={() => {
                    onClose()
                    setDrawerOpen(false)
                }}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Hi {user?.name}</DrawerHeader>

                    <DrawerBody>
                        <Link to="create-project" >
                            <Button
                                variant='solid'
                                colorScheme='blue'
                                className="w-full mt-4">
                                New Project
                            </Button>
                        </Link>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </div>
    )
}