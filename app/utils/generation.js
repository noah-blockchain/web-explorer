import Identicon from 'identicon.js';

export const generate_avatar = (hash, size = 64) => {
  let data = new Identicon(hash, size).toString();
  return `data:image/png;base64,${data}`
}
