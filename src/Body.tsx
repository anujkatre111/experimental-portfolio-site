
import Navbar from './components/Navbar'
import MusicPlayer from './components/MusicPlayer'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div>
      <MusicPlayer />
      <div className='bg-white w-screen min-h-screen mx-auto flex justify-center px-4 sm:px-6 md:px-8'>
        <div className='w-full max-w-[500px] flex flex-col'>
          <Navbar/>
          <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default Body
