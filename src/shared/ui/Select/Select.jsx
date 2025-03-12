import React, { useEffect, useRef, useState } from "react";
import Sprite from "../Sprite/Sprite";
import { classNames } from "../../lib/classNames/classNames";

import "./Select.css";

const Select = ({ children, className, list = [] }) => {
  const [show, setShow] = useState(false);
  const selectRef = useRef();
  const [value, setValue] = useState(list.length && list[0]);

  const handleClickOutside = (event) => {
    if (selectRef.current && !selectRef.current.contains(event.target)) {
      setShow(false);
    }
  };
 
  const changeValue = (v) => {
   setValue(v);
   setShow(false)
  }

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className={classNames("select", [className])} ref={selectRef}>
      <button className="select__button" onClick={() => setShow((b) => !b)}>
        {value}
        <Sprite width={20} height={20} icon={"chevron-down"} />
      </button>

      {show && (
        <ul className="select__list">
          {list.filter(v =>{
            console.log([v, value])
            
            return v !== value}).map((v) => (
            <li className="select__list-item">
              <button
                className="select__list-button"
                onClick={() => changeValue(v)}
              >
                {v}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;
