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
    item[0].pin = false;
    state.messages["Favorites"] = favorites.filter((favoritesItem) => {
      return !areArraysEqual(item, favoritesItem);
    });
    return state;
  }

  item[0].pin = true;
  favorites.push(item);

  return state;
}
