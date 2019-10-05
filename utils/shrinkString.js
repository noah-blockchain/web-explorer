const shrinkString = (string, maxLength = 8) => {
  const start = Math.floor(maxLength / 2)
  const end = -1 * Math.floor(maxLength / 2)
  return string.slice(0, start) + ' ... ' + string.slice(end)
}

export default shrinkString
