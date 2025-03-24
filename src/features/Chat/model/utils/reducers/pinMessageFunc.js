import { FAVORITES_KEY } from "../../constants/keys";

export function pinMessageFunc(state, action) {
  if (!state.messages[FAVORITES_KEY]) {
    state.messages[FAVORITES_KEY] = [];
  }
  const index = action.payload;
  const messages = state.messages[state.activeName];
  const item = messages[index];
  const favorites = state.messages[FAVORITES_KEY];

  if (item[0].pin) {
    state.messages[FAVORITES_KEY] = favorites.filter(([firstEl]) => {
      return item[0].id !== firstEl.id;
    });

    const homeState = state.messages[item[0].activeName].find(
      ([firstEl]) => firstEl.id === item[0].id
    );

    if (state) item[0].pin = false;
    homeState[0].pin = false;

    if (!Object.keys(state.messages[FAVORITES_KEY]).length) {
      delete state.messages[FAVORITES_KEY];
      state.activeName = null;
    }
    return state;
  }

  item[0].pin = true;
  favorites.push(item);

  return state;
}
