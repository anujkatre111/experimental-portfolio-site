
import { getAudioContext } from '../utils/audioContext';

type props = {
  name: string;
  description: string;
  image: string;
}

const Project = ({name,description,image}:props) => {
  // Magical sparkle sound on hover (requires user to have clicked navbar first - browser policy)
  const playMagicalSound = () => {
    try {
      const audioContext = getAudioContext();
      if (!audioContext || audioContext.state === 'suspended') return; // Audio not unlocked yet
      
      // Create ascending chime - magical sparkle effect
      const frequencies = [880, 1100, 1320]; // Ascending notes
      
      frequencies.forEach((freq, i) => {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.value = freq;
        oscillator.type = 'sine';
        
        const now = audioContext.currentTime + i * 0.08;
        gainNode.gain.setValueAtTime(0, now);
        gainNode.gain.linearRampToValueAtTime(0.15, now + 0.02);
        gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
        
        oscillator.start(now);
        oscillator.stop(now + 0.25);
      });
    } catch (error) {
      console.log('Audio not available');
    }
  };

  return (
    <div 
      className='w-full max-w-[500px] py-[8px] hover:px-[8px] flex flex-col gap-[4px] rounded-sm hover:bg-red-50 my-[4px] hover:cursor-pointer transition-all ease-in-out hover:scale-105 group'
      onMouseEnter={playMagicalSound}
    >
      <div className="flex w-full">
        <img src={image} className="w-[50px] h-[50px] object-cover rounded-sm mr-[10px]" />
            <div className="w-full">
              <div className='flex justify-between'>
                <h1 className='text-[14px] font-light'>{name}</h1>
        
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="text-red-600 lucide lucide-move-up-right-icon lucide-move-up-right opacity-0 group-hover:opacity-100 transition-opacity duration-300"><path d="M13 5H19V11"/><path d="M19 5L5 19"/></svg>
        
              </div>
                <h1 className='text-[12px] font-light text-gray-700'>{description}</h1>
                    <div className='flex flex-row just'>
                    </div>
            </div>
      </div>
    </div>
  )
}

export default Project
