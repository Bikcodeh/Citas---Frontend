import { Input, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header className=" bg-white border-b py-4">
      <div className="flex flex-col lg:flex-row lg:justify-between items-center mx-4">
        <h2 className="text-4xl my-2 text-sky-600 font-black">Uptask</h2>
        <div className='w-96'>
          <Input placeholder='Search projects' />
        </div>
        <div className='flex flex-col lg:flex-row items-center gap-4'>
          <Link to="/projects"
            className='font-bold uppercase'>Projects</Link>
          <Button colorScheme='blue'>Logout</Button>
        </div>

      </div>
    </header>
  )
}
