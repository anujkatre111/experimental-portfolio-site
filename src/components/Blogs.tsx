
import Blogss from './Blogss'
import first from '../Blogs/first.json'
import { Link } from 'react-router-dom'

const Blogs = () => {
  return (
    <div className='mt-[64px]'>
      <h1 className='text-[32px] tracking-tighter'>Blogs</h1>
      {first.map((blog,index)=>(
        <Link to={`/blogs/${blog.id}`}  key={index}>
        <Blogss name={blog.id} description={blog.title}/>
        </Link>
      ))}
      
    </div>
  )
} 

export default Blogs
