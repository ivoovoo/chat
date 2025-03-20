import React from "react";
import Sprite from "../../../../shared/ui/Sprite/Sprite";
import { finishGenerate } from "../../model/chatSlice";
import { useDispatch } from "react-redux";

const Stop = ({text}) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(finishGenerate(text));
  };

  return (
    <button className="form__button stop" type="button" onClick={handleClick}>
      <Sprite icon={"stop"} width={20} height={20} />
    </button>
  );
};

export default Stop;
