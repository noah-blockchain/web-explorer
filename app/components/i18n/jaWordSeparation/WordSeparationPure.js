import React from 'react'

const WordSeparationPure = ({ text, className = '' }) => {
  const innerHtml = { __html: text }
  return (
    <span
      className={`text-wrap ${className}`}
      dangerouslySetInnerHTML={innerHtml}
    />
  )
}

export default WordSeparationPure
