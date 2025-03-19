export function addEditItemFunc(state,action) {
    const index = action.payload;
    const messages = state.messages[state.activeName];

    state.editItem.box = messages[index];
    state.editItem.index = index
    return state
}