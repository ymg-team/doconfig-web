export function setData (key, val) {
  return localStorage.setItem(key, val)
}

export function getData (key) {
  return localStorage.getItem(key)
}

export function destroy (key) {
  return localStorage.removeItem(key, '')
}
