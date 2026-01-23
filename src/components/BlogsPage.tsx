import { useParams } from 'react-router-dom'
import first from '../Blogs/first.json'

const BlogsPage = () => {
  const { id } = useParams()
  
  return (
    <div>
      {first.filter(blog=>blog.id === id).map((blog,index)=>(
        <div key={index} className='mt-[64px]'>
          <h1 className='text-[24px] tracking-tighter mb-4'>{blog.title}</h1>
          <h1 className='text-[16px] tracking-tighter' dangerouslySetInnerHTML={{ __html: blog.content }} />
        </div>
      ))}
    </div>
  )
}

export default BlogsPage