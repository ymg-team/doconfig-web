/**
 * function to convert text string to base64
 * @param {*} str
 */
export function toBase64 (str) {
  return str
}

export function nl2br (str) {
  return str.replace(/(?:\r\n|\r|\n)/g, '<br />')
}

export function br2nl (str) {
  return str.replace(/<br\s*\/?>/mg,'\n');
}
