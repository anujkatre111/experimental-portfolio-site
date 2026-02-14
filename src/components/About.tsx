
import Header from './Header'
import Project from './Projects'
import AnimateOnMount from './AnimateOnMount'

const About = () => {
  return (
    <div className='pb-[60px] sm:pb-[100px]'>
      <AnimateOnMount delay={0}>
        <Header/>
      </AnimateOnMount>
      <AnimateOnMount delay={100}>
        <h1 className='text-[14px] sm:text-[16px] font-medium tracking-tighter mb-[8px] text-stone-700'> projects</h1>
      </AnimateOnMount>
      <div className='flex flex-col gap-[12px]'>
        <AnimateOnMount delay={150}>
          <Project name='AI Learning Assistant' description='Learning assistant made using Next.js and Gemini API' image='/images/Einstein.jpg'/>
        </AnimateOnMount>
        <AnimateOnMount delay={200}>
          <Project name='API Latency Tracker' description='API Latency Tracker made using Next.js and Tailwind CSS' image='/images/1770991696028.png'/>
        </AnimateOnMount>
        <AnimateOnMount delay={250}>
          <Project name='Meet AI' description='AI powered meeting assistant made using Next.js and Tailwind CSS' image='/images/MeetAI.png'/>
        </AnimateOnMount>
        <AnimateOnMount delay={300}>
          <a href="https://typewriter-one-kappa.vercel.app/" target="_blank" rel="noopener noreferrer">
            <Project name='Typewriter' description='A simple aesthetic typewriter made using Next.js' image='/images/typewriter.jpg'/>
          </a>
        </AnimateOnMount>
      </div>
    </div>
  );
};

export default About;
