import { useCallback, useEffect, useState } from 'react';
import { Howl } from 'howler';

function useAudio(audioFile) {
  const [audioElement, setAudioElement] = useState(null);

  useEffect(() => {
    const newAudioElement = new Howl({ src: [audioFile] });
    setAudioElement(newAudioElement);
  }, [audioFile]);

  const playAudio = useCallback(() => {
    if (!audioElement) return;
    if (audioElement.playing()) {
      audioElement.stop();
    }
    audioElement.play();
  }, [audioElement]);

  return [audioElement, playAudio];
}
export default useAudio;
