import { useState, useEffect, useRef } from "react";
import Sprite from "../../../../shared/ui/Sprite/Sprite";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const Microphone = ({ setText, setDisabled }) => {
  const [intervalBool, setIntervalBool] = useState(false);
  const [waveSurfer, setWaveSurfer] = useState(null);
  const timerRef = useRef(null);
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  useEffect(() => {
    if (listening) {
      let count = 0;
      timerRef.current = setInterval(() => {
        count++;

        const minutes = Math.floor(count / 60);
        const seconds = count % 60;
        setText(`${minutes}:${seconds < 10 ? "0" + seconds : seconds}`);
        if (!listening) {
          clearInterval(timerRef.current);
        }
      }, 1000);
      setDisabled(true)
    } else if (timerRef.current !== null) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, [listening]);

  useEffect(() => {
    if (!listening) {
      setDisabled(false)
      setText(transcript);
    }
  }, [transcript, listening]);

  return (
    <>
      {listening ? (
        <button
          className="form__button microphone"
          type="button"
          onClick={() => SpeechRecognition.stopListening()}
        >
          <Sprite icon="microphone" width={20} height={20} stroke="red" />
        </button>
      ) : (
        <button
          className="form__button microphone"
          type="button"
          onClick={() => SpeechRecognition.startListening({ continuous: true })}
        >
          <Sprite icon="microphone" width={20} height={20} stroke="#919191" />
        </button>
      )}
    </>
  );
};

export default Microphone;
