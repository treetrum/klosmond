import React from 'react'
import Layout from '../components/layout'
import ContentPage from '../templates/ContentPage'

const IndexPage = () => (
  <Layout>
    <ContentPage title="Error 404">
            <p>Page not found</p>
        </ContentPage>
  </Layout>
)

export default IndexPage