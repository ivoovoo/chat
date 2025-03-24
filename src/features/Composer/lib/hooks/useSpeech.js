import { useEffect, useRef } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { setText, setTextareaDisabled } from "../../model/composerSlice";
import { useDispatch } from "react-redux";

export const useSpeech = () => {
  const { transcript, listening, resetTranscript } = useSpeechRecognition();
  const timerRef = useRef();
  const dispatch = useDispatch();

  const startListening = () => {
    SpeechRecognition.startListening({ continuous: true });
  };

  const stopListening = () => {
    SpeechRecognition.stopListening();
  };

  useEffect(() => {
    if (listening) {
      resetTranscript();
      let count = 0;
      timerRef.current = setInterval(() => {
        count++;
        const minutes = Math.floor(count / 60);
        const seconds = count % 60;
        dispatch(
          setText(`${minutes}:${seconds < 10 ? "0" + seconds : seconds}`)
        );
        if (!listening) {
          clearInterval(timerRef.current);
        }
      }, 1000);
      dispatch(setTextareaDisabled(true));
    } else {
      clearInterval(timerRef.current);
      dispatch(setTextareaDisabled(false));
      dispatch(setText(transcript));
      timerRef.current = null;
    }
  }, [listening]);

  return { startListening, listening, stopListening };
};
