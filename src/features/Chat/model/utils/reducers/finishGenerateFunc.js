export function finishGenerateFunc(state, action) {
  const message = action.payload;
  const messages = state.messages[state.activeName];
  let writingTrueItem = messages
    .find(([_, secondItem]) => secondItem.writing)
    .find((item) => item.writing);

    if(writingTrueItem.message !== message ) {
      writingTrueItem.message = message
    }
  writingTrueItem.writing = false;
  state.generate = false;

  return state;
}
