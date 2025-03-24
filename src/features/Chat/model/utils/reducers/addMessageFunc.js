export function addMessageFunc(state, action) {
  const files = action.payload.files;
  const text = action.payload.text;

  state.generate = true;

  if (Object.keys(state.editItem).length) {
    const messages = state.messages[state.activeName];
    const { index } = state.editItem;
    const [item] = state.editItem.box;
    let newMessages;

    if (index > 0) {
      newMessages = messages.slice(0, index).concat(messages.slice(index + 1));
    } else {
      newMessages = messages.slice(1);
    }

    newMessages.push([
      {
        ...item,
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
      const joinSplit = splitText.join(" ");
      name =
        joinSplit.length > 0
          ? joinSplit
          : "Chat-" +
            (Object.keys(state.messages).filter((key) =>
              key.startsWith("Chat-")
            ).length +
              1);
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
