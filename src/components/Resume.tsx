import AnimateOnMount from './AnimateOnMount'

const Resume = () => {
  return (
    <AnimateOnMount delay={0}>
    <div>
        <h1 className='text-[18px] sm:text-[20px] tracking-tighter mb-4'>Resume</h1>
      <iframe
        src="Anuj_katre_resume_1.pdf"
        className="w-full h-[70vh] sm:h-[80vh]"
        title="Resume"
      />
    </div>
    </AnimateOnMount>
  )
}

export default Resume
