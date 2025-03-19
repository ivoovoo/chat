import React, { useState } from "react";
import { classNames } from "../../../../shared/lib/classNames/classNames";
import Sprite from "../../../../shared/ui/Sprite/Sprite";
import { useDispatch } from "react-redux";
import { pinMessage } from "../../model/chatSlice";

const PinAngle = ({ index, pin }) => {
  const dispatch = useDispatch();
//   const [pinAngle, setPinAngle] = useState(pin);
  return (
    <button
      className={classNames("chat__pin-angle", [], { active: pin })}
      onClick={() => {
        dispatch(pinMessage(index));
        // setPinAngle((b) => !b);
      }}
    >
      <Sprite width={24} height={24} icon={"pin-angle"} />
    </button>
  );
};

export default PinAngle;
