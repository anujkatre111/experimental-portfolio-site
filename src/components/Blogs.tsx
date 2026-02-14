
import Blogss from './Blogss'
import first from '../Blogs/first.json'
import { Link } from 'react-router-dom'
import AnimateOnMount from './AnimateOnMount'

const Blogs = () => {
  return (
    <div className='mt-[48px] sm:mt-[64px]'>
      <AnimateOnMount delay={0}>
        <h1 className='text-[24px] sm:text-[32px] tracking-tighter'>Crafts</h1>
      </AnimateOnMount>
      <div className='flex flex-col gap-[10px]'>
        {first.map((blog, index)=>(
          <AnimateOnMount key={blog.id} delay={100 + index * 80}>
            <Link to={`/blogs/${blog.id}`}>
              <Blogss description={blog.title}/>
            </Link>
          </AnimateOnMount>
        ))}
      </div>
    </div>
  )
} 

export default Blogs
