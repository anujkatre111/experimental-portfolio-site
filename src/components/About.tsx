
import Header from './Header'
import Project from './Projects'

const About = () => {
  return (
    <div className='pb-[100px]'>
      <Header/>
        <h1 className='text-[16px] font-medium tracking-tighter  mb-[8px] text-stone-700'> projects</h1>
        <div className='flex flex-col gap-[12px]'>
          <Project name='AI Learning Assistant' description='Learning assistant made using Next.js and Gemini API' image='src/assets/images/Einstein.jpg'/>
          
          <a href="https://typewriter-one-kappa.vercel.app/" target="_blank" rel="noopener noreferrer">
            <Project name='Typewriter' description='A simple aesthetic typewriter made using Next.js' image='src/assets/images/typewriter.jpg'/>
          </a>
        </div>
    </div>
  );
};

export default About;
