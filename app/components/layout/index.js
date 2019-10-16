import React from 'react'
import '~/common.blocks/index.less'
import LanguageContext from '~/contexts/language'
import SmoothScrolling from '~/utils/SmoothScrolling'
import HEAD from './parts/head'

class Layout extends React.Component {
  componentDidMount() {
    this.smoothScrolling = new SmoothScrolling()
    this.smoothScrolling.init()
  }

  componentWillUnmount() {
    this.smoothScrolling.destroy()
  }

  render() {
    const {
      pageTitle,
      language = 'en',
      children,
      description,
      ogDescription,
      locales
    } = this.props

    return (
      <LanguageContext.Provider value={language}>
        <HEAD
          title={pageTitle}
          description={description}
          locales={locales}
          ogDescription={ogDescription}
        />
        {children}
      </LanguageContext.Provider>
    )
  }
}

export default Layout
