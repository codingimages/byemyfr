import React from "react"
import {Link} from "gatsby"

// layout
import Layout from "../components/layout"

// header
import GlobalHeader from "../components/globalHeader"

// bootstrap
import Container from "react-bootstrap/Container" 

// seo
import SEO from "../components/seo"

const PrivacyPage = () => (
  <Layout>
    <SEO title="by Emily" />
    <GlobalHeader
      title="Privacy"
      subTitle="Our policy"
    />
    <Container className="my-5">
      <ul>
        <li>You have the right to submit or not information in our forms.
        </li>
        <li>We only request your information in our contact form.
        </li>
        <li>We do not share or sell your data in any way or form.
        </li>
        <li>You can request us any time to get rid of the provided information you sent if any.
        </li>
      </ul>
      <p className="lead">If you still have any questions please let us know by <Link to="/contact">contacting us</Link>.</p>
    </Container>
  </Layout>
)

export default PrivacyPage
