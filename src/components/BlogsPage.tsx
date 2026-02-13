import { useParams } from 'react-router-dom'
import first from '../Blogs/first.json'

const BlogsPage = () => {
  const { id } = useParams()
  
  return (
    <div>
      {first
        .filter(blog => blog.id === id)
        .map((blog) => (
          <div key={blog.id} className='mt-[64px]'>
            <h1 className='text-[24px] tracking-tighter mb-6'>
              {blog.title}
            </h1>

            {blog.content.map((block: any, index: number) => {
              switch (block.type) {
                case "paragraph":
                  return (
                    <p key={index} className='mb-4 text-[16px] leading-relaxed'>
                      {block.value}
                    </p>
                  )

                case "heading":
                  return (
                    <h2 key={index} className='text-[20px] font-medium mt-6 mb-3'>
                      {block.value}
                    </h2>
                  )

                case "image":
                  return (
                    <div key={index} className='my-6'>
                      <img
                        src={block.value}
                        alt={block.caption || "blog image"}
                        className='h-[300px] rounded-md'
                      />
                      {block.caption && (
                        <p className='text-sm text-stone-500 mt-2'>
                          {block.caption}
                        </p>
                      )}
                    </div>
                  )

                default:
                  return null
              }
            })}
          </div>
        ))}
    </div>
  )
}

export default BlogsPage