import React from "react";
import ButtonIcon from "../../../../shared/ui/ButtonIcon/ButtonIcon";
import { useDispatch } from "react-redux";
import { resetChat } from "../../model/chatSlice";

const Top = ({setFiles}) => {
  const dispatch = useDispatch();
  return (
    <div className="form__top">
      <ButtonIcon
        onClick={() => {
          setFiles([])
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
