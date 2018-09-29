import React from 'react'
import Layout from '../components/layout'
import ContentPage from '../templates/ContentPage'

import portrait from '../images/portrait.jpg'

const IndexPage = () => (
  <Layout>
    <ContentPage title="About" hideTitle>
        <div className="row">
            <div className="medium-6 large-4 columns">
                <img src={portrait} alt="Katy Osmond" />
            </div>
            <div className="medium-6 large-4 columns">
                <h1 className="page-title">About</h1>
                <p>
                    Katy Osmond is a Sydney based graphic designer who works with both digital and hand based mediums, intertwining the both to
                    enhance her work, and explore different techniques.
                </p>
                <p>
                    She has freelanced for Sydney based studios Onement, La La Land, and the Australian branch of Hymix and Hanson construction.
                    Throughout her degree of Visual Communications at Western Sydney University, she completed two internships at Terrace Press
                    and Her Fashion Box.
                </p>
                <p>
                    Her curious mind is always leading her on new adventures and as a freelance designer and is always open to new projects to
                    keep her busy in her studio, as well as out and about meeting and working with new people.
                </p>
            </div>
        </div>
    </ContentPage>
  </Layout>
)

export default IndexPage
