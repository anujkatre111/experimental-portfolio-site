
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import MusicPlayer from './components/MusicPlayer'
import { Outlet } from 'react-router-dom'
import { unlockAudio } from './utils/audioContext'

const Body = () => {
  const [hasEntered, setHasEntered] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  const handleEnter = () => {
    if (isExiting) return;
    unlockAudio();
    setIsExiting(true);
  };

  const handleOverlayAnimationEnd = () => {
    if (isExiting) setHasEntered(true);
  };

  // Fallback: unlock on any click if user skips the overlay
  useEffect(() => {
    const unlock = () => unlockAudio();
    document.addEventListener('pointerdown', unlock, { capture: true, once: true });
    document.addEventListener('touchstart', unlock, { capture: true, once: true });
    document.addEventListener('click', unlock, { capture: true, once: true });
    return () => {
      document.removeEventListener('pointerdown', unlock, { capture: true });
      document.removeEventListener('touchstart', unlock, { capture: true });
      document.removeEventListener('click', unlock, { capture: true });
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Initial "Click to enter" overlay - animated exit */}
      {!hasEntered && (
        <div
          onClick={handleEnter}
          onPointerDown={handleEnter}
          onTouchStart={handleEnter}
          onAnimationEnd={handleOverlayAnimationEnd}
          className={`fixed inset-0 z-[100] flex items-center justify-center bg-white cursor-pointer transition-opacity duration-500 ${
            isExiting ? 'animate-fade-out' : ''
          }`}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && handleEnter()}
          aria-label="Click to enter"
        >
          <p
            className={`text-[14px] font-light text-gray-600 tracking-tight transition-opacity duration-300 ${
              isExiting ? 'opacity-0' : 'opacity-100'
            }`}
            style={{ transitionDuration: isExiting ? '0.2s' : '0.3s' }}
          >
            Click anywhere to enter
          </p>
        </div>
      )}
      <div
        className={`min-h-screen ${hasEntered ? 'animate-fade-in-up' : 'opacity-0'}`}
      >
        <MusicPlayer />
        <div className='bg-white w-screen min-h-screen mx-auto flex justify-center px-4 sm:px-6 md:px-8'>
          <div className='w-full max-w-[500px] flex flex-col'>
            <Navbar/>
            <Outlet/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Body
