import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h2></h2>
    <Link to="/valmentaja">Valmentaja</Link>
  </Layout>
)

export default IndexPage
