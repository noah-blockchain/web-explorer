import React from 'react'
import LanguageContext from './index'

const WithLanguageContext = Component => {
  return props => (
    <LanguageContext.Consumer>
      {language => <Component {...props} language={language} />}
    </LanguageContext.Consumer>
  )
}

export default WithLanguageContext
