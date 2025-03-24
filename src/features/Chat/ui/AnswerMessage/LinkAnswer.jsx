import React from "react";
import Sprite from "../../../../shared/ui/Sprite/Sprite";

const LinkAnswer = ({ path, children }) => {
  return (
    <a className="chat__answer-link" href={path}>
        <Sprite width='20' height='20' icon={'globe-alt'} />
      {children}
    </a>
  );
};

export default LinkAnswer;
