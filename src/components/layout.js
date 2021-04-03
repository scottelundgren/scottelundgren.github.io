import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Sidebar from './sidebar'
import '../styles/main.scss'
import '../styles/fonts/font-awesome/css/font-awesome.min.css'

const DefaultLayout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            author
            description
            social {
              facebook
              github
              instagram
              linkedin
              twitter
              email
            }
          }
        }
      }
    `}
    
    render={data => (
      <div className="wrapper">
        <Helmet>
          <link href="https://fonts.googleapis.com/css?family=Lato|PT+Serif&display=swap" rel="stylesheet" />
        </Helmet>
        <Sidebar siteMetadata={data.site.siteMetadata} />
        {children}
      </div>
    )}
  />
)

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default DefaultLayout