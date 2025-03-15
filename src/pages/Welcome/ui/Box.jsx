import React from "react";
import Sprite from "../../../shared/ui/Sprite/Sprite";
import { Link } from "react-router-dom";
import { classNames } from "../../../shared/lib/classNames/classNames";

const Box = ({ icon, title, to, children }) => {
  return (
    <div className={classNames("welcome__box", [], { pb: icon })}>
      {icon && (
        <div className="welcome__icon">
          <Sprite icon={icon} width={24} height={24} />
        </div>
      )}

      {title && <h5 className="welcome__box-title">{title}</h5>}

      {to ? (
        <Link className="welcome__link" to={to}>
          {children}
        </Link>
      ) : (
        <p className="welcome__text">{children}</p>
      )}
    </div>
  );
};

export default Box;
