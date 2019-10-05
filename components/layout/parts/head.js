import React from 'react'
import Helmet from 'react-helmet'

function HEAD({
  title = '',
  titleTemplate = 'Blockchain Explorer',
  description = '',
  lang = 'en',
  meta = [],
  keywords = [],
  ogDescription = description
}) {
  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title}
      titleTemplate={`%s | ${titleTemplate}`}
      link={[{ rel: 'shortcut icon', href: require('~/images/favicon.png') }]}
      meta={[
        {
          name: `description`,
          content: description
        },
        {
          property: `og:title`,
          content: title
        },
        {
          property: `og:description`,
          content: ogDescription
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          name: `twitter:card`,
          content: `summary`
        },
        {
          name: `twitter:title`,
          content: title
        },
        {
          name: `twitter:description`,
          content: description
        }
      ]
        .concat(
          keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.join(`, `)
              }
            : []
        )
        .concat(meta)}
    />
  )
}

export default HEAD
