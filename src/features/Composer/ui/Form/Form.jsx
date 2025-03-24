import Sprite from "../../../../shared/ui/Sprite/Sprite";
import ComposerButton from "../ComposerButton/ComposerButton";
import Microphone from "../Microphone/Microphone";
import MyTextarea from "../MyTextarea/MyTextarea";
import FileButton from "../Files/FileButton";
import { useSelector } from "react-redux";

import "./Form.css";

const Form = () => {
  const { generate } = useSelector((s) => s.chat);

  return (
    <form className="composer__form">
      {generate && (
        <Sprite
          className="composer__loader"
          width={20}
          height={20}
          icon={"loader"}
        />
      )}
      <MyTextarea />
      <ComposerButton />
      {!generate && (
        <>
          <FileButton />
          <Microphone className={"composer__button"} />
        </>
      )}
    </form>
  );
};

export default Form;
