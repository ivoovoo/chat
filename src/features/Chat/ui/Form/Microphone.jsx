import { useState, useEffect, useRef } from "react";
import Sprite from "../../../../shared/ui/Sprite/Sprite";

const Microphone = ({ setText }) => {
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef(null);

  useEffect(() => {
    if (!("webkitSpeechRecognition" in window)) {
      alert("Ваш браузер не поддерживает голосовой ввод.");
      return;
    }

    recognitionRef.current = new window.webkitSpeechRecognition();
    recognitionRef.current.continuous = false; // Чтобы не было дублирования
    recognitionRef.current.interimResults = false; // Отключает промежуточные результаты
    recognitionRef.current.lang = "ru-RU";

    recognitionRef.current.onresult = (event) => {
      const result = event.results[0][0].transcript;
      console.log(result)
      setText(result);
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
