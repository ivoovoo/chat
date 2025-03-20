import { areArraysEqual } from "../../../../../shared/lib/areArrayEqual/areArrayEqual";

export function pinMessageFunc(state, action) {
  if (!state.messages["Favorites"]) {
    state.messages["Favorites"] = [];
  }

  const index = action.payload;

  const messages = state.messages[state.activeName];
  const item = messages[index];
  const favorites = state.messages["Favorites"];

  if (item[0].pin) {
    state.messages["Favorites"] = favorites.filter(([firstEl]) => {
      return item[0].id !== firstEl.id;
    });

    const homeState = state.messages[item[0].activeName].find(
      ([firstEl]) => firstEl.id === item[0].id
    );

    item[0].pin = false;
    homeState[0].pin = false;
    return state;
  }


  item[0].pin = true

  favorites.push(item);

  return state;
}
