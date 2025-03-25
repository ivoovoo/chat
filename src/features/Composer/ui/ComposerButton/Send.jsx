import React from "react";
import Sprite from "../../../../shared/ui/Sprite/Sprite";
import { useSend } from "../../lib/hooks/useSend";
import { useSelector } from "react-redux";

const Send = () => {
  const handleClick = useSend();
  const {textareaDisabled} = useSelector(s => s.composer)

  return (
    <button
      className="composer__button send"
      type="button"
      onClick={handleClick}
      disabled={textareaDisabled}
    >
      <Sprite icon={"chat-send"} width={20} height={20} />
    </button>
  );
};

export default Send;
