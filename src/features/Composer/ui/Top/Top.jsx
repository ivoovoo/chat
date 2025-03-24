import React from "react";
import ButtonIcon from "../../../../shared/ui/ButtonIcon/ButtonIcon";
import { useDispatch } from "react-redux";
import { resetChat } from "../../../Chat/model/chatSlice";
import { setFiles } from "../../model/composerSlice";

import './Top.css'

const Top = () => {
  const dispatch = useDispatch();
  return (
    <div className="composer__top">
      <ButtonIcon
        onClick={() => {
          dispatch(resetChat());
          dispatch(setFiles([]))
        }}
        className={"composer__clear"}
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
