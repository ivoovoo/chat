import React from "react";
import ButtonIcon from "../../../../shared/ui/ButtonIcon/ButtonIcon";
import { useDispatch } from "react-redux";
import { resetChat } from "../../model/chatSlice";

const Top = () => {
  const dispatch = useDispatch();
  return (
    <div className="form__top">
      <ButtonIcon
        onClick={() => {
          dispatch(resetChat());
        }}
        className={"form__clear"}
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
