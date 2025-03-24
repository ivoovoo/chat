import React from "react";
import Sprite from "../../../../shared/ui/Sprite/Sprite";

const ErrorMessage = ({ item }) => {
  return (
    <div className="chat__error">
      <p className="chat__error-text">Error: {item.message}</p>
      <Sprite width={24} height={24} icon={'error'} />
    </div>
  );
};

export default ErrorMessage;
