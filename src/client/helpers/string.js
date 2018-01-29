export function nl2br (str) {
  return str.replace(/(?:\r\n|\r|\n)/g, '<br />')
}

export function br2nl (str) {
  return str.replace(/<br\s*\/?>/mg, '\n')
}
