import React from "react";
import Sprite from "../../../../shared/ui/Sprite/Sprite";
import { useDispatch } from "react-redux";
import { finishGenerate } from "../../../Chat";

const Stop = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(finishGenerate());
  };

  return (
    <button
      className="composer__button stop"
      type="button"
      onClick={handleClick}
    >
      <Sprite icon={"stop"} width={20} height={20} />
    </button>
  );
};

export default Stop;
