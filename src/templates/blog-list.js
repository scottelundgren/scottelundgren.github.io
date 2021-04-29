import React from 'react'
import DefaultLayout from '../components/layout'
import SEO from '../components/seo'
import { Link, graphql } from 'gatsby'

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
    const { currentPage, numPages } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? '/' : (currentPage - 1).toString()
    const nextPage = (currentPage + 1).toString()

    return (
      <DefaultLayout>
        <SEO
          title={siteTitle}
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <div className="content-box clearfix">
          {posts.map(({ node }) => {
            return (
              <article className="post" key={node.fields.slug}>
                {node.frontmatter.image &&
                 node.frontmatter.image.childImageSharp &&
                  node.frontmatter.image.childImageSharp.gatsbyImageData && (
                    <Link
                      to={node.fields.slug}
                      className="post-thumbnail"
                      style={{
                        backgroundImage: `url(${node.frontmatter.image.childImageSharp.gatsbyImageData.images.fallback.src})`,
                      }}
                    />
                  )}
                <div className="post-content">
                  <h2 className="post-title">
                    <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
                  </h2>
                  <p>{node.excerpt}</p>
                  <span className="post-date">
                    {node.frontmatter.date}&nbsp;&nbsp;—&nbsp;
                  </span>
                  <span className="post-words">
                    {node.timeToRead} minute read
                  </span>
                </div>
              </article>
            )
          })}
          <div className="container">
            <nav className="pagination" role="navigation">
              <ul>
                {!isFirst && (
                  <p>
                    <Link to={prevPage} rel="prev" className="newer-posts">
                      ← Previous Page
                    </Link>
                  </p>
                )}
                <p>
                  <span className="page-number">
                    Page {currentPage} of {numPages}
                  </span>
                </p>
                {!isLast && (
                  <p>
                    <Link to={nextPage} rel="next" className="older-posts">
                      Next Page →
                    </Link>
                  </p>
                )}
              </ul>
            </nav>
          </div>
        </div>
      </DefaultLayout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query blogPageQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          timeToRead
          frontmatter {
            date(formatString: "YYYY MMM DD")
            title
            image {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
              }
            }
          }
        }
      }
    }
  }
`