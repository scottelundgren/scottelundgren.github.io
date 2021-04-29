/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ description, lang, meta, title }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            social {
              twitter
            }
          }
        }
      }
    `
  )
  
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
          content: description,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:title`,
          content: title,
        },
//        {
//          name: `og:image`,
//          content: image,
//        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:description`,
          content: description,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.social?.twitter || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `msapplication-TileColor`,
          content: `#2b5797`,
        },
        {
          name: `theme-color`,
          content: `#ffffff`,
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