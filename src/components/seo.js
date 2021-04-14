/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

function SEO({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `msapplication-TileColor`,
          content: `#2b5797`,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `theme-color`,
          content: `#ffffff`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
      link={[
        {
          rel: `apple-touch-icon`,
          href: `/apple-touch-icon.png`,
          sizes: `180x180`
        },
        {
          rel: `icon`,
          href: `/favicon-32x32.png`,
          sizes: `32x32`,
          type: `image/png`
        },
        {
          rel: `icon`,
          href: `/favicon-16x16.png`,
          sizes: `16x16`,
          type: `image/png`
        },
        {
          rel: `manifest`,
          href: `/site.webmanifest`
        },
        {
          rel: `mask-icon`,
          href: `/safari-pinned-tab.svg`,
          color: `#5bbad5`
        }
      ].concat()}
      />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO