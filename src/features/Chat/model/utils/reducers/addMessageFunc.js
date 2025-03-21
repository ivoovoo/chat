export function addMessageFunc(state, action) {
  const files = action.payload.files;
  const text = action.payload.text;


  if (Object.keys(state.editItem).length) {
    const messages = state.messages[state.activeName];
    const { index } = state.editItem;

    let newMessages;

    if (index > 0) {
      newMessages = messages.slice(0, index).concat(messages.slice(index + 1));
    } else {
      newMessages = messages.slice(1);
    }

    newMessages.push([
      {
        id: crypto.randomUUID(),
        activeName: state.activeName,
        message: text,
      },
    ]);
    state.messages[state.activeName] = newMessages;
    return state;
  }

  if (!state.activeName) {
    const splitText = text.split(" ");
    let name;
    if (splitText.length > 3) {
      name = splitText.slice(0, 3).join(" ") + "...";
    } else {
      name = splitText.join(" ");
    }

    state.activeName = name;
    state.messages[name] = [];
  }

  const newMessageBox = [
    {
      pin: false,
      id: crypto.randomUUID(),
      activeName: state.activeName,
      message: text,
      files,
    },
  ];

  state.messages[state.activeName].push(newMessageBox);
  return state;
}
