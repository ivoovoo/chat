export function finishGenerateFunc(state) {
  const messages = state.messages[state.activeName];
  let writingTrueItem = messages
    .find(([_, secondItem]) => secondItem.writing)
    .find((item) => item.writing);


  writingTrueItem.writing = false;
  state.generate = false;

  return state;
}
