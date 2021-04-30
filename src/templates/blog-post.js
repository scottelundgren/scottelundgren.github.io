import React from "react"
import { Link, graphql } from "gatsby"
import { kebabCase } from "lodash"
import { GatsbyImage,getSrc } from "gatsby-plugin-image"
import { DiscussionEmbed } from "disqus-react"

import DefaultLayout from '../components/layout'
import SEO from '../components/seo'
import SubscriptionForm from '../components/subscribe'

import 'katex/dist/katex.min.css'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark

    const disqusConfig = {
      shortname: `scottelundgren`,
      config: { 
        identifier: post.id,
        title: post.frontmatter.title,
      },
    }

    return (
      <DefaultLayout location={location} >
        <SEO 
          title={post.frontmatter.title} 
          description={post.frontmatter.description}
          imageSrc={getSrc(post.frontmatter.image?.childImageSharp.gatsbyImageData)}
          imageAlt={post.frontmatter.imageAlt}
        />
        <div className="clearfix post-content-box">
          <article className="article-page">
            <div className="page-content">
              {post.frontmatter.image && (
                <div className="page-cover-image">
                  <figure>
                    <GatsbyImage
                      image={
                        post.frontmatter.image?.childImageSharp.gatsbyImageData
                      }
                      className="page-image"
                      key={
                        post.frontmatter.image?.childImageSharp.gatsbyImageData.src
                      }
                      alt={post.frontmatter.imageAlt}
                    />
                  </figure>
                </div>
              )}
              <div className="wrap-content">
                <header className="post-header">
                  <h1 className="post-title">{post.frontmatter.title}</h1>
                  <div className="post-info">
                    <span className="post-date">{post.frontmatter.date}</span>
                    <span className="post-read">{post.timeToRead} minute read</span>
                  </div>
                </header>

                <div dangerouslySetInnerHTML={{ __html: post.html }} />

                <SubscriptionForm tags={post.frontmatter.tags} />

                <div className="page-footer">
                  <div className="page-tag">
                    {post.frontmatter.tags &&
                      post.frontmatter.tags.map((tag) => (
                        <span key={tag}>
                          <Link className="tag" to={`/tags/${kebabCase(tag)}/`}>
                            # {tag}
                          </Link>
                        </span>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </article>
          <DiscussionEmbed {...disqusConfig} />
        </div>
      </DefaultLayout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "YYYY MMM DD")
        description
        tags
        image {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
          }
        }
      }
      html
      timeToRead
    }
  }
`