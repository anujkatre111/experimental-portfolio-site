
import Blogss from './Blogss'
import first from '../Blogs/first.json'
import { Link } from 'react-router-dom'

const Blogs = () => {
  return (
    <div className='mt-[48px] sm:mt-[64px]'>
      <h1 className='text-[24px] sm:text-[32px] tracking-tighter'>Crafts</h1>
      <div className='flex flex-col gap-[10px]'>
        {first.map((blog)=>(
          <Link to={`/blogs/${blog.id}`}  key={blog.id}>
          <Blogss description={blog.title}/>
          </Link>
        ))}
      </div>
      
    </div>
  )
} 

export default Blogs
