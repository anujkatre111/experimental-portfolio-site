// Shared AudioContext - must be resumed via user gesture (click) before hover sounds work

let audioContext: AudioContext | null = null;

export const getAudioContext = (): AudioContext | null => {
  if (typeof window === 'undefined') return null;
  
  if (!audioContext) {
    audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
  }
  
  return audioContext;
};

// Call this on first user click to unlock audio for hover sounds
export const unlockAudio = async (): Promise<void> => {
  const ctx = getAudioContext();
  if (ctx?.state === 'suspended') {
    await ctx.resume();
  }
};
