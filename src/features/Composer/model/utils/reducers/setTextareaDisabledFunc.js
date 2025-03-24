export function setTextareaDisabledFunc(state, action) {
  return {
    ...state,
    textareaDisabled: action.payload,
  };
}
