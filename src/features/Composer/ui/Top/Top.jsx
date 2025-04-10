import React from "react";
import ButtonIcon from "../../../../shared/ui/ButtonIcon/ButtonIcon";
import {useDispatch, useSelector} from "react-redux";
import { resetChat } from "../../../Chat/model/chatSlice";
import { setFiles } from "../../model/composerSlice";

import './Top.css'

const Top = () => {
  const dispatch = useDispatch();
  const generate = useSelector((s) => s.chat.generate);
  return (
    <div className="composer__top">
      <ButtonIcon
        onClick={() => {
          dispatch(resetChat());
          dispatch(setFiles([]))
        }}
        disabled={generate}
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
