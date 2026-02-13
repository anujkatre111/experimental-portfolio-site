
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex justify-end mt-[64px]'>
      <div className='flex flex-row gap-[16px] hover:cursor-pointer'>
        <Link to={"/"}>
          <h1 className='text-[14px] tracking-tighter font-light 
          text-gray-700 hover:underline hover:text-red-400 transition-all duration-300'>anuj</h1>
        </Link>
        <Link to="/blogs">
            <h1 className='text-[14px] tracking-tighter font-light text-gray-700 hover:underline hover:text-red-400 transition-all duration-300'>thoughts</h1>
        </Link>
        {/* <Link to={"/crafts"}>
          <h1 className='text-[14px] tracking-tighter font-light text-gray-700 hover:underline'>crafts</h1>
        </Link> */}
        <Link to={"/anuj-gpt"}>
          <h1 className='text-[14px] tracking-tighter font-light text-gray-700 hover:underline hover:text-red-400 transition-all duration-300'>anuj gpt</h1>
        </Link>
      </div>
    </div>
  )
}

export default Navbar;
