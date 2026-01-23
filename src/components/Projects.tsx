
type props = {
  name: string;
  description: string;
}

const Project = ({name,description}:props) => {
  return (
    <div className='w-[500px] py-[8px] hover:px-[8px] flex flex-col gap-[4px] rounded-sm hover:bg-green-50 my-[4px] hover:cursor-pointer transition-all ease-in-out hover:scale-105 group'>
          <div className='flex justify-between'>
            <h1 className='text-[14px] font-light'>{name}</h1>
            
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="text-red-600 lucide lucide-move-up-right-icon lucide-move-up-right opacity-0 group-hover:opacity-100 transition-opacity duration-300"><path d="M13 5H19V11"/><path d="M19 5L5 19"/></svg>
           
          </div>
            <h1 className='text-[12px] font-light'>{description}</h1>
      <div className='flex flex-row just'>
      </div>
    </div>
  )
}

export default Project
