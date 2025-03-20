import React from "react";
import { classNames } from "../../../../shared/lib/classNames/classNames";
import Sprite from "../../../../shared/ui/Sprite/Sprite";
import { useDispatch } from "react-redux";
import { pinMessage } from "../../model/chatSlice";

const PinAngle = ({ index, pin }) => {
  const dispatch = useDispatch();
  return (
    <button
      className={classNames("chat__pin-angle", [], { active: pin })}
      onClick={() => {
        console.log(index, 'index')
        dispatch(pinMessage(index));
      }}
    >
      <Sprite width={18} height={18} icon={"pin-angle"} />
    </button>
  );
};

export default PinAngle;
