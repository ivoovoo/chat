import Chat from "./ui/Chat/Chat";
import chatSlice, {
  addMessage,
  changeActiveName,
  finishGenerate,
  sendMessageThunk,
} from "./model/chatSlice";
import { FAVORITES_KEY } from "./model/constants/keys";

export {
  Chat,
  chatSlice,
  changeActiveName,
  FAVORITES_KEY,
  addMessage,
  sendMessageThunk,
  finishGenerate
};

