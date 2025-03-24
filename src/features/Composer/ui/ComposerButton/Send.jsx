import React from "react";
import Sprite from "../../../../shared/ui/Sprite/Sprite";
import { useSend } from "../../lib/hooks/useSend";

const Send = () => {
  const handleClick = useSend();

  return (
    <button
      className="composer__button send"
      type="button"
      onClick={handleClick}
    >
      <Sprite icon={"chat-send"} width={20} height={20} />
    </button>
  );
};

export default Send;
