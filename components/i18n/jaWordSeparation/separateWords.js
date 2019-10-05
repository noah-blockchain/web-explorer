import TinySegmenter from './TinySegmenter'

const tinySegmenter = new TinySegmenter()

function joinWithSpan(array) {
  let res = ''
  for (let i = 0, length = array.length; i < length; i++) {
    res += `<span>${array[i]}</span>`
  }
  return res
}

function separateByCharacter(text, character) {
  const separatedWordsArray = text.split(character)
  return joinWithSpan(separatedWordsArray)
}

function separateByHandler(text, handler) {
  const separatedWordsArray = handler(text)
  return joinWithSpan(separatedWordsArray)
}

function separateWords(text) {
  let separatedWordsByTag = ''

  const replaceableCharacter = ' | '
  if (text.indexOf(replaceableCharacter) > -1) {
    separatedWordsByTag = separateByCharacter(text, replaceableCharacter)
  } else {
    const handler = text => tinySegmenter.segment(text)
    separatedWordsByTag = separateByHandler(text, handler)
  }

  return separatedWordsByTag
}

export default separateWords
