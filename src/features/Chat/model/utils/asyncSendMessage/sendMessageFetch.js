import image_1 from "../../../assets/image-1.png";
import image_2 from "../../../assets/image-2.png";
import image_3 from "../../../assets/image-3.png";
import image_4 from "../../../assets/image-4.png";

export async function sendMessageFetch(text) {
  if (text === "Send photos") {
    return {
      type: "answer",
      text: "Design development, UX/UI, and product design are all related terms in the field of design, but they refer to slightly different aspects of the design process. Design development refers...",
      photos: [image_1, image_2],
    };
  }

  if (text === "Send error") {
    return { type: "error", message: text };
  }
  return {
    type: "answer",
    text: "Design development, UX/UI, and product design are all related terms in the field of design, but they refer to slightly different aspects of the design process. Design development refers...",
  };
}
