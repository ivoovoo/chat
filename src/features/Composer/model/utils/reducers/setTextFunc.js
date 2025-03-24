export function setTextFunc(state, action) {
  return {
    ...state,
    text: action.payload,
  };
}
