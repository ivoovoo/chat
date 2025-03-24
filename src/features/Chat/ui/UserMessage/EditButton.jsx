import React from "react";
import Sprite from "../../../../shared/ui/Sprite/Sprite";
import { useDispatch, useSelector } from "react-redux";
import { addEditItem, deleteEditItem } from "../../model/chatSlice";
import { classNames } from "../../../../shared/lib/classNames/classNames";

const EditButton = ({ index }) => {
  const dispatch = useDispatch();
  const { editItem } = useSelector((s) => s.chat);

  const handleClick = () => {
    if (Object.keys(editItem).length && editItem.index === index) {
      dispatch(deleteEditItem());
      return
    }
    dispatch(addEditItem(index));
  };

  return (
    <button
      className={classNames("chat__edit", [], {
        active: editItem.index === index,
      })}
      onClick={handleClick}
    >
      <Sprite width={18} height={18} icon={"edit"} />
    </button>
  );
};

export default EditButton;
