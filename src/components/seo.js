/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { getSrc } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"

// Be lenient with null values making sure we
// return null if either argument is not provided
const constructUrl = (baseUrl, path) => !baseUrl || !path ? null : `${baseUrl}${path}`;

const SEO = ({ description, lang, meta, title, imageSrc, imageAlt, slug }) => {
  const { site, ogImageDefault } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
            title
            social {
              twitter
            }
            siteUrl
          }
        }
        ogImageDefault: file(relativePath: {eq: "icon.png"}) { 
          childImageSharp {
              gatsbyImageData(height: 260, width: 260)
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description;
  const imageUrl = constructUrl(site.siteMetadata.siteUrl, imageSrc);
  const ogImageUrl = imageUrl ?? constructUrl(site.siteMetadata.siteUrl, getSrc(ogImageDefault.childImageSharp.gatsbyImageData));  
  const pageUrl = constructUrl(site.siteMetadata.siteUrl, slug);

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
          property: `article:author`,
          content: site.siteMetadata.author,
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
          property: `og:image`,
          content: ogImageUrl,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: pageUrl,
        },
        {
          property: `twitter:card`,
          content: imageUrl ? `summary_large_image` : `summary`,
        },
        {
          property: `twitter:creator`,
          content: site.siteMetadata.social.twitter
        },
        {
          property: `twitter:description`,
          content: description,
        },
        {
          property: "twitter:image:alt",
          content: imageAlt || "scottelundgren.com logo",
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
          href: `/favicon-16x16.png`,
          sizes: `16x16`,
          type: `image/png`
        },
        {
          rel: `icon`,
          href: `/favicon-32x32.png`,
          sizes: `32x32`,
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