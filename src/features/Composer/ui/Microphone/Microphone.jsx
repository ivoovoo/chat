import { useSpeech } from "../../lib/hooks/useSpeech";
import Sprite from "../../../../shared/ui/Sprite/Sprite";

import './Microphone.css'

const Microphone = () => {
  const { listening, startListening, stopListening } = useSpeech();

  return (
    <button
      className={'composer__button microphone'}
      type="button"
      onClick={listening ? stopListening : startListening}
    >
      <Sprite
        icon="microphone"
        width={20}
        height={20}
        stroke={listening ? "red" : "#919191"}
      />
    </button>
  );
};

export default Microphone;
