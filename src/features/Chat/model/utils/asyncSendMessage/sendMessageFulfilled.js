export function sendMessageFulfilled(state, action) {
  const activeMessage = state.messages[state.activeName];
  const { type, text, photos } = action.payload;
  if (type === "error") {
    activeMessage[activeMessage.length - 1].push({
      answer: true,
      text,
      type,
    });
    state.generate = false;
  } else {
    activeMessage[activeMessage.length - 1].push({
      answer: true,
      writing: true,
      text,
      photos,
      type,
    });
  }

  if (Object.keys(state.editItem).length) {
    state.editItem = {};
  }

  return state;
}
