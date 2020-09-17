export function setItemToLocalStorage(key: string, value: object) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function removeItemFromLocalStorage(key: string) {
  localStorage.removeItem(key);
}

export function getItemFromLocalStorage(key: string) {
  return JSON.parse(localStorage.getItem(key)!);
}
