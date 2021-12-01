import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import HeroSection from "../components/Reusable/HeroSection"
import Infoblock from "../components/Reusable/Infoblock"
import DualInfoBlock from "../components/Reusable/DualInfoBlock"

import Coursecart from "../components/cart/Coursecart"
import Bundlecart from "../components/cart/Bundlecart"

const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Home" />
    <HeroSection
      title="I write Code"
      subtitle="LearnCodeOnline.in"
      heroclass="hero-background"
      image={data.img.childImageSharp.fluid}
    />
    <Infoblock heading="About Us" />
    <Coursecart courses={data.mycourses} />
    <Bundlecart bundles={data.mybundles} />
    <DualInfoBlock heading="Our Team" />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "heromain.png" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    mycourses: allContentfulCourses {
      edges {
        node {
          id
          title
          price
          category
          description {
            description
          }
          image {
            gatsbyImageData(height: 140, width: 230)
          }
        }
      }
    }
    mybundles: allContentfulBundles {
      edges {
        node {
          id
          title
          price
          image {
            gatsbyImageData(height: 140, width: 230)
          }
        }
      }
    }
  }
`

export default IndexPage
