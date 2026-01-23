
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div>
      <div className='bg-white w-screen h-screen mx-auto flex justify-center'>
    <div className='w-[500px] flex flex-col'>
        <Navbar/>
        <Outlet/>
      </div>
    </div>
    </div>
  )
}

export default Body
