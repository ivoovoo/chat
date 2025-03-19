export function sendMessageFulfilled(state, action) {
  const message = state.messages[state.activeName];

  message[message.length - 1].push({
    answer: true,
    message: action.payload,
    writing: true,
    type: "text",
  });

  if (Object.keys(state.editItem).length) {
    state.editItem = {};
  }

  return state;
}
