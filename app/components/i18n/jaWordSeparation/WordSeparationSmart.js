import React from 'react'
import WordSeparationPure from './WordSeparationPure'
import getTextToRender from './separateWords.js'

const WordSeparationSmart = props => {
  const text = getTextToRender(props.string)
  return <WordSeparationPure {...props} text={text} />
}

export default WordSeparationSmart
