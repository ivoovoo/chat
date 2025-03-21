import { useEffect, useRef } from "react";
import Sprite from "../../../../shared/ui/Sprite/Sprite";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

function adjustHeight(el) {
  el.style.height = "auto";
  if (el.scrollHeight > 150) {
    el.style.height = "150px";
    el.style.overflowY = "scroll";
  } else {
    el.style.height = el.scrollHeight + "px";
    el.style.overflowY = "hidden";
  }
}

const Microphone = ({ setText, setDisabled }) => {
  const timerRef = useRef(null);
  const { transcript, listening, resetTranscript } = useSpeechRecognition();

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
      setDisabled(true);
    } else if (timerRef.current !== null) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, [listening]);

  useEffect(() => {
    if (!listening && transcript.length) {
      setDisabled(false);
      setText(transcript);
      resetTranscript();
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
