import React, { useMemo } from "react";
import { months } from "../../config/months";

const ChatDate = () => {
  const dateMessage = useMemo(() => {
    const date = new Date();

    let hours = date.getHours(); // Получаем часы в 24-часовом формате
    const minutes = date.getMinutes(); // Получаем минуты
    const ampm = hours >= 12 ? "PM" : "AM"; // Определяем AM или PM
    hours = hours % 12; // Переводим в 12-часовой формат
    hours = hours ? hours : 12;
    const formattedTime = `${hours}.${minutes < 10 ? '0' + minutes : minutes} ${ampm}`;
    return `${formattedTime} ${date.getDate()} ${
      months[date.getMonth()]
    } `;
  }, []);
  return <div className="chat__date">{dateMessage}</div>;
};

export default ChatDate;
