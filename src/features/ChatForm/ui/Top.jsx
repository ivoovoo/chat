import React from "react";
import ButtonIcon from "../../../shared/ui/ButtonIcon/ButtonIcon";

const Top = () => {
  return (
    <div className="chat-form__top">
      <ButtonIcon
        className={"chat-form__clear"}
        icon={{
          name: "clear",
          width: "24px",
          height: "24px",
        }}
      >
        New dialog
      </ButtonIcon>

      
    </div>
  );
};

export default Top;
