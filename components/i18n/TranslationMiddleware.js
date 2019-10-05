import React from 'react'
import LanguageContext from '~/contexts/language'
import JapaneseWordSeparation from './jaWordSeparation/WordSeparationSmart'

const T = ({ language, string }) => {
  if (language === 'ja') {
    return <JapaneseWordSeparation string={string} />
  }

  const innerHtml = { __html: string }
  return <span dangerouslySetInnerHTML={innerHtml} />
}

const TranslationMiddleware = string => (
  <LanguageContext.Consumer>
    {language => <T language={language} string={string} />}
  </LanguageContext.Consumer>
)

export default TranslationMiddleware
