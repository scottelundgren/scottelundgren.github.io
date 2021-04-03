import React from 'react'

import DefaultLayout from '../components/layout'
import SEO from '../components/seo'

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props

    return (
      <DefaultLayout>
        <div className="content-box clearfix">
        <SEO title="404: Not Found" />
        <h1>That page doesn&#39;t exist.</h1>
        <br />
        </div>
      </DefaultLayout>
    )
  }
}

export default NotFoundPage