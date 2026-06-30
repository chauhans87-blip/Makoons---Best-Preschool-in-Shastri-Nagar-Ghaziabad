import { Music, VolumeX } from 'lucide-react';
import { useState, useRef } from 'react';

export default function FloatingActions() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsPlaying(true);
            })
            .catch((error) => {
              console.error("Audio playback failed:", error);
              setIsPlaying(false);
            });
        } else {
          setIsPlaying(true);
        }
      }
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      <audio ref={audioRef} loop preload="auto">
        <source src="https://cdn.pixabay.com/audio/2022/05/27/audio_1808fbf07a.mp3" type="audio/mpeg" />
        <source src="https://archive.org/download/MoonlightSonata_755/Beethoven-MoonlightSonata.mp3" type="audio/mpeg" />
      </audio>
      <button 
        onClick={toggleMusic}
        className="w-14 h-14 bg-primary-yellow text-primary-blue rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform relative group"
      >
        {isPlaying ? <Music size={24} /> : <VolumeX size={24} />}
        <span className="absolute right-full mr-4 bg-gray-900 text-white text-xs px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          {isPlaying ? "Pause Music" : "Play Peaceful Music"}
        </span>
      </button>
    </div>
  );
}
