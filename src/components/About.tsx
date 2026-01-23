
import Header from './Header'
import Project from './Projects'

const About = () => {
  return (
    <div>
      <Header/>
        <h1 className='text-[16px] font-medium tracking-tighter  mb-[8px] text-stone-700'> projects</h1>
        <div className='flex flex-col gap-[12px]'>
          <Project name='Ecommerce application' description='this is an ecommerce application made out of react'/>
          <Project name='Ecommerce application' description='this is an ecommerce application made out of react'/>
          <Project name='Ecommerce application' description='this is an ecommerce application made out of react'/>
          
        </div>
    </div>
  )
}

export default About
