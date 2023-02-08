export function getLocalStorage(key) {
  try {
    return JSON.parse(window.localStorage.getItem(key));
  } catch (error) {
    return console.log(error);
  }
}

export function setLocalStorage(key, value) {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(key, JSON.stringify(value));
  }
}
