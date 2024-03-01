import { Button } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { useAuth } from "../hooks"

export const Sidebar = () => {
  const { user } = useAuth()
  return (
    <aside className="flex mx-5 flex-col md:w-80 lg:w-96 py-10">
      <p className="text-xl font-bold">Hola {user?.name}</p>
      <Link to="create-project" >
        <Button
          variant='solid'
          colorScheme='blue'
          className="w-full mt-4">
          New Project
        </Button>
      </Link>
    </aside>
  )
}
