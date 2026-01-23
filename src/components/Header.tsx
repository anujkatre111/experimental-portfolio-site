import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
        <div className='flex flex-col gap-[8px] mb-[32px] mt-[10px]'>
            <div className='h-[18px] w-[18px] bg-[linear-gradient(45deg,_#ffffff,_#DC2626)] ml-[4px] rounded-3xl'></div>
            <h1 className='name text-[54px] tracking-[-3px] text-red-600 font-regular mt-[8px]'>Anuj</h1>
            <div className='flex flex-col gap-[16px]'>
                <h1 className='text-[12px] font-light tracking-tight text-gray-600'>24-year-old <b className="text-gray-900">Software Engineer</b> from India. I build products that make life simpler and more meaningful. I care deeply about clean <b className="text-gray-900">code</b>, thoughtful <b className="text-gray-900">design</b>, and balance — a sharp mind for building, a calm mind for direction.</h1>
                <div className='flex items-center gap-[24px]'>
                    <div className='flex items-start gap-[6px]'> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-sticky-note-icon lucide-sticky-note hover:cursor-pointer"><path d="M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z"/><path d="M15 3v4a2 2 0 0 0 2 2h4"/></svg>
                        <Link to={'/resume'}>
                        <h1 className='text-[12px] leading-[1]  font-regular tracking-tighter text-gray-700 hover:cursor-pointer'>resume</h1>
                        </Link>
                    </div>
                    
                    <div className='flex items-start gap-[6px]' onClick={()=>window.open('https://github.com/anujkatre111')}> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-github-icon lucide-github hover:cursor-pointer"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                    <h1 className='text-[12px] leading-[1] font-regular tracking-tighter text-gray-700 hover:cursor-pointer'>github</h1>
                    </div>
                    <div className='flex items-start gap-[6px]' onClick={()=>window.open('https://x.com/anuj_katre88605')}> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-twitter-icon lucide-twitter hover:cursor-pointer"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                        <h1 className='text-[12px] leading-[1] font-regular tracking-tighter text-gray-700 hover:cursor-pointer'>twitter</h1>
                    </div>
                    <div className='flex items-start gap-[6px]' onClick={()=>window.open('https://www.linkedin.com/in/anuj-katre-b01376382/')}> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-linkedin-icon lucide-linkedin hover:cursor-pointer"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                        <h1 className='text-[12px] leading-[1] font-regular tracking-tighter text-gray-700 hover:cursor-pointer'>Linkedin</h1>
                    </div>
                    <div className='flex items-start gap-[6px]'> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-youtube-icon lucide-youtube hover:cursor-pointer"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
                        <h1 className='text-[12px] leading-[1] font-regular tracking-tighter text-gray-700 hover:cursor-pointer'>youtube</h1>
                    </div>
                </div>
            </div>

            
        </div>

    </div>
  )
}

export default Header;
