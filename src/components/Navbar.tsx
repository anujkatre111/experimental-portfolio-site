import { Link } from 'react-router-dom';

const Navbar = () => {
  // Function to play click sound using Web Audio API
  const playClickSound = () => {
    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      
      // Create a click sound - short, sharp, high frequency
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      // Connect oscillator to gain node
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      // Set frequency for click sound (high frequency for sharpness)
      oscillator.frequency.value = 1200;
      
      // Use square wave for sharper click sound
      oscillator.type = 'square';
      
      // Create envelope for click sound (instant attack, very quick decay)
      const now = audioContext.currentTime;
      gainNode.gain.setValueAtTime(0, now);
      gainNode.gain.linearRampToValueAtTime(0.2, now + 0.001); // Instant attack
      gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.05); // Very quick decay
      
      // Start and stop oscillator (very short duration)
      oscillator.start(now);
      oscillator.stop(now + 0.05);
    } catch (error) {
      // Fallback: silent fail if audio context not available
      console.log('Audio not available');
    }
  };

  return (
    <div className='flex justify-end mt-[48px] sm:mt-[64px]'>
      <div className='flex flex-row items-center gap-[12px] sm:gap-[16px] hover:cursor-pointer'>
        <Link to={"/"} onClick={playClickSound}>
          <h1 className='text-[12px] sm:text-[14px] tracking-tighter font-light 
          text-gray-700 hover:underline hover:text-red-400 transition-all duration-300'>anuj</h1>
        </Link>
        <Link to="/blogs" onClick={playClickSound}>
            <h1 className='text-[12px] sm:text-[14px] tracking-tighter font-light text-gray-700 hover:underline hover:text-red-400 transition-all duration-300'>thoughts</h1>
        </Link>
        {/* <Link to={"/crafts"} onClick={playClickSound}>
          <h1 className='text-[12px] sm:text-[14px] tracking-tighter font-light text-gray-700 hover:underline'>crafts</h1>
        </Link> */}
        <Link to={"/anuj-gpt"} onClick={playClickSound}>
          <h1 className='text-[12px] sm:text-[14px] tracking-tighter font-light text-gray-700 hover:underline hover:text-red-400 transition-all duration-300'>anuj gpt</h1>
        </Link>
      </div>
    </div>
  )
}

export default Navbar;
