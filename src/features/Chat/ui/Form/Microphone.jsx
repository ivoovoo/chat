import { useState, useEffect, useRef } from "react";
import Sprite from "../../../../shared/ui/Sprite/Sprite";

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
const Microphone = ({ setText }) => {
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef(null);

  useEffect(() => {
    recognitionRef.current = new window.webkitSpeechRecognition();
    recognitionRef.current.continuous = false; // Чтобы не было дублирования
    recognitionRef.current.interimResults = false; // Отключает промежуточные результаты
    recognitionRef.current.lang = navigator.language || navigator.userLanguage;

    recognitionRef.current.onresult = (event) => {
      const result = event.results[0][0].transcript;
      console.log(result);
      setText(result);
      adjustHeight();
    };

    recognitionRef.current.onerror = (event) => {
      console.error("Speech Recognition Error:", event.error);
    };
  }, []);

  const startListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.start();
      setIsListening(true);
    }
  };

  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setIsListening(false);
    }
  };

  return (
    <>
      {isListening ? (
        <button
          className="form__button microphone"
          type="button"
          onClick={stopListening}
        >
          <Sprite icon={"microphone"} width={20} height={20} />
        </button>
      ) : (
        <button
          className="form__button microphone"
          type="button"
          onClick={startListening}
        >
          <Sprite icon={"microphone"} width={20} height={20} />
        </button>
      )}
    </>
  );
};

export default Microphone;
