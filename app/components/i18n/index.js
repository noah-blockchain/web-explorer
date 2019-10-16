import React from 'react'
import TranslationMiddleware from './TranslationMiddleware'
import { FormattedHTMLMessage as IntlFormattedHTMLMessage } from 'react-intl'
import { FormattedMessage as IntlFormattedMessage } from 'react-intl'

export const FormattedHTMLMessage = props => {
  return (
    <IntlFormattedHTMLMessage {...props} children={TranslationMiddleware} />
  )
}

export const FormattedMessage = props => {
  return <IntlFormattedMessage {...props} />
}
