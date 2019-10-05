import React from 'react'
import { IntlProvider } from 'react-intl'
import LanguageContext from '~/contexts/language'
import commonTranslations from '~/translations'

const TranslationProvider = ({ translations = {}, children }) => {
  return (
    <LanguageContext.Consumer>
      {language => {
        const commonMessages =
          commonTranslations[language] || commonTranslations['en']
        const providedMessages = translations[language] || translations['en']

        return (
          <IntlProvider
            locale="en"
            messages={{ ...commonMessages, ...providedMessages }}
          >
            {children}
          </IntlProvider>
        )
      }}
    </LanguageContext.Consumer>
  )
}

export default TranslationProvider
