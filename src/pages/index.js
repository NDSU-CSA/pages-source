import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hello</h1>
    <p>Welcome to the NDSU Cyber Security Student Association Homepage</p>
    <p>We like to have fun here.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/about/">About</Link><br/>
    <Link to="/getting_started/">Setting up a hacking environment</Link><br/>
    <Link to="/reverse_engineering/">Tools and tricks for disecting things</Link><br/>
  </Layout>
)

export default IndexPage
