import { useState, useRef } from 'react';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Function to toggle music playback
  const toggleMusic = () => {
    if (!audioRef.current) {
      // Create audio element if it doesn't exist
      audioRef.current = new Audio('/images/music.mp3'); // Replace with your song path
      audioRef.current.loop = true;
      audioRef.current.volume = 0.1; // 50% volume
      
      // Handle audio events
      audioRef.current.addEventListener('ended', () => setIsPlaying(false));
      audioRef.current.addEventListener('play', () => setIsPlaying(true));
      audioRef.current.addEventListener('pause', () => setIsPlaying(false));
    }

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch((error) => {
        console.log('Error playing audio:', error);
        // If audio file doesn't exist, show a message
        alert('Please add your song file to /public/music/song.mp3');
      });
      setIsPlaying(true);
    }
  };

  return (
    <button
      onClick={toggleMusic}
      className='fixed top-3 right-3 sm:top-4 sm:right-4 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 text-gray-700 hover:text-red-400 transition-colors duration-300 z-50 animate-fade-in-up'
      style={{ animationDelay: '200ms' }}
      aria-label={isPlaying ? 'Pause music' : 'Play music'}
    >
      {isPlaying ? (
        // Pause icon
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" className="sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="6" y="4" width="4" height="16"></rect>
          <rect x="14" y="4" width="4" height="16"></rect>
        </svg>
      ) : (
        // Play icon
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" className="sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="5 3 19 12 5 21 5 3"></polygon>
        </svg>
      )}
    </button>
  );
};

export default MusicPlayer;
